<?php

namespace App\Http\Controllers;

use App\Http\Requests\CartItem\CartItemRequest;
use App\Http\Resources\ProductResource;
use App\Models\Product;
use App\Models\ShoppingCart;
use App\Models\CartItem;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;
use Illuminate\Support\Str;

class CartController extends Controller
{
    /**
     * Exibe o carrinho de compras
     */
    public function showCart()
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

        return inertia('Cart/Show', ['cart' => $cart]);

    }

    /**
     * Adiciona um item ao carrinho
     */
    public function addItem(CartItemRequest $request)
    {
        $request->validate([
            'product_id' => 'required|exists:products,id',
            'quantity' => 'required|integer|min:1',
        ]);

        $product = Product::find($request->product_id);

        if (Auth::check()) {
            $cart = ShoppingCart::firstOrCreate(['user_id' => Auth::id()]);
        } else {
            $guestId = $this->getGuestId();
            $cart = ShoppingCart::firstOrCreate(['guest_id' => $guestId]);
        }

        $cartItem = CartItem::where('product_id', $product->id)->where('shopping_cart_id', $cart->id)->first();

        if ($cartItem) {
            $cartItem->increment('quantity', $request->quantity);
        } else {
            CartItem::create([
                'product_id' => $product->id,
                'quantity' => $request->quantity,
                'shopping_cart_id' => $cart->id,
            ]);
        }

    }

    /**
     * Remove um item do carrinho
     */
    public function removeItem($itemId)
    {

        if (Auth::check()) {
            $cart = ShoppingCart::where('user_id', Auth::id())->first();
        } else {
            $guestId = $this->getGuestId();
            $cart = ShoppingCart::where('guest_id', $guestId)->first();
        }

        if ($cart) {
            $cartItem = CartItem::where('product_id', $itemId)
                ->where('shopping_cart_id', $cart->id)
                ->first();

            if ($cartItem) {
                if ($cartItem->quantity > 1) {
                    $cartItem->decrement('quantity');
                } else {
                    $cartItem->delete();
                }
            }
        }

    }

    /**
     * Sincroniza o carrinho após o login
     */
    public function syncCartAfterLogin()
    {
        $guestId = $this->getGuestId();
        $guestCart = ShoppingCart::where('guest_id', $guestId)->with('items')->first();

        if (!$guestCart) {
            return; // Sem carrinho para sincronizar
        }

        $userCart = ShoppingCart::firstOrCreate(['user_id' => Auth::id()]);

        foreach ($guestCart->items as $item) {
            $existingItem = CartItem::where('shopping_cart_id', $userCart->id)
                ->where('product_id', $item->product_id)
                ->first();

            if ($existingItem) {
                $existingItem->increment('quantity', $item->quantity);
            } else {
                CartItem::create([
                    'product_id' => $item->product_id,
                    'quantity' => $item->quantity,
                    'shopping_cart_id' => $userCart->id,
                ]);
            }
        }

        $guestCart->delete();
        session()->forget('guest_id'); // Limpa o guest_id da sessão
    }


    /**
     * Gera ou recupera o guest_id da sessão
     */
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

    public function addItemCart(CartItemRequest $request)
    {

        $product = Product::find($request->product_id);

        if (Auth::check()) {
            $cart = ShoppingCart::firstOrCreate(['user_id' => Auth::id()]);
        } else {
            $guestId = $this->getGuestId();
            $cart = ShoppingCart::firstOrCreate(['guest_id' => $guestId]);
        }

        $cartItem = CartItem::where('product_id', $product->id)->where('shopping_cart_id', $cart->id)->first();

        if ($cartItem) {
            $cartItem->increment('quantity', $request->quantity);
        } else {
            CartItem::create([
                'product_id' => $product->id,
                'quantity' => $request->quantity,
                'shopping_cart_id' => $cart->id,
            ]);
        }

        return to_route('cart.show')->with('success', 'Item adicionado ao carrinho!');
    }
}
