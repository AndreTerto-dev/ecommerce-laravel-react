<?php

namespace App\Services\Brand;

use App\Exceptions\Brand\BrandAlreadyExistsException;
use App\Exceptions\Brand\BrandNotFoundException;
use App\Models\Brand;
use Illuminate\Http\Response;

class BrandService
{
    public function __construct(protected Brand $brand) {}

    public function index(array $filters = [])
    {
        $query = $this->brand->query();

        if (isset($filters['name'])) {
            $query->where('name', 'like', '%' . $filters['name'] . '%');
        }

        return $query->orderBy('id', 'desc')->paginate(10);
    }

    public function create(array $data)
    {
        if ($this->findExistingBrandByName($data['name'])) {
            throw new BrandAlreadyExistsException(__('messages.already-exists', ['model' => modelName('Brand')]), Response::HTTP_CONFLICT);
        }

        return $this->brand->create($data);
    }

    public function getById(int $id)
    {
        $brand = $this->brand->find($id);

        if (!$brand) {
            throw new BrandNotFoundException(__('messages.not-found', ['model' => modelName('Brand')]), Response::HTTP_NOT_FOUND);
        }

        return $brand;
    }

    public function update(int $id, array $data)
    {
        $brand = $this->getById($id);

        if ($this->findExistingBrandByName($data['name'])) {
            throw new BrandAlreadyExistsException(__('messages.already-exists', ['model' => modelName('Brand')]), Response::HTTP_CONFLICT);
        }

        $brand->update($data);

        return $brand;
    }

    public function destroy(int $id)
    {
        $brand = $this->getById($id);

        $brand->delete();

        return $id;
    }

    private function findExistingBrandByName(string $name)
    {
        return $this->brand->where('name', $name)->first();
    }
}
