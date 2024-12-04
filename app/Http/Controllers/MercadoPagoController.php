<?php

namespace App\Http\Controllers;

use App\Models\ShoppingCart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use WandesCardoso\MercadoPago\Facades\MercadoPago;
use WandesCardoso\MercadoPago\DTO\Item;
use WandesCardoso\MercadoPago\DTO\Payer;
use WandesCardoso\MercadoPago\DTO\Payment;
use WandesCardoso\MercadoPago\DTO\BackUrls;
use WandesCardoso\MercadoPago\DTO\Preference;


class MercadoPagoController extends Controller
{

    public function processPayment($data)
    {
        // Obtenha o carrinho do usuário autenticado
        $cart = ShoppingCart::where('user_id', Auth::id())
            ->with('items.product') // Certifique-se de que 'items.product' esteja corretamente configurado no modelo
            ->first();

        if (!$cart || $cart->items->isEmpty()) {
            return response()->json(['error' => 'Carrinho vazio'], 400);
        }

        // Inicialize o pagador (payer)
        $payer = new Payer(
            $data['email'] // Substitua pelo e-mail do usuário autenticado, se necessário
        );

        // Inicialize a lista de itens
        $items = $cart->items->map(function ($cartItem) {
            $product = $cartItem->product;

            // Crie um item para cada produto no carrinho
            return Item::make()
                ->setTitle($product->name) // Nome do produto
                ->setQuantity($cartItem->quantity) // Quantidade
                ->setUnitPrice($product->new_price) // Preço unitário
                ->setDescription($product->description ?? '') // Descrição do produto (opcional)
                ->setPictureUrl($product->image_path ? Storage::url($product->image_path) : '') // URL da imagem
                ->setCategoryId($product->category_id ?? 'default'); // Categoria do produto (opcional)
        });

        // Crie a preferência com os itens do carrinho
        $preference = Preference::make()
            ->setPayer($payer)
            ->setBackUrls(new BackUrls(
                'https://www.mysite.com.br?success',
                'https://www.mysite.com.br?pending',
                'https://www.mysite.com.br?failure',
            ))
            ->setExternalReference('Order123'); // Referência externa para controle de pedidos

        // Adicione todos os itens à preferência
        foreach ($items as $item) {
            $preference->addItem($item);
        }

        // Envie a preferência para o Mercado Pago
        $response = MercadoPago::preference()->create($preference);

        dd($response['body']->init_point);

    }

}
