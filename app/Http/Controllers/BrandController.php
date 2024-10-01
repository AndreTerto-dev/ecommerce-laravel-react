<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\Brand\BrandRequest;
use App\Http\Resources\BrandResource;
use App\Models\Brand;
use App\Services\Brand\BrandService;

class BrandController extends Controller
{
    protected BrandService $brandService;

    public function __construct(BrandService $brandService)
    {
        $this->brandService = $brandService;
    }

    public function index()
    {
        $query = request("name") ? ['name' => request("name")] : [];
        $brands = $this->brandService->index($query);

        return inertia("Brand/Index", [
            "brands" => BrandResource::collection($brands),
            "queryParams" => request()->query() ?: null,
            "success" => session('success'),
        ]);
    }

    public function create()
    {
        return inertia("Brand/Create");
    }

    public function store(BrandRequest $request)
    {
        $data = $request->validated();
        $this->brandService->create($data);

        return to_route('brand.index')
            ->with('success', 'Brand was created');
    }

    public function show(int $id)
    {
        $brand = $this->brandService->getById($id);

        return inertia('Brand/Show', [
            'brand' => new BrandResource($brand),
            "success" => session('success'),
        ]);
    }

    public function edit(Brand $brand)
    {
        return inertia('Brand/Edit', [
            'brand' => new BrandResource($brand),
        ]);
    }

    public function update(BrandRequest $request, Brand $brand)
    {
        $data = $request->validated();
        $this->brandService->update($brand->id, $data);

        return to_route('brand.index')
            ->with('success', "Brand \"$brand->name\" was updated");
    }

    public function destroy(Brand $brand)
    {
        $name = $brand->name;
        $this->brandService->destroy($brand->id);

        return to_route('brand.index')
            ->with('success', "Brand \"$name\" was deleted");
    }
}
