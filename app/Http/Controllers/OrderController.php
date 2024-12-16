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
use Illuminate\Support\Str;

class OrderController extends Controller
{

    public function __construct(protected Order $order) {}

    public function checkout()
    {
        if (Auth::check()) {
            $cart = ShoppingCart::where('user_id', Auth::id())->with('items.product')->first();
        } else {
            $guestId = $this->getGuestId();
            $cart = ShoppingCart::where('guest_id', $guestId)->with('items.product')->first();
        }

        $cart = $cart ?: ['items' => collect()];

        $cart['items'] = $cart['items']->map(function ($item) {
            $product = $item->product;
            $product->image_path = $product->image_path ? Storage::url($product->image_path) : '';

            return [
                'product' => new ProductResource($product), // Usa o ProductResource para formatar o produto
                'quantity' => $item->quantity
            ];
        });

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

    private function getGuestId()
    {
        // Verifica se já existe um guest_id na sessão
        if (!session()->has('guest_id')) {
            // Gera um novo UUID e armazena na sessão
            session()->put('guest_id', (string) Str::uuid());
        }

        // Retorna o guest_id da sessão
        return session('guest_id');
    }
}
