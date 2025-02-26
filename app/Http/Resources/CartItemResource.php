<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class CartItemResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'product_id' => $this->product_id,
            'name' => $this->name,
            'quantity' => $this->quantity,
            'product' => new ProductResource($this->product),
            'price' => number_format($this->product->price, 2),
            'new_price' => number_format($this->product->new_price, 2),
            'installment_count' => $this->product->installment_count,
            'installments' => number_format($this->product->installment_value, 2),
            'size' => $this->size,
            'personalization' => $this->personalization,
            'image_path' => $this->image_path,
        ];
    }
}
