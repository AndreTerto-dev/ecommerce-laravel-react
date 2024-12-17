import React from "react";
import Header from "@/Components/User/Header";
import Footer from "@/Components/User/Footer";
import { Head } from "@inertiajs/react";

export default function Reembolso() {
    return (
        <div className="bg-gray-50 relative">
            <Head title="Política de reembolso" />

            <Header />

            <div className="max-w-3xl mx-auto pt-8 px-4 pb-20">
                <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
                    Política de Reembolso
                </h1>

                <div className="text-gray-700 text-xl space-y-6 leading-relaxed">
                    <p>NOSSO MAIOR COMPROMISSO É COM A SUA PLENA SATISFAÇÃO.</p>
                    <p>
                        Se você escolheu seu produto em nossa loja virtual, mas,
                        ao recebê-lo, verificou que existe algum defeito de
                        fabricação, ou até mesmo ficou insatisfeito com o
                        produto adquirido, nós asseguramos seu direito de troca
                        ou devolução.
                    </p>
                    <p>
                        Lembrando que o primeiro passo para troca ou devolução é
                        comunicar nossa Central de Atendimento pelo E-mail:{" "}
                        <strong>stormsports.oficial@gmail.com</strong> ou
                        WhatsApp: <strong>(82) 99643-2406</strong>.
                    </p>
                    <p>
                        Nossa equipe instruirá o cliente em como proceder com a
                        troca ou devolução do produto.
                    </p>
                    <p>
                        Assim que recebermos o pacote, faremos uma análise para
                        confirmar que está tudo de acordo com as condições de
                        devolução do Item. Depois da confirmação, nossa Equipe
                        de Atendimento entrará em contato e, neste caso, você
                        poderá escolher entre:
                    </p>
                    <ol className="list-decimal list-inside space-y-2">
                        <li>
                            Trocar por qualquer outro produto que esteja
                            disponível em nosso estoque.
                        </li>
                        <li>
                            Receber a restituição do valor gasto com os
                            produtos.
                        </li>
                    </ol>
                    <p>
                        Lembrando que você tem até <strong>7 dias</strong> para
                        fazer a solicitação de troca, a partir da chegada do
                        produto.
                    </p>
                    <p>
                        <strong>
                            Não aceitamos troca de produtos personalizados.
                        </strong>
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
