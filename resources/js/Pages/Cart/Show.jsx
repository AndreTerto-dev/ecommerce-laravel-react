import React from "react";
import { Link, useForm, router } from "@inertiajs/react";
import Header from "@/Components/User/Header";
import Footer from "@/Components/User/Footer";

export default function Show({ cart }) {
    const { delete: deleteItem, post } = useForm();

    const handleRemove = (itemId) => {
        router.delete(route("cart.remove", itemId));
    };

    const handleAdd = (productId) => {
        post(route("cart.add"), { product_id: productId, quantity: 1 });
    };

    // Calcular total e desconto
    const total = cart.items.reduce((sum, item) => {
        return (
            sum + (item.product.new_price || item.product.price) * item.quantity
        );
    }, 0);

    const discount = cart.items.reduce((sum, item) => {
        return (
            sum +
            (item.product.price -
                (item.product.new_price || item.product.price)) *
                item.quantity
        );
    }, 0);

    return (
        <div className="bg-gray-50">
            <Header />
            <div className="p-8 mb-12">
                <h1 className="text-3xl font-bold text-start mb-8 text-gray-800 ml-4">
                    Meu Carrinho
                </h1>
                <div className="flex justify-center gap-8 items-start">
                    {cart.items.length === 0 ? (
                        <p className="text-center text-gray-500">
                            Seu carrinho está vazio.
                        </p>
                    ) : (
                        <>
                            <div className="p-8 bg-white w-[70%] rounded-2xl shadow-2xl">
                                <div className="flex justify-between mb-4 bg-gray-100 p-1 px-3 rounded-xl">
                                    <div className="w-20 text-center font-bold text-gray-800">
                                        Produto
                                    </div>
                                    <div className="flex">
                                        <div className="w-20 mr-24 text-center font-bold text-gray-800">
                                            Quantidade
                                        </div>
                                        <div className="w-20 text-center font-bold text-gray-800">
                                            Total
                                        </div>
                                    </div>
                                </div>

                                <ul className="space-y-6">
                                    {cart.items.map((item) => {
                                        console.log(item.product); // Verifique os dados do produto no console
                                        return (
                                            <li
                                                key={item.product.id}
                                                className="flex items-center justify-between py-4"
                                            >
                                                <div className="flex items-center space-x-4">
                                                    <img
                                                        src={
                                                            item.product
                                                                .image_path
                                                        } // A URL da imagem do produto
                                                        alt={item.product.name}
                                                        className="w-28 h-28 object-cover rounded-md"
                                                    />
                                                    <div>
                                                        <p className="text-lg font-semibold text-gray-800">
                                                            {item.product.name}
                                                        </p>
                                                        <p className="text-sm text-gray-500">
                                                            {
                                                                item.product
                                                                    .description
                                                            }
                                                        </p>
                                                        <p className="text-[#017bff] font-bold">
                                                            R${" "}
                                                            {item.product
                                                                .new_price ??
                                                                item.product
                                                                    .price}
                                                        </p>
                                                        {item.product
                                                            .new_price && (
                                                            <p className="text-gray-400 line-through">
                                                                R${" "}
                                                                {
                                                                    item.product
                                                                        .price
                                                                }
                                                            </p>
                                                        )}
                                                    </div>
                                                </div>
                                                <div className="flex">
                                                    <div className="flex items-center space-x-2 mr-24 w-20">
                                                        <Link
                                                            className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                                                            href={route(
                                                                "cart.add"
                                                            )}
                                                            method="post"
                                                            data={{
                                                                product_id:
                                                                    item.product
                                                                        .id,
                                                                quantity: 1,
                                                            }}
                                                            as="button"
                                                            type="button"
                                                        >
                                                            +
                                                        </Link>
                                                        <span className="text-lg font-semibold">
                                                            {item.quantity}
                                                        </span>
                                                        <button
                                                            onClick={() =>
                                                                handleRemove(
                                                                    item.product
                                                                        .id
                                                                )
                                                            }
                                                            className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                                                        >
                                                            -
                                                        </button>
                                                    </div>
                                                    <p className="text-lg font-semibold text-gray-800 w-24">
                                                        R${" "}
                                                        {(item.product
                                                            .new_price ||
                                                            item.product
                                                                .price) *
                                                            item.quantity}
                                                    </p>
                                                </div>
                                            </li>
                                        );
                                    })}
                                </ul>
                            </div>

                            <div className="px-8 py-12 bg-white shadow-2xl rounded-2xl text-center">
                                <h2 className="text-xl font-extrabold text-gray-950 mb-2">
                                    Total R$ {total.toFixed(2)}
                                </h2>
                                <p className="text-sm font-bold text-[#017bff] mb-4">
                                    Você economizou R$ {discount.toFixed(2)}!
                                </p>
                                <div className="mt-12">
                                    <Link
                                        href="/checkout"
                                        className="px-16 py-3 text-xl border-2 border-[#017bff] font-black bg-[#017bff] text-white rounded-lg hover:bg-[#0164d9] hover:border-[#0164d9]"
                                    >
                                        Finalizar Compra
                                    </Link>
                                </div>
                                <div className="my-8">
                                    <Link
                                        href="/dashboard"
                                        className="px-9 py-3 text-xl font-extrabold border-2 bg-white text-gray-950 border-gray-950 rounded-lg hover:bg-gray-100"
                                    >
                                        Continuar Comprando
                                    </Link>
                                </div>
                                <p className="mt-4 text-gray-500 text-sm font-bold">
                                    Pagamentos 100% seguros
                                </p>
                            </div>
                        </>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
