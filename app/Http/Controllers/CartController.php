<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Http\Requests\CartItem\CartItemRequest;
use App\Http\Resources\ProductResource;
use App\Http\Resources\ShoppingCartResource;
use App\Models\CartItem;
use Illuminate\Support\Facades\Auth;
use App\Models\Product;
use App\Models\ProductImage;
use App\Models\ShoppingCart;
use Illuminate\Support\Facades\Storage;

class CartController extends Controller
{
    // Adicionar item ao carrinho
    public function addItem(CartItemRequest $request)
    {

        $product = Product::find($request->product_id);

        if (!$product) {
            return back()->with('error', 'Product not found');
        }

        // Se o usuário estiver autenticado, associe o item ao carrinho do usuário
        if (Auth::check()) {
            $cart = ShoppingCart::firstOrCreate(['user_id' => Auth::id()]);
            $cartItem = CartItem::where('product_id', $product->id)->first();

            if ($cartItem) {
                $cartItem->increment('quantity', $request->quantity);
            } else {
                CartItem::create([
                    'product_id' => $product->id,
                    'quantity' => $request->quantity,
                    'shopping_cart_id' => $cart->id, // Define o shopping_cart_id
                    'product' => $product,
                ]);
            }
        } else {
            // Usuário não autenticado: use a sessão para armazenar o item
            $cartItems = session()->get('cart.items', []);

            // Verifique se o item já está no carrinho da sessão
            if (isset($cartItems[$product->id])) {
                $cartItems[$product->id]['quantity'] += $request->quantity;
            } else {
                $cartItems[$product->id] = [
                        'product_id' => $product->id,
                        'quantity' => $request->quantity,
                    ];
            }

            // Atualize o carrinho na sessão
            session()->put('cart.items', $cartItems);

            // Calcula a quantidade total de itens no carrinho da sessão
            $totalQuantity = array_sum(array_column($cartItems, 'quantity'));
        }

        // Retorne o carrinho completo para o frontend
        $cart = Auth::check() ? new ShoppingCartResource($cart) : session()->get('cart.items');

        return to_route('cart.show')
        ->with('success', 'Produto adicionado com sucesso');
    }



    // Remover item do carrinho
    public function removeItem($itemId)
    {
        if (Auth::check()) {
            // Se o usuário estiver autenticado, remova 1 unidade do item no banco de dados
            $cart = ShoppingCart::where('user_id', Auth::id())->first();

            if ($cart) {
                $cartItem = CartItem::where('product_id', $itemId)->where('shopping_cart_id', $cart->id)->first();

                if ($cartItem) {
                    if ($cartItem->quantity > 1) {
                        // Se a quantidade é maior que 1, diminui 1
                        $cartItem->quantity -= 1;
                        $cartItem->save();
                    } else {
                        // Se a quantidade é 1, remove o item do carrinho
                        $cartItem->delete();
                    }
                }
            }
        } else {
            // Se o usuário não estiver autenticado, remova 1 unidade do item da sessão
            $cartItems = session()->get('cart.items', []);

            if (isset($cartItems[$itemId])) {
                if ($cartItems[$itemId]['quantity'] > 1) {
                    // Se a quantidade é maior que 1, diminui 1
                    $cartItems[$itemId]['quantity'] -= 1;
                } else {
                    // Se a quantidade é 1, remove o item da sessão
                    unset($cartItems[$itemId]);
                }
                session()->put('cart.items', $cartItems);
            }
        }

        // Após a remoção, redireciona de volta para o carrinho
        return redirect()->route('cart.show')->with('message', '1 unidade do item removida do carrinho');
    }


    public function showCart()
    {
        if (Auth::check()) {
            // Para o usuário autenticado, buscamos o carrinho do banco de dados e incluímos o relacionamento com os produtos
            $cart = ShoppingCart::where('user_id', Auth::id())
                ->with('items.product') // Certifique-se de que o relacionamento está correto no modelo
                ->first();

            // Verifica se o carrinho foi encontrado e inicializa items como uma coleção vazia
            $cart = $cart ?: ['items' => collect()];

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
            // Para o usuário não autenticado, o código permanece o mesmo
            $cartItems = session()->get('cart.items', []);
            $products = Product::whereIn('id', array_keys($cartItems))->get();

            $cart = [
                'items' => collect($cartItems)->map(function ($item) use ($products) {
                    $product = $products->firstWhere('id', $item['product_id']);
                    if ($product) {
                        $product->image_path = $product->image_path ? Storage::url($product->image_path) : '';
                    }

                    return [
                        'product' => ProductResource::make($product),
                        'quantity' => $item['quantity']
                    ];
                })
            ];
        }

        return inertia('Cart/Show', ['cart' => $cart]);
    }



}
