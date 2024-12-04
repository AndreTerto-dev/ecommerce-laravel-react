<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class ShippingDetailResource extends JsonResource
{
    /**
     * Transforme o recurso em um array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request): array
    {
        return [
            'id' => $this->id,
            'order_id' => $this->order_id,
            'address' => $this->address,
            'neighborhood' => $this->neighborhood,
            'city' => $this->city,
            'state' => $this->state,
            'cep' => $this->cep,
            'country' => $this->country,
            'shipping_method' => $this->shipping_method,
            'tracking_number' => $this->tracking_number,
            'complement' => $this->complement,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
