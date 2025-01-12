import React from "react";
import Header from "@/Components/User/Header";
import Footer from "@/Components/User/Footer";
import { Head } from "@inertiajs/react";

export default function LojaConfiavel() {
    return (
        <div className="bg-gray-50 relative">
            <Head title="Loja Confiável" />

            <Header />

            <div className="max-w-3xl mx-auto pt-8 px-4 pb-20">
                <h1 className="sm:text-4xl text-3xl font-bold mb-12 text-center text-gray-800">
                    Storm Sports é confiável?
                </h1>

                <div className="text-gray-700 sm:text-xl text-lg leading-relaxed sm:space-y-10 space-y-6">
                    <div>
                        <h2 className="sm:text-xl text-lg font-bold mb-3 text-gray-800">
                            A LOJA STORM SPORTS É CONFIÁVEL?
                        </h2>
                        <p>
                            Se você chegou até aqui, é porque está com dúvidas
                            se a loja Storm Sports é segura. Leia e descubra!
                        </p>
                    </div>

                    <div>
                        <h2 className="sm:text-xl text-lg font-bold mb-3 text-gray-800">
                            O PAGAMENTO É SEGURO?
                        </h2>
                        <p>
                            A loja utiliza o meio de pagamento{" "}
                            <strong>Mercado Pago</strong> para processar os
                            pagamentos de boleto bancário, cartão de crédito e
                            pix. Ambos são as opções mais seguras do mercado,
                            com tecnologia criptografada que protege todos os
                            seus dados.
                        </p>
                    </div>

                    <div>
                        <h2 className="sm:text-xl text-lg font-bold mb-3 text-gray-800">
                            A LOJA ENTREGA OS PRODUTOS?
                        </h2>
                        <p>
                            Com o <strong>Mercado Pago</strong>, a entrega é
                            100% garantida. Isso porque você pode recuperar o
                            seu dinheiro caso tenha algum problema com a compra.
                            Portanto, pode ficar tranquilo, sua compra será
                            entregue ou terá seu dinheiro de volta.
                        </p>
                    </div>

                    <div>
                        <h2 className="sm:text-xl text-lg font-bold mb-3 text-gray-800">
                            A LOJA POSSUI SUPORTE?
                        </h2>
                        <p>
                            A <strong>Storm Sports</strong> conta com uma equipe
                            especializada e disposta para te dar suporte e te
                            atender caso tenha dúvidas.
                        </p>
                    </div>

                    <div>
                        <h2 className="sm:text-xl text-lg font-bold mb-3 text-gray-800">
                            FRETE GRÁTIS PARA TODO O BRASIL
                        </h2>
                        <p>Prazo de entrega de 3 a 7 dias.</p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
