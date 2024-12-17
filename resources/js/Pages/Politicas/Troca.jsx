import React from "react";
import Header from "@/Components/User/Header";
import Footer from "@/Components/User/Footer";
import { Head } from "@inertiajs/react";

export default function Troca() {
    return (
        <div className="bg-gray-50 relative">
            <Head title="Trocas e Devoluções" />
            <Header />
            <div className="max-w-3xl mx-auto pt-8 px-4 pb-20">
                <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
                    Trocas e Devoluções
                </h1>
                <div className="text-xl mb-6 leading-relaxed">
                    <p className="text-gray-800 font-bold">
                        NOSSO MAIOR COMPROMISSO É COM A SUA PLENA SATISFAÇÃO.
                    </p>
                    <p className="text-gray-700">
                        Se você escolheu seu produto em nossa loja virtual, mas,
                        ao recebê-lo, verificou que existe algum defeito de
                        fabricação ou ficou insatisfeito com o produto
                        adquirido, nós asseguramos seu direito de troca ou
                        devolução, exceto para produtos personalizados.
                    </p>
                </div>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Procedimentos para Troca ou Devolução:
                </h2>
                <ol className="list-decimal list-inside mb-6 text-gray-700 text-xl space-y-3 leading-relaxed">
                    <li>
                        <strong>Comunicação Inicial:</strong> O primeiro passo
                        para troca ou devolução é comunicar nossa Central de
                        Atendimento pelo e-mail stormsports.oficial@gmail.com ou
                        WhatsApp: <strong>(82) xxxxxxxxxx</strong>.
                    </li>
                    <li>
                        <strong>Instruções:</strong> Nossa equipe instruirá o
                        cliente sobre como proceder com a troca ou devolução do
                        produto.
                    </li>
                    <li>
                        <strong>Análise do Produto:</strong> Assim que
                        recebermos o pacote, faremos uma análise para confirmar
                        que está tudo de acordo com as condições de devolução do
                        item. Após a confirmação, nossa equipe de atendimento
                        entrará em contato e você poderá escolher entre:
                        <ul className="list-disc pl-5 mt-2">
                            <li>
                                Trocar por qualquer outro produto disponível em
                                nosso estoque.
                            </li>
                            <li>
                                Receber a restituição do valor gasto com os
                                produtos.
                            </li>
                        </ul>
                    </li>
                </ol>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Prazo para Solicitação:
                </h2>
                <p className="text-gray-700 text-xl mb-6 leading-relaxed">
                    Você tem até <strong>7 dias</strong>, a partir da data de
                    recebimento do produto, para fazer a solicitação de troca ou
                    devolução.
                </p>
                <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                    Importante:
                </h2>
                <p className="text-gray-700 text-xl mb-4 leading-relaxed">
                    Não aceitamos trocas ou cancelamentos de produtos
                    personalizados. Produtos personalizados são confeccionados
                    de acordo com as especificações fornecidas pelo cliente, e,
                    portanto, não podem ser revendidos. Por isso, o direito de
                    arrependimento não se aplica a esses produtos.
                </p>
            </div>
            <Footer />
        </div>
    );
}
