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

        $product = Product::create($data);

        if ($images) {
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

}
