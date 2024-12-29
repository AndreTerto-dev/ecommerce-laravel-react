<?php

namespace App\Http\Controllers;

use App\Http\Requests\WishlistItem\WishlistItemRequest;
use App\Http\Resources\ProductResource;
use App\Http\Resources\WishlistResource;
use App\Models\Product;
use App\Models\Wishlist;
use App\Models\WishlistItem;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Storage;

class WishlistController extends Controller
{
    // Adicionar item ao carrinho
    public function addItem(WishlistItemRequest $request)
    {

        $product = Product::find($request->product_id);

        if (!$product) {
            return back()->with('error', 'Product not found');
        }

        // Se o usuário estiver autenticado, associe o item ao carrinho do usuário
        if (Auth::check()) {
            $wishlist = Wishlist::firstOrCreate(['user_id' => Auth::id()]);
            $wishlistItem = WishlistItem::where('product_id', $product->id)->first();

            if ($wishlistItem) {
                return to_route('wishlist.show')
                    ->with('info', 'Este produto já está na Lista de Desejos!');
            } else {
                WishlistItem::create([
                    'product_id' => $product->id,
                    'wishlist_id' => $wishlist->id,
                    'product' => $product,
                ]);
            }
        } else {
            return back()->with('warning', 'Faça login para adicionar à Lista de Desejos.');
        }

        // Retorne o carrinho completo para o frontend
        $wishlist = Auth::check() ? new WishlistResource($wishlist) : null;

        return to_route('wishlist.show')
            ->with('success', 'Produto adicionado à sua Lista de Desejos!');
    }



    // Remover item do carrinho
    public function removeItem($itemId)
    {
        if (Auth::check()) {
            // Se o usuário estiver autenticado, remova 1 unidade do item no banco de dados
            $wishlist = Wishlist::where('user_id', Auth::id())->first();

            if ($wishlist) {
                $wishlistItem = WishlistItem::where('product_id', $itemId)->where('wishlist_id', $wishlist->id)->first();

                if ($wishlistItem) $wishlistItem->delete();
                
            }
        } else {
            return back()->with('warning', 'Faça login para acessar sua Lista de Desejos.');
        }


        // Após a remoção, redireciona de volta para o carrinho
        return redirect()->route('wishlist.show')->with('success', 'Item removido da Lista de Desejos!');
    }

    public function showWishlist()
    {
        if (Auth::check()) {
            // Para o usuário autenticado, buscamos o carrinho do banco de dados e incluímos o relacionamento com os produtos
            $wishlist = Wishlist::where('user_id', Auth::id())
                ->with('items.product') // Certifique-se de que o relacionamento está correto no modelo
                ->first();

            // Verifica se o carrinho foi encontrado e inicializa items como uma coleção vazia
            $wishlist = $wishlist ?: ['items' => collect()];

            // Mapeia os itens do carrinho e ajusta o caminho da imagem do produto
            $wishlist['items'] = $wishlist['items']->map(function ($item) {
                $product = $item->product;
                $product->image_path = $product->image_path ? Storage::url($product->image_path) : '';

                return [
                    'product' => new ProductResource($product), // Usa o ProductResource para formatar o produto
                ];
            });
        } else {
            return back()->with('warning', 'Faça login para acessar sua Lista de Desejos.');
        }

        return inertia('Wishlist/Show', [
            'wishlist' => $wishlist,
            'success' => session('success'), // Certifique-se de que a mensagem está na sessão
            'error' => session('error'),
            'warning' => session('warning'),
            'info' => session('info'),

        ]);
    }
}
