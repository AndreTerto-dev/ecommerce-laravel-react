import React, { useState, useEffect } from "react";
import { Link, useForm, router } from "@inertiajs/react";
import Header from "@/Components/User/Header";
import Footer from "@/Components/User/Footer";
import { toast, Toaster } from "sonner";

export default function Show({ wishlist, success, error, info, warning }) {
    const { delete: deleteItem, post } = useForm();

    useEffect(() => {
        if (success) {
            toast.success(success); // Exibe o toast com a mensagem de sucesso
        }
        if (error) {
            toast.error(error); // Exibe o toast com a mensagem de erro
        }
        if (info) {
            toast.info(info); // Exibe o toast com a mensagem de informação
        }
        if (warning) {
            toast.warning(warning); // Exibe o toast com a mensagem de aviso
        }
    }, [success, error, info, warning]);

    const handleRemove = (itemId) => {
        router.delete(route("wishlist.remove", itemId));
    };

    const handleAdd = (productId) => {
        post(route("wishlist.add"), { product_id: productId });
    };

    return (
        <div className="bg-gray-50 relative">
            <Header />

            <div className="p-8">
                <div className="flex justify-center items-start">
                    {wishlist.items.length === 0 ? (
                        <p className="text-center text-gray-500">
                            Sua lista está vazia.
                        </p>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-5 gap-8 w-full">
                            {wishlist.items.map((item, index) => (
                                <div
                                    key={item.product.id}
                                    className="border rounded-lg p-4 shadow-sm hover:shadow-2xl transition-shadow duration-300 relative"
                                >
                                    <span className="text-white bg-[#017bff] py-1 px-2 rounded-lg text-sm font-semibold absolute">
                                        {item.product.discount}% OFF
                                    </span>
                                    <button
                                        onClick={() =>
                                            handleRemove(item.product.id)
                                        }
                                        className="text-white bg-black hover:bg-red-600 py-1 px-2 rounded-lg text-sm font-semibold absolute ml-52"
                                    >
                                        X
                                    </button>

                                    <a href={`/products/${item.product.slug}`}>
                                        <img
                                            src={item.product.image_path}
                                            alt={item.product.name}
                                            className="w-full h-auto rounded-lg mb-4 mt-8"
                                        />
                                    </a>

                                    <a href={`/products/${item.product.slug}`}>
                                        <h3 className="text-gray-700 font-bold">
                                            {item.product.name}
                                        </h3>
                                    </a>

                                    <p className="text-sm text-red-500 line-through">
                                        R${" "}
                                        {Number(item.product.price)
                                            .toFixed(2)
                                            .replace(".", ",")}
                                    </p>
                                    <p className="text-green-600 font-bold text-lg">
                                        R${" "}
                                        {Number(item.product.new_price)
                                            .toFixed(2)
                                            .replace(".", ",")}
                                    </p>
                                    <p className="text-sm text-gray-500">
                                        ou 12x de R${" "}
                                        {Number(item.product.installment_value)
                                            .toFixed(2)
                                            .replace(".", ",")}
                                    </p>
                                    <p className="text-xs text-gray-400 mt-2">
                                        +1453 unidades vendidas
                                    </p>
                                    <div className="flex justify-center mt-4">
                                        <Link
                                            href={route("cart.add")}
                                            method="post"
                                            data={{
                                                product_id: item.product.id,
                                                quantity: 1,
                                            }}
                                            as="button"
                                            type="button"
                                        >
                                            <button className="px-8 py-3 border rounded-lg bg-[#017bff] hover:bg-[#0164d9] text-white text-lg font-extrabold">
                                                COMPRAR AGORA
                                            </button>
                                        </Link>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </div>
    );
}
