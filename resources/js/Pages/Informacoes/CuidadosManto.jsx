import React from "react";
import { Link, useForm, router } from "@inertiajs/react";
import Header from "@/Components/User/Header";
import Footer from "@/Components/User/Footer";

export default function Show() {
    return (
        <div className="bg-gray-50 relative">
            <Header />

            <div className="text-center mt-8 mb-6">
                <h1 className="text-4xl font-bold text-gray-800">
                    Cuidados com o manto
                </h1>
            </div>

            <div className="flex flex-col items-center w-full">
                <p className="text-2xl font-semibold text-gray-700">
                    O que fazer para conservar camisas de futebol?
                </p>
                <img
                    src="/assets/footer/cuidados-manto.png"
                    alt="Cuidados com o manto"
                    className="w-80 h-auto mx-auto mt-3 mb-12"
                />
            </div>

            <div className="max-w-3xl mx-auto px-6 mb-12">
                <h2 className="text-2xl font-bold text-gray-800 mb-4">
                    Como lavar sua camisa de futebol
                </h2>
                <p className="text-gray-700 text-xl leading-relaxed mb-4">
                    Para lavar suas camisas de time, você deve optar pelo
                    trabalho manual. Lave as camisas à mão. Além disso, caso
                    seja necessário, você pode deixá-las de molho por poucos
                    minutos. Conforme explicado anteriormente, não use nenhum
                    tipo de alvejante ou sabão em pó. Para a lavagem, o
                    recomendado é o uso de detergente neutro.
                </p>
                <p className="text-gray-700 text-xl leading-relaxed mb-4">
                    Logo após a lavagem, deixe a camisa secar à sombra, pois o
                    sol pode danificar sua camisa. Por fim, guarde sua camisa em
                    cabides, bem como em um local ventilado, para evitar odores
                    e mofos.
                </p>
            </div>

            <Footer />
        </div>
    );
}
