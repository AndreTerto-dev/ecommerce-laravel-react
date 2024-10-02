<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Category\CategoryRequest;
use App\Http\Resources\CategoryResource;
use App\Models\Category;
use App\Services\Category\CategoryService;

class CategoryController extends Controller
{
    protected CategoryService $categoryService;

    public function __construct(CategoryService $categoryService)
    {
        $this->categoryService = $categoryService;
    }

    public function index()
    {
        $query = request("name") ? ['name' => request("name")] : [];
        $categories = $this->categoryService->index($query);

        return inertia("Category/Index", [
            "categories" => CategoryResource::collection($categories),
            "queryParams" => request()->query() ?: null,
            "success" => session('success'),
        ]);
    }

    public function create()
    {
        return inertia("Category/Create");
    }

    public function store(CategoryRequest $request)
    {
        $data = $request->validated();
        $this->categoryService->create($data);

        return to_route('category.index')
            ->with('success', 'Category was created');
    }

    public function show(int $id)
    {
        $category = $this->categoryService->getById($id);

        return inertia('Category/Show', [
            'category' => new CategoryResource($category),
            "success" => session('success'),
        ]);
    }

    public function edit(Category $category)
    {
        return inertia('Category/Edit', [
            'category' => new CategoryResource($category),
        ]);
    }

    public function update(CategoryRequest $request, Category $category)
    {
        $data = $request->validated();
        $this->categoryService->update($category->id, $data);

        return to_route('category.index')
            ->with('success', "Category \"$category->name\" was updated");
    }

    public function destroy(Category $category)
    {
        $name = $category->name;
        $this->categoryService->destroy($category->id);

        return to_route('category.index')
            ->with('success', "Category \"$name\" was deleted");
    }
}
