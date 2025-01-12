import React from "react";
import Header from "@/Components/User/Header";
import Footer from "@/Components/User/Footer";
import { Head } from "@inertiajs/react";

export default function Pagamento() {
    return (
        <div className="bg-gray-50 relative">
            <Head title="Política de pagamento" />

            <Header />

            <div className="max-w-3xl mx-auto pt-8 px-4 pb-20">
                <h1 className="sm:text-4xl text-3xl font-bold mb-12 text-center text-gray-800">
                    Política de Pagamento
                </h1>

                <div className="text-gray-700 sm:text-xl text-lg space-y-6 leading-relaxed">
                    <p className="font-bold">
                        Pague suas compras com segurança!
                    </p>
                    <p>
                        Todos os pagamentos da nossa loja são feitos por uma das
                        plataformas de pagamentos mais conhecidas e confiáveis
                        do Brasil.
                    </p>
                    <p>
                        É uma empresa terceirizada e especializada em segurança
                        de pagamentos eletrônicos, o{" "}
                        <strong>Mercado Pago</strong>.
                    </p>
                    <p>
                        O Mercado Pago utiliza vários protocolos para manter a
                        segurança e os seus dados confidenciais. O vendedor não
                        tem acesso aos seus dados financeiros quando você envia
                        o pagamento por meio do sistema de recebimento do
                        Mercado Pago, tais como: número do cartão de crédito,
                        CPF ou dados bancários.
                    </p>
                    <p>
                        Podem ficar tranquilos, utilizamos as melhores
                        tecnologias para garantir toda a sua segurança ao
                        comprar em nossa loja virtual.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
