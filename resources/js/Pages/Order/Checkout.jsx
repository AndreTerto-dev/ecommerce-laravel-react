import React, { useState } from "react";
import { Link, useForm, router } from "@inertiajs/react";
import Header from "@/Components/User/Header";
import TextInput from "@/Components/User/TextInput";
import InputError from "@/Components/User/InputError";

export default function Checkout({ cart }) {
    const { data, setData, post, errors } = useForm({
        total_amount: "",
        email: "",
        full_name: "",
        cellphone: "",
        cpf: "",
        cep: "",
        city: "",
        state: "",
        address: "",
        number: "",
        neighborhood: "",
        complement: "",
    });

    const subTotal = cart.items.reduce((sum, item) => {
        return (
            sum + item.product.price * item.quantity
        );
    }, 0);

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

    const taxaJuros = 0.0165; // mercado pago
    const meses = 12;

    // Calcula a parcela diretamente
    const installment = ((total * (1 + taxaJuros) ** meses) / meses).toFixed(2);
    
    const handleRemove = (itemId) => {
        router.delete(route("cart.remove", itemId));
    };

    const onSubmit = (e) => {
        e.preventDefault();

        setData("total_amount", total);

        post(route("order.store"));
    };

    

    return (
        <div className="min-h-screen bg-gray-100">
            {/* Header */}
            <div className="bg-[#017bff] text-white font-extrabold text-sm text-center p-2">
                Essa oferta acaba em poucos minutos!
            </div>

            <div className="max-w-6xl mx-auto flex gap-10 mt-10">
                {/* Form Section */}
                <form
                    onSubmit={onSubmit}
                    className="bg-white p-6 rounded shadow-md space-y-2 flex-1"
                >
                    <div>
                        <h2 className="text-lg font-bold flex items-center gap-2">
                            <span role="img" aria-label="user">
                                👤
                            </span>
                            Informações Pessoais
                        </h2>
                        <p className="text-sm text-gray-500 mb-6">
                            Para quem devemos entregar o pedido?
                        </p>
                    </div>

                    <div className="space-y-2">
                        <div>
                            <TextInput
                                id="email"
                                type="email"
                                name="email"
                                value={data.email}
                                placeholder="E-mail"
                                className="mt-1 block w-full"
                                autoComplete="username"
                                isFocused={true}
                                onChange={(e) =>
                                    setData("email", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.email}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <TextInput
                                id="full_name"
                                type="text"
                                name="full_name"
                                value={data.full_name}
                                placeholder="Nome completo"
                                className="mt-1 block w-full"
                                onChange={(e) =>
                                    setData("full_name", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.full_name}
                                className="mt-2"
                            />
                        </div>

                        <div className="flex justify-between gap-4">
                            <div className="w-full">
                                <TextInput
                                    id="cellphone"
                                    type="text"
                                    name="cellphone"
                                    value={data.phone}
                                    placeholder="Celular"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("cellphone", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.cellphone}
                                    className="mt-2"
                                />
                            </div>
                            <div className="w-full">
                                <TextInput
                                    id="cpf"
                                    type="text"
                                    name="cpf"
                                    value={data.cpf}
                                    placeholder="CPF"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("cpf", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.cpf}
                                    className="mt-2"
                                />
                            </div>
                        </div>
                    </div>

                    <div>
                        <h2 className="text-lg font-bold flex items-center gap-2 mt-8">
                            <span role="img" aria-label="delivery">
                                🚚
                            </span>
                            Informações de Entrega
                        </h2>
                        <p className="text-sm text-gray-500 mb-6">
                            Para onde devemos entregar o pedido?
                        </p>
                    </div>

                    <div className="flex justify-between gap-4">
                        <div>
                            <TextInput
                                id="cep"
                                type="text"
                                name="cep"
                                value={data.cep}
                                placeholder="CEP"
                                className="mt-1 block w-full"
                                autoComplete="postal-code"
                                isFocused={true}
                                onChange={(e) => setData("cep", e.target.value)}
                            />
                            <InputError message={errors.cep} className="mt-2" />
                        </div>
                        <div>
                            <TextInput
                                id="city"
                                type="text"
                                name="city"
                                value={data.city}
                                placeholder="Cidade"
                                className="mt-1 block w-full"
                                autoComplete="address-level2"
                                onChange={(e) =>
                                    setData("city", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.city}
                                className="mt-2"
                            />
                        </div>

                        <div>
                            <TextInput
                                id="state"
                                type="text"
                                name="state"
                                value={data.state}
                                placeholder="Estado"
                                className="mt-1 block w-full"
                                autoComplete="address-level1"
                                onChange={(e) =>
                                    setData("state", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.state}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between gap-4">
                        <div className="w-5/6">
                            <TextInput
                                id="address"
                                type="text"
                                name="address"
                                value={data.adress}
                                placeholder="Endereço"
                                className="mt-1 block w-full"
                                autoComplete="street-address"
                                onChange={(e) =>
                                    setData("address", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.address}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <TextInput
                                id="number"
                                type="text"
                                name="number"
                                value={data.number}
                                placeholder="Número"
                                className="mt-1 block w-full"
                                autoComplete="address-line2"
                                onChange={(e) =>
                                    setData("number", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.number}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <div className="flex justify-between gap-4">
                        <div className="w-5/6">
                            <TextInput
                                id="neighborhood"
                                type="text"
                                name="neighborhood"
                                value={data.neighborhood}
                                placeholder="Bairro"
                                className="mt-1 block w-full"
                                autoComplete="neighborhood"
                                onChange={(e) =>
                                    setData("neighborhood", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.neighborhood}
                                className="mt-2"
                            />
                        </div>
                        <div>
                            <TextInput
                                id="complement"
                                type="text"
                                name="complement"
                                value={data.complement}
                                placeholder="Complemento"
                                className="mt-1 block w-full mb-4"
                                onChange={(e) =>
                                    setData("complement", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.complement}
                                className="mt-2"
                            />
                        </div>
                    </div>

                    <button
                        className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
                        type="submit"
                    >
                        Confirmar Pedido
                    </button>
                </form>

                {/* Order Summary Section */}
                <div className="bg-white p-6 rounded shadow-md space-y-6 flex-1">
                    <div>
                        <h2 className="text-lg font-bold">Resumo do Pedido</h2>
                        <div className="flex flex-col space-y-6 mt-6">
                            {cart.items.map((item) => (
                                <div
                                    key={item.product.id}
                                    className="flex items-start gap-4"
                                >
                                    <img
                                        src={item.product.image_path}
                                        alt={item.product.name}
                                        className="w-24 h-24 object-cover rounded-md"
                                    />
                                    <div className="flex flex-col space-y-2">
                                        <p className="font-semibold text-gray-800 w-60">
                                            {item.product.name}
                                        </p>
                                        <div className="flex items-center gap-2">
                                            <p className="text-[#017bff] font-bold">
                                                R${" "}
                                                {item.product.new_price ||
                                                    item.product.price}
                                            </p>
                                            {item.product.new_price && (
                                                <p className="text-gray-400 line-through">
                                                    R$ {item.product.price}
                                                </p>
                                            )}
                                            <div className="flex items-center gap-3  ml-7 ">
                                                <Link
                                                    className="px-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                                                    href={route("cart.add")}
                                                    method="post"
                                                    data={{
                                                        product_id:
                                                            item.product.id,
                                                        quantity: 1,
                                                    }}
                                                    as="button"
                                                    type="button"
                                                >
                                                    +
                                                </Link>
                                                <span className="font-semibold">
                                                    {item.quantity}
                                                </span>
                                                <button
                                                    onClick={() =>
                                                        handleRemove(
                                                            item.product.id
                                                        )
                                                    }
                                                    className="px-2 bg-gray-200 rounded-lg hover:bg-gray-300"
                                                >
                                                    -
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                    <p className="font-semibold text-gray-800 w-24 text-right">
                                        R${" "}
                                        {(
                                            (item.product.new_price ||
                                                item.product.price) *
                                            item.quantity
                                        ).toFixed(2)}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className="border-t pt-4">
                        <div className="flex justify-between">
                            <p className="text-gray-700">Subtotal:</p>
                            <p className="text-gray-700">
                                R$ {subTotal.toFixed(2)}
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Desconto:</p>
                            <p className="text-gray-700">
                                R$ {discount.toFixed(2)}
                            </p>
                        </div>
                        <div className="flex justify-between">
                            <p className="text-gray-700">Entrega:</p>
                            <p className="text-gray-700">R$ 0,00</p>
                        </div>
                        <div className="flex justify-between font-bold text-lg">
                            <p>Total:</p>
                            <p>R$ {total.toFixed(2)}</p>
                        </div>
                        <p className="text-sm text-gray-500 text-center mt-2">
                            ou em 12x de R$ {installment} no cartão
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
