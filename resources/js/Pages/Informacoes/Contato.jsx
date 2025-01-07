import React, { useEffect } from "react";
import Header from "@/Components/User/Header";
import Footer from "@/Components/User/Footer";
import { Head, useForm } from "@inertiajs/react";
import TextInput from "@/Components/User/TextInput";
import InputError from "@/Components/User/InputError";
import { toast, Toaster } from "sonner";

export default function Contato({ success }) {
    const { data, setData, post, errors } = useForm({
        name: "",
        email: "",
        message: "",
    });

    useEffect(() => {
        if (success) {
            toast.success(success); // Exibe o toast com a mensagem de sucesso
        }
    }, [success]); // Executa sempre que o sucesso mudar

    const onSubmit = (e) => {
        e.preventDefault();

        // Envia os dados para o servidor
        post(route("contact.store"), {
            onSuccess: () => {
                // Limpa os campos se o envio for bem-sucedido
                setData({
                    name: "",
                    email: "",
                    message: "",
                });
            },
        });
    };



    return (
        <div className="bg-gray-50 min-h-screen flex flex-col">
            <Head title="Contato" />

            <Header />

            <div className="flex flex-col items-center justify-center flex-1">
                <div className="p-8 max-w-3xl w-full">
                    <div className="text-center mt-4 mb-10">
                        <h1 className="text-3xl font-bold text-gray-800">
                            Entrar em contato
                        </h1>
                    </div>

                    <form onSubmit={onSubmit} className="space-y-4">
                        <div className="flex gap-4">
                            <div className="w-1/2">
                                <TextInput
                                    id="name"
                                    type="text"
                                    name="name"
                                    value={data.name}
                                    placeholder="Seu nome"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("name", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.name}
                                    className="mt-1 text-red-500"
                                />
                            </div>

                            <div className="w-1/2">
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    placeholder="Seu e-mail"
                                    className="mt-1 block w-full"
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />
                                <InputError
                                    message={errors.email}
                                    className="mt-1 text-red-500"
                                />
                            </div>
                        </div>

                        <div>
                            <textarea
                                id="message"
                                name="message"
                                value={data.message}
                                placeholder="Sua mensagem"
                                className="block w-full h-64 border border-gray-300 rounded-lg p-3"
                                onChange={(e) =>
                                    setData("message", e.target.value)
                                }
                            />
                            <InputError
                                message={errors.message}
                                className="mt-1 text-red-500"
                            />
                        </div>

                        <div className="text-center mt-4">
                            <button
                                type="submit"
                                className="bg-[#017bff] hover:bg-[#0164d9] text-white font-extrabold py-3 px-10 rounded-lg shadow-md transition mb-16 mt-2"
                            >
                                Enviar mensagem
                            </button>
                        </div>
                    </form>
                </div>
            </div>

            <Footer />
        </div>
    );
}
