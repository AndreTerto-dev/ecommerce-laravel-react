import React from "react";
import Header from "@/Components/User/Header";
import Footer from "@/Components/User/Footer";
import { Head } from "@inertiajs/react";

export default function PerguntasFrequentes() {
    return (
        <div className="bg-gray-50 relative">
            <Head title="Perguntas Frequentes" />

            <Header />

            <div className="max-w-3xl mx-auto pt-8 px-4 pb-20">
                <h1 className="sm:text-4xl text-3xl font-bold mb-12 text-center text-gray-800">
                    Perguntas Frequentes
                </h1>

                <div className="space-y-10 text-gray-700 sm:text-xl text-lg leading-relaxed">
                    <div>
                        <h2 className="sm:text-2xl text-xl font-bold mb-3 text-gray-800">
                            O site é confiável?
                        </h2>
                        <p>
                            Nosso site conta com a segurança{" "}
                            <strong>SSL</strong>, que é obrigatória por Lei para
                            todas as lojas online, pois criptografa todas as
                            transações efetuadas no site, garantindo o sigilo de
                            todas as informações. Trabalhamos em parceria com o{" "}
                            <strong>Mercado Pago</strong>, rede de pagamentos
                            online do Brasil. Não temos acesso às suas
                            informações de pagamento, como número de cartão de
                            crédito; somente o Mercado Pago, tornando sua compra
                            100% segura.
                        </p>
                    </div>

                    <div>
                        <h2 className="sm:text-2xl text-xl font-bold mb-3 text-gray-800">
                            Quais formas de pagamento posso aproveitar para
                            realizar minha compra?
                        </h2>
                        <p>
                            Dispomos dos seguintes meios de pagamento: Cartão de
                            Crédito, boleto e Pix.
                        </p>
                    </div>

                    <div>
                        <h2 className="sm:text-2xl text-xl font-bold mb-3 text-gray-800">
                            Qual é o custo de envio?
                        </h2>
                        <p>
                            Disponibilizamos o frete grátis para a compra de
                            qualquer produto dentro do nosso site.
                        </p>
                    </div>

                    <div>
                        <h2 className="sm:text-2xl text-xl font-bold mb-3 text-gray-800">
                            Todas as compras acompanham código de rastreio?
                        </h2>
                        <p>
                            Sim. Nós só trabalhamos com fornecedores confiáveis
                            e que forneçam código de rastreio para sua segurança
                            e conforto.
                        </p>
                    </div>

                    <div>
                        <h2 className="sm:text-2xl text-xl font-bold mb-3 text-gray-800">
                            Quando vou receber meu código de rastreio?
                        </h2>
                        <p>
                            Nós enviamos o código de rastreio para você
                            diretamente no seu e-mail em até 7 dias úteis, pois
                            nossos fornecedores pedem esse prazo. Se mesmo
                            depois desse período você não tiver recebido o
                            código de rastreio, envie um e-mail para:{" "}
                            <strong>stormsports.oficial@gmail.com</strong>{" "}
                            incluindo o número do seu pedido (algo como #4321),
                            e lhe daremos uma posição em no máximo 24h.
                        </p>
                    </div>

                    <div>
                        <h2 className="sm:text-2xl text-xl font-bold mb-3 text-gray-800">
                            Meu código de rastreio não está mostrando as
                            informações
                        </h2>
                        <p>
                            Sim, no caminho entre o país de origem e o país de
                            destino, realmente não há atualizações, pois não há
                            movimentação do pacote. Ele irá lhe avisar assim que
                            chegar ao Brasil e a cada movimentação. Pode ficar
                            tranquilo, sua encomenda está a caminho.
                        </p>
                    </div>

                    <div>
                        <h2 className="sm:text-2xl text-xl font-bold mb-3 text-gray-800">
                            Onde posso receber meu pedido?
                        </h2>
                        <p>Realizamos envios para todo o país.</p>
                    </div>

                    <div>
                        <h2 className="sm:text-2xl text-xl font-bold mb-3 text-gray-800">
                            Qual prazo de entrega?
                        </h2>
                        <p>
                            O prazo médio estimado de entrega dos produtos é de
                            3 a 7 dias úteis, podendo haver variações no prazo
                            por problemas de greves dos Correios ou outros
                            fatores alheios ao nosso controle.
                        </p>
                    </div>

                    <div>
                        <h2 className="sm:text-2xl text-xl font-bold mb-3 text-gray-800">
                            Qual o prazo para realizar uma troca?
                        </h2>
                        <p>
                            No caso de arrependimento da compra, você tem até 7
                            dias após a compra para solicitar o estorno do
                            pagamento (exceto produtos personalizados).
                        </p>
                    </div>

                    <div>
                        <h2 className="sm:text-2xl text-xl font-bold mb-3 text-gray-800">
                            O que devo fazer se o produto não chega em bom
                            estado?
                        </h2>
                        <p>
                            Entre em contato conosco no{" "}
                            <strong>stormsports.oficial@gmail.com</strong> para
                            resolvermos a situação.
                        </p>
                    </div>

                    <div>
                        <h2 className="sm:text-2xl text-xl font-bold mb-3 text-gray-800">
                            Tem alguma taxa que ainda tenho que pagar do
                            produto?
                        </h2>
                        <p>
                            Sim, é possível que haja uma taxa de importação da
                            alfândega brasileira associada ao seu pedido. Nossos
                            produtos estão sujeitos à regulamentação
                            alfandegária, e o valor dessas taxas pode variar com
                            base nas políticas vigentes. Para nos informar sobre
                            qualquer taxa ou problema relacionado ao desembaraço
                            alfandegário, envie um e-mail para{" "}
                            <strong>stormsports.oficial@gmail.com</strong>.
                            Nossa equipe responderá dentro de 24 horas para
                            auxiliá-lo da melhor maneira possível.
                        </p>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
}
