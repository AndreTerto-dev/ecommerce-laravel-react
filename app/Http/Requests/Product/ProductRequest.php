<?php

namespace App\Http\Requests\Product;

use Illuminate\Foundation\Http\FormRequest;

class ProductRequest extends FormRequest
{
    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => 'required|string|max:60',
            'description' => 'nullable|string|max:200',
            'price' => 'required|numeric|min:0',
            'stock_quantity' => 'nullable|integer|min:0',
            'launch' => 'nullable|boolean',
            'discount' => 'nullable|integer|min:0|max:80',
            'brand_id' => 'nullable|exists:brands,id',
            'category_id' => 'required|exists:categories,id',
            'team_id' => 'required|exists:teams,id',
            'images.*' => 'nullable|image',
        ];
    }
}
