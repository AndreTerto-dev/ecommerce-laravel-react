<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'price' => number_format($this->price, 2),
            'discount' => $this->discount,
            'new_price' => number_format($this->new_price, 2),
            'installment_count' => $this->installment_count,
            'installments' => number_format($this->installment_value, 2),
            'slug' => $this->slug,
            'stock_quantity' => $this->stock_quantity,
            'launch' => $this->launch,
            'brand' => new BrandResource($this->brand),
            'category' => new CategoryResource($this->category),
            'team' => new TeamResource($this->team),
            'image_path' => $this->image_path ? Storage::url($this->image_path) : '',
        ];
    }
}
