<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class OrderResource extends JsonResource
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
            'user_id' => $this->user_id,
            'total_amount' => $this->total_amount,
            'full_name' => $this->full_name,
            'status' => $this->status,
            'email' => $this->email,
            'cellphone' => $this->cellphone,
            'cpf' => $this->cpf,
            'created_at' => $this->created_at,
            'updated_at' => $this->updated_at,
        ];
    }
}
