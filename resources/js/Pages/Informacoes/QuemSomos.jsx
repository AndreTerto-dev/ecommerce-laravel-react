import React from "react";
import Header from "@/Components/User/Header";
import Footer from "@/Components/User/Footer";
import { Head } from "@inertiajs/react";

export default function QuemSomos() {
    return (
        <div className="bg-gray-50 relative">
            <Head title="Quem Somos" />

            <Header />

            <div className="max-w-3xl mx-auto pt-8 px-4 pb-20">
                <h1 className="text-4xl font-bold mb-12 text-center text-gray-800">
                    Quem Somos
                </h1>

                <div className="text-gray-700 text-xl leading-relaxed space-y-6">
                    <p>
                        Olá torcedor (a), queremos te agradecer por estar aqui
                        conhecendo a nossa loja :)
                    </p>
                    <p>
                        A <strong>Storm Sports</strong> é uma loja totalmente
                        online especializada em artigos esportivos com produtos
                        importados e de alta qualidade.
                    </p>
                    <p>
                        Nossa principal missão é fazer com que os nossos
                        clientes se sintam mais próximos do seu time com
                        produtos que possuem alta qualidade e conforto. Através
                        do contato que temos com muitos fabricantes fora do
                        país, oferecemos essa oportunidade a você, futuro
                        cliente, de poder adquirir produtos de ponta com o
                        melhor preço do mercado.
                    </p>
                    <p>
                        Vocês, clientes, são o nosso foco principal, e por isso,
                        somos sempre transparentes, diretos e verdadeiros.
                        Acreditamos que o comprometimento é o que constrói nossa
                        reputação a cada dia e nos dá tanta credibilidade.
                    </p>
                    <p>
                        Sentimos-nos honrados em poder servi-lo, lhe
                        proporcionar a melhor experiência na hora da compra e
                        garantia de satisfação. Agir de forma honesta e ser
                        transparente é o nosso principal diferencial.
                    </p>
                    <p>
                        A <strong>Storm Sports</strong> é composta por uma
                        equipe disposta e atenciosa. Trabalhamos diariamente
                        para oferecer a você uma grande variedade de produtos
                        que acompanham as novidades do mundo do esporte.
                    </p>
                    <p>
                        Possuímos um excelente serviço de atendimento, o que
                        permite a aproximação total do cliente ao produto
                        desejado. Qualquer dúvida entre em contato conosco pelo
                        Whatsapp: (82) 99643-2406 ou pelo e-mail:{" "}
                        <a
                            href="mailto:stormsports.oficial@gmail.com"
                            className="text-blue-500"
                        >
                            stormsports.oficial@gmail.com
                        </a>
                        .
                    </p>
                    <p>Teremos muito prazer em lhe atender e ajudar.</p>
                    <p>
                        Um abraço, equipe <strong>Storm</strong>.
                    </p>
                </div>
            </div>

            <Footer />
        </div>
    );
}
