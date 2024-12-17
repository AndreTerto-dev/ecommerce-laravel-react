import React from "react";
import Header from "@/Components/User/Header";
import Footer from "@/Components/User/Footer";
import { Head } from "@inertiajs/react";

export default function Frete() {
    const textStyle = "text-gray-700 text-xl mb-6 leading-relaxed";

    return (
        <div className="bg-gray-50 relative">
            <Head title="Política de frete" />

            <Header />

            <div className="max-w-3xl mx-auto pt-8 px-4 pb-20">
                <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
                    Política de Frete
                </h1>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        CUIDADOS COM ENDEREÇAMENTO DE PEDIDOS
                    </h2>
                    <div className={textStyle}>
                        A Storm Sports providenciará o envio dos produtos para o
                        endereço que o cliente solicitar. Portanto, para que não
                        haja empecilhos para a entrega da sua encomenda, pedimos
                        atenção no momento de preencher o endereço no qual
                        deseja receber o seu pedido.
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        DESTINATÁRIO AUSENTE
                    </h2>
                    <div className={textStyle}>
                        <strong>
                            ATENÇÃO: FIQUE ATENTO À DATA DA ENTREGA.
                        </strong>
                    </div>
                    <div className={textStyle}>
                        Certifique-se de que haverá alguém no endereço para
                        receber seus produtos. Os Correios realizam três
                        tentativas de entrega dos produtos. Caso não haja
                        ninguém no endereço, o pacote será levado para a agência
                        dos Correios mais próxima ao endereço, onde deverá ser
                        retirado em até 7 dias corridos. Após esse prazo, o
                        pacote será descartado, não havendo possibilidade de
                        reembolso.
                    </div>
                    <div className={textStyle}>
                        Todos os detalhes relacionados às tentativas de entrega,
                        bem como o endereço da agência dos Correios, ficam
                        registrados no rastreio do pedido, que pode ser
                        acompanhado no site dos Correios com o código de
                        rastreio fornecido pela loja.
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        ENDEREÇO INCORRETO OU INCOMPLETO
                    </h2>
                    <div className={textStyle}>
                        <strong>
                            ATENÇÃO: PREENCHA O ENDEREÇO CORRETAMENTE.
                        </strong>
                    </div>
                    <div className={textStyle}>
                        A Storm Sports não se responsabiliza pelo preenchimento
                        incorreto ou incompleto do endereço. Nesse caso, o
                        pacote retornará ao remetente, e será necessário pagar
                        um novo frete de R$ 70,00 para reenvio.
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        PRAZO DE PROCESSAMENTO
                    </h2>
                    <div className={textStyle}>
                        Após o processamento e confirmação do pagamento, seu
                        pedido será separado, embalado e despachado. Este
                        processo leva de 1 a 3 dias úteis.
                    </div>
                </section>

                {/* O mesmo padrão foi aplicado para as outras seções */}
                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        PRAZO PARA ENVIO DO PRODUTO E CÓDIGO DE RASTREAMENTO
                    </h2>
                    <div className={textStyle}>
                        O código de rastreamento será enviado ao e-mail
                        cadastrado em até 7 dias úteis após o processamento.
                        Para rastrear, acesse:{" "}
                        <a
                            href="https://stormsports.com/rastrear-pedido"
                            className="text-blue-500 underline"
                        >
                            https://stormsports.com/rastrear-pedido
                        </a>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        PRAZO DE ENTREGA
                    </h2>
                    <div className={textStyle}>
                        <strong>
                            ATENÇÃO: PRAZO PARA ENTREGA - 3 A 7 DIAS.
                        </strong>
                    </div>
                    <div className={textStyle}>
                        O prazo de entrega pode variar devido a fatores como
                        liberação alfandegária, greves ou feriados nacionais. A
                        maioria dos pedidos é entregue em até 7 dias corridos.
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        ORIGEM
                    </h2>
                    <div className={textStyle}>
                        <strong>
                            NOSSOS PRODUTOS SÃO IMPORTADOS DOS ESTADOS UNIDOS,
                            EUROPA E ÁSIA.
                        </strong>
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        FORMAS DE ENVIO
                    </h2>
                    <div className={textStyle}>
                        Produtos são entregues pelos Correios. Caso o endereço
                        esteja incorreto, será necessário novo frete.
                    </div>
                </section>

                <section className="mb-8">
                    <h2 className="text-2xl font-semibold text-gray-700 mb-4">
                        TAXAS DE IMPORTAÇÃO E ALFÂNDEGA
                    </h2>
                    <div className={textStyle}>
                        Pedidos podem estar sujeitos a taxas alfandegárias.
                        Essas taxas são de responsabilidade do cliente. Não
                        recuse a mercadoria para evitar perda total do produto.
                    </div>
                </section>

                <div className={textStyle}>
                    <strong>
                        AO REALIZAR UMA COMPRA EM NOSSO SITE O CLIENTE DECLARA
                        ESTAR CIENTE E DE ACORDO COM TUDO QUE ESTÁ DESCRITO
                        ACIMA.
                    </strong>
                </div>
            </div>

            <Footer />
        </div>
    );
}
