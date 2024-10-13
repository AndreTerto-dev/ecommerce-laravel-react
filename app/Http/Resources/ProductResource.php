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
            'price' => $this->price,
            'stock_quantity'=> $this->stock_quantity,
            'brand' => new BrandResource($this->brand),
            'category' => new CategoryResource($this->category),
            'team' => new TeamResource($this->team),
            'image_path' => @Storage::url($this->images[0]->image_path) ?? '', 
        ];
    }
}
