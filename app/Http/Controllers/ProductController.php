<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Product\ProductRequest;
use App\Http\Resources\BrandResource;
use App\Http\Resources\CategoryResource;
use App\Http\Resources\ProductResource;
use App\Http\Resources\TeamResource;
use App\Models\Brand;
use App\Models\Category;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\Team;
use App\Services\Product\ProductService;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProductController extends Controller
{
    protected ProductService $productService;

    public function __construct(ProductService $productService)
    {
        $this->productService = $productService;
    }

    public function index()
    {
        $query = request("name") ? ['name' => request("name")] : [];
        $products = $this->productService->index($query);

        return inertia("Product/Index", [
            "products" => ProductResource::collection($products),
            "queryParams" => request()->query() ?: null,
            "success" => session('success'),
        ]);
    }

    public function create()
    {
        $brands = Brand::query()->orderBy('name', 'asc')->get();
        $categories = Category::query()->orderBy('name', 'asc')->get();
        $teams = Team::query()->orderBy('name', 'asc')->get();

        return inertia('Product/Create', [
            'brands' => BrandResource::collection($brands),
            'categories' => CategoryResource::collection($categories),
            'teams' => TeamResource::collection($teams),
        ]);
    }

    public function store(ProductRequest $request)
    {
        $data = $request->validated();

        $images = $data['images'] ?? null;

        // Substitui barras por hífens no nome do produto
        $productNameSanitized = str_replace('/', '-', $data['name']);

        // Gera o slug a partir do nome sanitizado (sem barras)
        $data['slug'] = Str::slug($productNameSanitized);

        // Verifica se há imagens
        $images = $data['images'] ?? null;

        // Cria o produto com os dados incluindo o slug
        $product = Product::create($data);

        // Se houver imagens, faz o upload e cria as associações com o produto
        if ($images) {
            foreach ($images as $id => $image) {
                // Gera um nome de pasta para armazenar as imagens com base no slug do produto
                $productNameSlug = $data['slug'];

                $randomString = Str::random(40);
                $imageName = $randomString . '.' . $image->getClientOriginalExtension();
                $imagePath = $image->storeAs('products/' . $productNameSlug, $imageName, 'public');

                // Cria a imagem do produto no banco de dados
                ProductImage::create([
                    'product_id' => $product->id,
                    'image_path' => $imagePath,
                    'index' => $id,
                ]);

                // Atualiza o campo image_path do produto com a primeira imagem
                if ($id === 0) {
                    $product->image_path = $imagePath;
                    $product->save();
                }
            }
        }


        return to_route('product.index')
        ->with('success', 'Product was created successfully');
    }


    public function show(int $id)
    {
        $product = $this->productService->getById($id);

        $images = ProductImage::where('product_id', $id)
        ->pluck('image_path')
        ->map(function ($imagePath) {
            return Storage::url($imagePath);
        });

        return inertia('Product/Show', [
            'product' => new ProductResource($product),
            'images' => $images,
            'success' => session('success'),
        ]);
    }

    public function edit(Product $product)
    {
        $brands = Brand::query()->orderBy('name', 'asc')->get();
        $categories = Category::query()->orderBy('name', 'asc')->get();
        $teams = Team::query()->orderBy('name', 'asc')->get();

        return inertia('Product/Edit', [
            'product' => new ProductResource($product),
            'brands' => BrandResource::collection($brands),
            'categories' => CategoryResource::collection($categories),
            'teams' => TeamResource::collection($teams),
        ]);
    }

    public function update(ProductRequest $request, Product $product)
    {
        $data = $request->validated();

        $images = $data['images'] ?? null;

        $this->productService->update($product->id, $data);

        if ($images) {
            foreach ($product->images as $oldImage) {
                Storage::disk('public')->delete($oldImage->image_path);
                $oldImage->delete();
            }

            foreach ($images as $id => $image) {
                $productNameSlug = Str::slug($data['name']);

                $randomString = Str::random(40);
                $imageName = $randomString . '.' . $image->getClientOriginalExtension();
                $imagePath = $image->storeAs('products/' . $productNameSlug, $imageName, 'public');


                ProductImage::create([
                    'product_id' => $product->id,
                    'image_path' => $imagePath,
                    'index' => $id,
                ]);
            }
        }

        return to_route('product.index')
        ->with('success', "Product \"{$product->name}\" was updated successfully");
    }

    public function destroy(Product $product)
    {
        $name = $product->name;

        foreach ($product->images as $image) {
            Storage::disk('public')->delete($image->image_path);
            $image->delete();
        }

        $this->productService->destroy($product->id);

        return to_route('product.index')
            ->with('success', "Product \"$name\" was deleted");
    }

    public function getProductByLaunch()
    {
        $query = request("name") ? ['name' => request("name")] : [];
        $products = $this->productService->getProductByLaunch($query);

        return inertia("User/Dashboard", [
            "products" => ProductResource::collection($products),
        ]);
    }

    public function getProduct($slug)
    {
        // Supondo que você tenha um método em ProductService para obter o produto pelo slug ou URL
        $product = $this->productService->getProductBySlug($slug); // Modifique conforme sua lógica de busca

        $images = ProductImage::where('product_id', $product->id)
        ->pluck('image_path')
        ->map(function ($imagePath) {
            return Storage::url($imagePath);
        });

        return inertia("User/Product", [
            "product" => new ProductResource($product), // Retorna um único produto
            'images' => $images,
            'warning' => session('warning'),
        ]);
    }

}
