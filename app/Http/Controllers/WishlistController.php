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
                    ->with('failure', 'Produto ja está na lista de desejos');
            } else {
                WishlistItem::create([
                    'product_id' => $product->id,
                    'wishlist_id' => $wishlist->id,
                    'product' => $product,
                ]);
            }
        }

        // Retorne o carrinho completo para o frontend
        $wishlist = Auth::check() ? new WishlistResource($wishlist) : null;

        return to_route('wishlist.show')
            ->with('success', 'Produto adicionado com sucesso');
    }



    // Remover item do carrinho
    public function removeItem($itemId)
    {
        if (Auth::check()) {
            // Se o usuário estiver autenticado, remova 1 unidade do item no banco de dados
            $wishlist = Wishlist::where('user_id', Auth::id())->first();

            if ($wishlist) {
                $wishlistItem = WishlistItem::where('product_id', $itemId)->where('wishlist_id', $wishlist->id)->first();

                if ($wishlistItem) {
                    if ($wishlistItem->quantity > 1) {
                        // Se a quantidade é maior que 1, diminui 1
                        $wishlistItem->quantity -= 1;
                        $wishlistItem->save();
                    } else {
                        // Se a quantidade é 1, remove o item do carrinho
                        $wishlistItem->delete();
                    }
                }
            }
        }

        // Após a remoção, redireciona de volta para o carrinho
        return redirect()->route('wishlist.show')->with('message', 'item removido da lista de desejos');
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
        }

        return inertia('Wishlist/Show', [
            'wishlist' => $wishlist,
            'success' => session('success'), // Certifique-se de que a mensagem está na sessão
        ]);
    }
}
