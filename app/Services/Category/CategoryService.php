<?php

namespace App\Services\Category;

use App\Exceptions\Category\CategoryAlreadyExistsException;
use App\Exceptions\Category\CategoryNotFoundException;
use App\Models\Category;
use Illuminate\Http\Response;

class CategoryService
{
    public function __construct(protected Category $category) {}

    public function index(array $filters = [])
    {
        $query = $this->category->query();

        $sortFields = request("sort_field", "created_at");
        $sortDirection = request("sort_direction", "desc");

        if (isset($filters['name'])) {
            $query->where('name', 'like', '%' . $filters['name'] . '%');
        }

        return $category = $query->orderBy($sortFields, $sortDirection)->paginate(10);
    }

    public function create(array $data)
    {
        if ($this->findExistingCategoryByName($data['name'])) {
            throw new CategoryAlreadyExistsException(__('messages.already-exists', ['model' => modelName('Category')]), Response::HTTP_CONFLICT);
        }

        return $this->category->create($data);
    }

    public function getById(int $id)
    {
        $category = $this->category->find($id);

        if (!$category) {
            throw new CategoryNotFoundException(__('messages.not-found', ['model' => modelName('Category')]), Response::HTTP_NOT_FOUND);
        }

        return $category;
    }

    public function update(int $id, array $data)
    {
        $category = $this->getById($id);

        if ($this->findExistingCategoryByName($data['name'])) {
            throw new CategoryAlreadyExistsException(__('messages.already-exists', ['model' => modelName('Category')]), Response::HTTP_CONFLICT);
        }

        $category->update($data);

        return $category;
    }

    public function destroy(int $id)
    {
        $category = $this->getById($id);

        $category->delete();

        return $id;
    }

    private function findExistingCategoryByName(string $name)
    {
        return $this->category->where('name', $name)->first();
    }
}
