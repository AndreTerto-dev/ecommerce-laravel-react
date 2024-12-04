import React from "react";
import { Link, useForm, router } from "@inertiajs/react";
import Header from "@/Components/User/Header";

export default function Show() {
    return (
        <div className="bg-gray-50 relative">
            <Header />

            {/* Título Guia de Medidas */}
            <div className="text-center mt-8 mb-6">
                <h1 className="text-4xl font-bold text-gray-800">
                    Guia de Medidas
                </h1>
            </div>

            {/* Container para as imagens */}
            <div className="flex flex-col items-center gap-8">
                {/* Fan */}
                <div className="flex flex-col items-center w-full">
                    <p className="text-2xl font-semibold text-gray-700">
                        Camisas Masculinas
                    </p>
                    <img
                        src="/assets/guia-medidas/FAN.png"
                        alt="Fan image"
                        className="w-80 h-auto mx-auto mt-3"
                    />
                </div>

                {/* Player */}
                <div className="flex flex-col items-center w-full">
                    <p className="text-2xl font-semibold text-gray-700">
                        Modelo Jogador
                    </p>
                    <img
                        src="/assets/guia-medidas/PLAYER.png"
                        alt="Player image"
                        className="w-80 h-auto mx-auto mt-3"
                    />
                </div>

                {/* Feminino */}
                <div className="flex flex-col items-center w-full">
                    <p className="text-2xl font-semibold text-gray-700">
                        Camisas Femininas
                    </p>
                    <img
                        src="/assets/guia-medidas/FEMININO.png"
                        alt="Feminino image"
                        className="w-80 h-auto mx-auto mt-3"
                    />
                </div>

                {/* Infantil */}
                <div className="flex flex-col items-center w-full">
                    <p className="text-2xl font-semibold text-gray-700">
                        Conjuntos Infantis
                    </p>
                    <img
                        src="/assets/guia-medidas/KIDS.png"
                        alt="Kids image"
                        className="w-80 h-auto mx-auto mt-3"
                    />
                </div>

                {/* Retro */}
                <div className="flex flex-col items-center w-full">
                    <p className="text-2xl font-semibold text-gray-700">
                        Retro
                    </p>
                    <img
                        src="/assets/guia-medidas/RETROS.png"
                        alt="Retros image"
                        className="w-80 h-auto mx-auto mt-3"
                    />
                </div>

                <p className="text-xl text-gray-700 mt-4">
                    <b>IMPORTANTE:</b> Caso você prefira usar camisas mais{" "}
                    <br></br>folgadas pedir um tamanho acima!
                </p>
                <p className="text-xl text-gray-700 mb-12">
                    Considerem margem de erro de 1-3 cm em cada medida.
                </p>
            </div>
        </div>
    );
}
