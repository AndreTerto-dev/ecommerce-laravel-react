<?php

namespace App\Services\Product;

use App\Exceptions\Product\ProductAlreadyExistsException;
use App\Exceptions\Product\ProductNotFoundException;
use App\Models\Product;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Storage;

class ProductService
{
    public function __construct(protected Product $product) {}

    public function index(array $filters = [])
    {
        // Carrega os produtos com as imagens
        $query = $this->product->with(['images' => function ($query) {
            $query->where('index', 0);
        }]);

        $sortFields = request("sort_field", "created_at");
        $sortDirection = request("sort_direction", "desc");

        if (isset($filters['name'])) {
            $query->where('name', 'like', '%' . $filters['name'] . '%');
        }

        $products = $query->orderBy($sortFields, $sortDirection)->paginate(5);

        return $products;
    }



    public function create(array $data)
    {
        if ($this->findExistingProductByName($data['name'])) {
            throw new ProductAlreadyExistsException(__('messages.already-exists', ['model' => modelName('Product')]), Response::HTTP_CONFLICT);
        }

        return $this->product->create($data);
    }

    public function getById(int $id)
    {
        $product = $this->product->find($id);

        if (!$product) {
            throw new ProductNotFoundException(__('messages.not-found', ['model' => modelName('Product')]), Response::HTTP_NOT_FOUND);
        }

        return $product;
    }

    public function update(int $id, array $data)
    {
        $product = $this->getById($id);

        $existingProduct = $this->findExistingProductByName($data['name']);

        if ($existingProduct && $existingProduct->id !== $id) {
            throw new ProductAlreadyExistsException(
                __('messages.already-exists', ['model' => modelName('Product')]),
                Response::HTTP_CONFLICT
            );
        }

        $product->update($data);

        return $product;
    }

    public function destroy(int $id)
    {
        $product = $this->getById($id);

        $product->delete();

        return $id;
    }

    private function findExistingProductByName(string $name)
    {
        return $this->product->where('name', $name)->first();
    }

    public function getProductByLaunch(array $filters = [])
    {
        $query = $this->product->with(['images' => function ($query) {
            $query->where('index', 0);
        }]);

        $query->where('launch', true);

        $products = $query->get();

        return $products;
    }

    public function getProductBySlug($slug)
    {
        return Product::where('slug', $slug)->firstOrFail(); // Altere 'slug' para o campo que você está usando para o URL
    }

}
