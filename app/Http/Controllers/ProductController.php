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
        $image = $data['image'] ?? null;
        if ($image) {
            $productNameSlug = Str::slug($data['name']);
            $data['image_path'] = $image->store('product/' . $productNameSlug, 'public');
        }

        $this->productService->create($data);

        return to_route('product.index')
            ->with('success', 'Product was created');
    }

    public function show(int $id)
    {
        $product = $this->productService->getById($id);

        return inertia('Product/Show', [
            'product' => new ProductResource($product),
            "success" => session('success'),
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
        $image = $data['image'] ?? null;
        if ($image) {
            if ($product->image_path) {
                Storage::disk('public')->deleteDirectory(dirname($product->image_path));
            }
            $data['image_path'] = $image->store('product/' . Str::random(), 'public');
        }
        $this->productService->update($product->id, $data);

        return to_route('product.index')
            ->with('success', "Product \"$product->name\" was updated");
    }

    public function destroy(Product $product)
    {
        $name = $product->name;
        $this->productService->destroy($product->id);
        if ($product->image_path) {
            Storage::disk('public')->deleteDirectory(dirname($product->image_path));
        }
        return to_route('product.index')
            ->with('success', "Product \"$name\" was deleted");
    }
}
