<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class ProductResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $newPrice = $this->discount ? $this->price - ($this->price * ($this->discount / 100)) : $this->price;

        $installments = $newPrice / 12;

        $productName = str_replace('/', '-', $this->name);

        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'price' => number_format($this->price, 2),
            'discount' => $this->discount,
            'new_price' => number_format($newPrice, 2),
            'installments' => number_format($installments, 2),
            'url' => Str::slug($productName),
            'stock_quantity' => $this->stock_quantity,
            'launch' => $this->launch,
            'brand' => new BrandResource($this->brand),
            'category' => new CategoryResource($this->category),
            'team' => new TeamResource($this->team),
            'image_path' => @Storage::url($this->images[0]->image_path) ?? '',
        ];
    }
}
