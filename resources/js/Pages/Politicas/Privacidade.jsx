import React from "react";
import Header from "@/Components/User/Header";
import Footer from "@/Components/User/Footer";
import { Head } from "@inertiajs/react";

export default function Privacidade() {
    return (
        <div className="bg-gray-50 relative">
            <Head title="Política de privacidade" />

            <Header />

            <div className="max-w-3xl mx-auto pt-8 px-4 pb-20">
                <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
                    Política de Privacidade
                </h1>

                <div className="text-gray-700 text-xl space-y-6 leading-relaxed">
                    <p className="font-bold">
                        ESTA POLÍTICA DE PRIVACIDADE FOI FORMULADA COM O INTUITO
                        DE MANTER A PRIVACIDADE E A SEGURANÇA DAS INFORMAÇÕES
                        COLETADAS DE NOSSOS CLIENTES E USUÁRIOS.
                    </p>
                    <h2 className="font-bold text-xl text-gray-700">
                        POLÍTICA DE PRIVACIDADE STORM SPORTS
                    </h2>
                    <p>
                        Todas as suas informações pessoais recolhidas serão
                        usadas para ajudá-lo(a) a tornar a sua visita no nosso
                        site o mais produtiva e agradável possível. A garantia
                        da confidencialidade dos dados pessoais dos utilizadores
                        do nosso site é importante para a Storm Sports.
                    </p>
                    <p>
                        Todas as informações pessoais relativas a membros,
                        assinantes, clientes ou visitantes que usem a Storm
                        Sports serão tratadas em concordância com a Lei da
                        Proteção de Dados Pessoais de 26 de outubro de 1998 (Lei
                        n.º 67/98).
                    </p>
                    <p>
                        A informação pessoal recolhida pode incluir o seu nome,
                        e-mail, número de telefone e/ou telemóvel, morada, data
                        de nascimento e/ou outros.
                    </p>
                    <p>
                        O uso da Storm Sports pressupõe a aceitação deste Acordo
                        de Privacidade. A equipe da Storm Sports reserva-se ao
                        direito de alterar este acordo sem aviso prévio. Deste
                        modo, recomendamos que consulte esta página com
                        regularidade de forma a estar sempre atualizado.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
