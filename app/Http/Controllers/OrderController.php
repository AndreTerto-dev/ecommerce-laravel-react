<?php

namespace App\Http\Controllers;

use App\Http\Requests\Order\OrderRequest;
use App\Http\Requests\ShippingDetail\ShippingDetailRequest;
use App\Http\Resources\ProductResource;
use App\Models\Order;
use App\Models\ShippingDetail;
use App\Models\ShoppingCart;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class OrderController extends Controller
{

    public function __construct(protected Order $order) {}

    public function checkout()
    {
        if (Auth::check()) {
            // Para o usuário autenticado, buscamos o carrinho do banco de dados e incluímos o relacionamento com os produtos
            $cart = ShoppingCart::where('user_id', Auth::id())
                ->with('items.product') // Certifique-se de que o relacionamento está correto no modelo
                ->first();

            // Mapeia os itens do carrinho e ajusta o caminho da imagem do produto
            $cart['items'] = $cart['items']->map(function ($item) {
                $product = $item->product;
                $product->image_path = $product->image_path ? Storage::url($product->image_path) : '';

                return [
                    'product' => new ProductResource($product), // Usa o ProductResource para formatar o produto
                    'quantity' => $item->quantity
                ];
            });
        } else {

        }

        return inertia('Order/Checkout', ['cart' => $cart]);
    }

    public function store(OrderRequest $orderRequest)
    {
        $data = $orderRequest->validated();

        // Criação do pedido (Order)
        $order = Order::create([
            'user_id' => Auth::id(),
            'total_amount' => $data['total_amount'], // Este valor precisa ser calculado corretamente
            'full_name' => $data['full_name'],
            'email' => $data['email'],
            'cellphone' => $data['cellphone'],
            'cpf' => $data['cpf'],
        ]);


        // Criação dos detalhes de envio (ShippingDetail)
        $shippingDetails = ShippingDetail::create([
            'order_id' => $order->id,
            'address' => $data['address'],
            'number' => $data['number'],
            'neighborhood' => $data['neighborhood'],
            'city' => $data['city'],
            'state' => $data['state'],
            'cep' => $data['cep'],
            'complement' => $data['complement'],
        ]);

        $payment = new MercadoPagoController();

        $payment->processPayment($data);
    }
}
