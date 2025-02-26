import React, { useEffect, useState } from "react";
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

    const progressiveDiscount = Math.floor(cart.total_quantity / 3) * 150;

    // Calcular total e desconto
    const total =
        cart.items.reduce((sum, item) => {
            return sum + (item.new_price || item.price) * item.quantity;
        }, 0) - progressiveDiscount; // Subtrai o desconto progressivo do total

    // Calcular desconto total (desconto de promoção + desconto por novo preço)
    const discount =
        cart.items.reduce((sum, item) => {
            return (
                sum +
                (item.price - (item.new_price || item.price)) * item.quantity
            );
        }, 0) + progressiveDiscount; // Soma o desconto progressivo

    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const freeItems = [];
    const paidItems = [];

    // Criar cópia dos itens do carrinho para manipular
    const itemsCopy = [...cart.items];

    // Separar itens pagos e grátis
    let freeItemCount = Math.floor(cart.total_quantity / 3);

    itemsCopy.forEach((item) => {
        let remainingQuantity = item.quantity;

        // Se ainda houver itens gratuitos a serem atribuídos
        while (freeItemCount > 0 && remainingQuantity > 0) {
            freeItems.push({ ...item, quantity: 1 });
            remainingQuantity--;
            freeItemCount--;
        }

        // O restante vai para os itens pagos
        if (remainingQuantity > 0) {
            paidItems.push({ ...item, quantity: remainingQuantity });
        }
    });

    return (
        <>
            {isMobile ? (
                <div className="bg-gray-50">
                    <Header />
                    <div className="p-8 mb-12">
                        <h1 className="text-3xl font-bold text-start mb-8 text-gray-800 ml-4">
                            Meu Carrinho
                        </h1>
                        <div className="justify-center gap-8 items-start">
                            {cart.items.length === 0 ? (
                                <p className="text-center text-gray-500">
                                    Seu carrinho está vazio.
                                </p>
                            ) : (
                                <>
                                    {/* Lista de itens pagos */}
                                    <div className="py-8 px-6 bg-white rounded-2xl shadow-2xl">
                                        <ul className="space-y-6">
                                            {paidItems.map((item) => (
                                                <li
                                                    key={item.id}
                                                    className="py-4"
                                                >
                                                    <div className="flex items-center space-x-4">
                                                        <img
                                                            src={
                                                                item.image_path
                                                            }
                                                            alt={item.name}
                                                            className="w-24 h-24 object-cover rounded-md"
                                                        />
                                                        <div className="space-y-1">
                                                            <p className="text-base font-semibold text-gray-800">
                                                                {item.name}
                                                            </p>
                                                            <p className="text-sm font-semibold text-gray-700">
                                                                Tamanho:{" "}
                                                                {item.size} /{" "}
                                                                {
                                                                    item.personalization
                                                                }
                                                            </p>
                                                            <div className="flex gap-4">
                                                                <p className="text-[#017bff] font-bold">
                                                                    R${" "}
                                                                    {item.new_price ??
                                                                        item.price}
                                                                </p>
                                                                {item.new_price && (
                                                                    <p className="text-gray-400 line-through">
                                                                        R${" "}
                                                                        {
                                                                            item.price
                                                                        }
                                                                    </p>
                                                                )}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="flex items-center justify-center space-x-2 mt-4">
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
                                                                item_id:
                                                                    item.id,
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
                                                                    item.id
                                                                )
                                                            }
                                                            className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                                                        >
                                                            -
                                                        </button>
                                                    </div>
                                                </li>
                                            ))}
                                        </ul>
                                        {freeItems.length > 0 && (
                                            <div>
                                                <ul className="space-y-6">
                                                    {freeItems.map((item) => (
                                                        <li
                                                            key={item.id}
                                                            className="py-4"
                                                        >
                                                            <div className="flex items-center space-x-4">
                                                                <img
                                                                    src={
                                                                        item.image_path
                                                                    }
                                                                    alt={
                                                                        item.name
                                                                    }
                                                                    className="w-24 h-24 object-cover rounded-md"
                                                                />
                                                                <div className="space-y-1">
                                                                    <p className="text-base font-semibold text-gray-800">
                                                                        {
                                                                            item.name
                                                                        }
                                                                    </p>
                                                                    <p className="text-sm font-semibold text-gray-700">
                                                                        Tamanho:{" "}
                                                                        {
                                                                            item.size
                                                                        }{" "}
                                                                        /{" "}
                                                                        {
                                                                            item.personalization
                                                                        }
                                                                    </p>
                                                                    <p className="text-[#017bff] font-bold">
                                                                        Grátis!
                                                                    </p>
                                                                    <p className="text-xs text-center bg-[#017bff] rounded-md p-1 font-extrabold">
                                                                        LEVE 3
                                                                        PAGUE 2
                                                                        (- R${" "}
                                                                        150,00)
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div className="flex items-center justify-center space-x-2 mt-4">
                                                                <Link
                                                                    className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                                                                    href={route(
                                                                        "cart.add"
                                                                    )}
                                                                    method="post"
                                                                    data={{
                                                                        product_id:
                                                                            item
                                                                                .product
                                                                                .id,
                                                                        item_id:
                                                                            item.id,
                                                                        quantity: 1,
                                                                    }}
                                                                    as="button"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </Link>
                                                                <span className="text-lg font-semibold">
                                                                    {
                                                                        item.quantity
                                                                    }
                                                                </span>
                                                                <button
                                                                    onClick={() =>
                                                                        handleRemove(
                                                                            item.id
                                                                        )
                                                                    }
                                                                    className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                                                                >
                                                                    -
                                                                </button>
                                                            </div>
                                                        </li>
                                                    ))}
                                                </ul>
                                            </div>
                                        )}
                                    </div>

                                    {/* Seção de Itens Grátis */}

                                    {/* Resumo do Carrinho */}
                                    <div className="px-8 py-12 bg-white shadow-2xl rounded-2xl text-center mt-10">
                                        {cart.total_quantity >= 3 && (
                                            <p className="text-sm font-bold text-[#017bff] mb-4">
                                                Compre 2 leve 3 (-R$
                                                {Math.floor(
                                                    cart.total_quantity / 3
                                                ) * 150}
                                                )
                                            </p>
                                        )}

                                        <h2 className="text-xl font-extrabold text-gray-950 mb-2">
                                            Total R$ {total.toFixed(2)}
                                        </h2>
                                        <p className="text-sm font-bold text-[#017bff] mb-4">
                                            Você economizou R${" "}
                                            {discount.toFixed(2)}!
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
            ) : (
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
                                            {paidItems.map((item) => {
                                                return (
                                                    <li
                                                        key={item.id}
                                                        className="flex items-center justify-between py-4"
                                                    >
                                                        <div className="flex items-center space-x-4">
                                                            <img
                                                                src={
                                                                    item.image_path
                                                                } // A URL da imagem do produto
                                                                alt={item.name}
                                                                className="w-28 h-28 object-cover rounded-md"
                                                            />
                                                            <div>
                                                                <p className="text-lg font-semibold text-gray-800">
                                                                    {item.name}
                                                                </p>
                                                                <p className="text-base font-semibold text-gray-700">
                                                                    Tamanho:{" "}
                                                                    {item.size}{" "}
                                                                    /{" "}
                                                                    {
                                                                        item.personalization
                                                                    }
                                                                </p>
                                                                <p className="text-[#017bff] font-bold">
                                                                    R${" "}
                                                                    {item.new_price ??
                                                                        item.price}
                                                                </p>
                                                                {item.new_price && (
                                                                    <p className="text-gray-400 line-through">
                                                                        R${" "}
                                                                        {
                                                                            item.price
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
                                                                            item
                                                                                .product
                                                                                .id,
                                                                        item_id:
                                                                            item.id,
                                                                        quantity: 1,
                                                                    }}
                                                                    as="button"
                                                                    type="button"
                                                                >
                                                                    +
                                                                </Link>
                                                                <span className="text-lg font-semibold">
                                                                    {
                                                                        item.quantity
                                                                    }
                                                                </span>
                                                                <button
                                                                    onClick={() =>
                                                                        handleRemove(
                                                                            item.id
                                                                        )
                                                                    }
                                                                    className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                                                                >
                                                                    -
                                                                </button>
                                                            </div>
                                                            <p className="text-lg font-semibold text-gray-800 w-24">
                                                                R${" "}
                                                                {(item.new_price ||
                                                                    item.price) *
                                                                    item.quantity}
                                                            </p>
                                                        </div>
                                                    </li>
                                                );
                                            })}

                                            {/* Exibir os itens gratuitos */}
                                            {freeItems.length > 0 && (
                                                <div>
                                                    <ul className="space-y-6">
                                                        {freeItems.map(
                                                            (item) => {
                                                                return (
                                                                    <li
                                                                        key={
                                                                            item.id
                                                                        }
                                                                        className="flex items-center justify-between py-4"
                                                                    >
                                                                        <div className="flex items-center space-x-4">
                                                                            <img
                                                                                src={
                                                                                    item.image_path
                                                                                }
                                                                                alt={
                                                                                    item.name
                                                                                }
                                                                                className="w-28 h-28 object-cover rounded-md"
                                                                            />
                                                                            <div>
                                                                                <p className="text-lg font-semibold text-gray-800">
                                                                                    {
                                                                                        item.name
                                                                                    }
                                                                                </p>
                                                                                <p className="text-base font-semibold text-gray-700">
                                                                                    Tamanho:{" "}
                                                                                    {
                                                                                        item.size
                                                                                    }{" "}
                                                                                    /{" "}
                                                                                    {
                                                                                        item.personalization
                                                                                    }
                                                                                </p>
                                                                                <p className="text-[#017bff] font-bold">
                                                                                    Grátis!
                                                                                </p>
                                                                                <p className="text-xs text-center bg-[#017bff] rounded-md p-1 font-extrabold mt-1">
                                                                                    CUPOM
                                                                                    APLICADO
                                                                                    -
                                                                                    LEVE
                                                                                    3
                                                                                    PAGUE
                                                                                    2
                                                                                    (-
                                                                                    R${" "}
                                                                                    150,00
                                                                                    )
                                                                                </p>
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
                                                                                            item
                                                                                                .product
                                                                                                .id,
                                                                                        item_id:
                                                                                            item.id,
                                                                                        quantity: 1,
                                                                                    }}
                                                                                    as="button"
                                                                                    type="button"
                                                                                >
                                                                                    +
                                                                                </Link>
                                                                                <span className="text-lg font-semibold">
                                                                                    {
                                                                                        item.quantity
                                                                                    }
                                                                                </span>
                                                                                <button
                                                                                    onClick={() =>
                                                                                        handleRemove(
                                                                                            item.id
                                                                                        )
                                                                                    }
                                                                                    className="px-3 py-1 bg-gray-200 rounded-lg hover:bg-gray-300"
                                                                                >
                                                                                    -
                                                                                </button>
                                                                            </div>
                                                                            <p className="text-lg font-semibold text-gray-800 w-24">
                                                                                R${" "}
                                                                                {
                                                                                    0
                                                                                }
                                                                            </p>
                                                                        </div>
                                                                    </li>
                                                                );
                                                            }
                                                        )}
                                                    </ul>
                                                </div>
                                            )}
                                        </ul>
                                    </div>

                                    <div className="px-8 py-12 bg-white shadow-2xl rounded-2xl text-center">
                                        {cart.total_quantity >= 3 && (
                                            <p className="text-sm font-bold text-[#017bff] mb-4">
                                                Compre 2 leve 3 (-R$
                                                {Math.floor(
                                                    cart.total_quantity / 3
                                                ) * 150}
                                                )
                                            </p>
                                        )}
                                        <h2 className="text-xl font-extrabold text-gray-950 mb-2">
                                            Total R$ {total.toFixed(2)}
                                        </h2>
                                        <p className="text-sm font-bold text-[#017bff] mb-4">
                                            Você economizou R${" "}
                                            {discount.toFixed(2)}!
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
            )}
        </>
    );
}
