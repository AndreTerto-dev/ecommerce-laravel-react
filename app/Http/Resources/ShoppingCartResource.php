<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ShoppingCartResource extends JsonResource
{
    public function toArray($request)
    {
        return [
            'id' => $this->id,
            'user_id' => $this->user_id,
            'total_quantity' => $this->items->sum('quantity'),
            'items' => CartItemResource::collection($this->items),
        ];
    }
}
