<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;

class ProductImageRequest extends FormRequest
{
    public function rules()
    {
        return [
            'product_id' => 'required|exists:products,id',
            'image' => 'nullable|image',
        ];
    }
}
