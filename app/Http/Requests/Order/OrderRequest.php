<?php

namespace App\Http\Requests\Order;

use Illuminate\Foundation\Http\FormRequest;
use Symfony\Contracts\Service\Attribute\Required;

class OrderRequest extends FormRequest
{
    /**
     * Obtenha as validações para os dados de entrada.
     *
     * @return array
     */
    public function rules(): array
    {
        return [ 
            'total_amount' => 'required|numeric', 
            'size' => 'required|string',
            'personalization' => 'required|string',
            'full_name' => 'required|string',
            'status' => 'nullable|string', 
            'email' => 'required|email',
            'cellphone' => 'required|string',  
            'cpf' => 'required|string',

            'address' => 'required|string',
            'number' => 'required|string',
            'neighborhood' => 'required|string',
            'city' => 'required|string',
            'state' => 'required|string',
            'cep' => 'required|string',
            'country' => 'nullable|string',
            'shipping_method' => 'nullable|string',
            'tracking_number' => 'nullable|string',
            'complement' => 'required|string', 
        ];
    }
}
