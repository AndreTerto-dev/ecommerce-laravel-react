import React from "react";

const Footer = () => {
    return (
        <footer className="bg-black text-white p-8 border-t-4 border-[#017bff]">
            <div className="bg-black text-white flex items-center justify-center">
                <img
                    src="/assets/logo-text.png"
                    alt="Logo Storm Sports"
                    className="h-24 mb-9"
                />
            </div>
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                {/* Atendimento ao Cliente */}
                <div>
                    <h3 className="font-bold mb-6">ATENDIMENTO AO CLIENTE</h3>
                    <ul className="space-y-4">
                        <li>
                            <img
                                src="/assets/footer/clock.png"
                                alt="Clock"
                                className="inline-block mr-2 w-6 h-6"
                            />
                            Atendimento: seg. à sab. 08h às 18h
                        </li>
                        <li>
                            <img
                                src="/assets/footer/phone.png"
                                alt="Phone"
                                className="inline-block mr-2 w-6 h-6"
                            />
                            Contato: (82) xxxxxxxxxx
                        </li>
                        <li>
                            <img
                                src="/assets/footer/email.png"
                                alt="Email"
                                className="inline-block mr-2 w-6 h-6"
                            />
                            E-mail: stormsports.oficial@gmail.com
                        </li>
                    </ul>

                    <button className="mt-4 bg-[#017bff] text-white py-2 pl-3 pr-16 rounded-lg flex items-center space-x-2 hover:bg-[#0056b3] hover:text-white transition-colors">
                        <img
                            src="/assets/footer/whatsapp.png"
                            alt="WhatsApp"
                            className="w-12 h-12"
                        />
                        <div className="text-sm text-center">
                            <span className="block text-start">
                                Contate-nos
                            </span>
                            <span className="block text-lg">Via WhatsApp</span>
                        </div>
                    </button>

                    <div className="mt-4 flex space-x-2 items-center">
                        <p>Redes sociais: </p>
                        <a
                            href="#"
                            aria-label="Instagram"
                            className="text-[#017bff] hover:text-gray-500 transition-colors flex items-center space-x-2"
                        >
                            <div className="w-8 h-8 bg-[#017bff] rounded-full flex items-center justify-center hover:bg-gray-400">
                                <img
                                    src="/assets/footer/instagram.png"
                                    alt="Instagram"
                                    className="w-6 h-6"
                                />
                            </div>
                        </a>
                        <a
                            href="#"
                            aria-label="Facebook"
                            className="text-[#017bff] hover:text-gray-500 transition-colors flex items-center space-x-2"
                        >
                            <div className="w-8 h-8 bg-[#017bff] rounded-full flex items-center justify-center hover:bg-gray-400">
                                <img
                                    src="/assets/footer/facebook.png"
                                    alt="Facebook"
                                    className="w-6 h-6"
                                />
                            </div>
                        </a>
                        <a
                            href="#"
                            aria-label="Tiktok"
                            className="text-[#017bff] hover:text-gray-500 transition-colors flex items-center space-x-2"
                        >
                            <div className="w-8 h-8 bg-[#017bff] rounded-full flex items-center justify-center hover:bg-gray-400">
                                <img
                                    src="/assets/footer/tiktok.png"
                                    alt="Tiktok"
                                    className="w-6 h-6"
                                />
                            </div>
                        </a>
                        <a
                            href="#"
                            aria-label="Youtube"
                            className="text-[#017bff] hover:text-gray-500 transition-colors flex items-center space-x-2"
                        >
                            <div className="w-8 h-8 bg-[#017bff] rounded-full flex items-center justify-center hover:bg-gray-400">
                                <img
                                    src="/assets/footer/youtube.png"
                                    alt="Youtube"
                                    className="w-6 h-6"
                                />
                            </div>
                        </a>
                    </div>
                </div>

                {/* Nossas Políticas */}
                <div>
                    <h3 className="font-bold mb-6">NOSSAS POLÍTICAS</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-2">
                            <span
                                style={{ width: "0.3rem", height: "0.3rem" }}
                                className="bg-white"
                            ></span>
                            <a
                                href="/politica-de-pagamento"
                                className="hover:text-[#017bff] transition-colors"
                            >
                                Política de Pagamento
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span
                                style={{ width: "0.3rem", height: "0.3rem" }}
                                className="bg-white"
                            ></span>
                            <a
                                href="/politica-de-privacidade"
                                className="hover:text-[#017bff] transition-colors"
                            >
                                Política de Privacidade
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span
                                style={{ width: "0.3rem", height: "0.3rem" }}
                                className="bg-white"
                            ></span>
                            <a
                                href="/politica-de-reembolso"
                                className="hover:text-[#017bff] transition-colors"
                            >
                                Política de Reembolso
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span
                                style={{ width: "0.3rem", height: "0.3rem" }}
                                className="bg-white"
                            ></span>
                            <a
                                href="/politica-de-frete"
                                className="hover:text-[#017bff] transition-colors"
                            >
                                Política de Frete
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span
                                style={{ width: "0.3rem", height: "0.3rem" }}
                                className="bg-white"
                            ></span>
                            <a
                                href="/politica-de-troca"
                                className="hover:text-[#017bff] transition-colors"
                            >
                                Trocas e Devoluções
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Informações */}
                <div>
                    <h3 className="font-bold mb-6">INFORMAÇÕES</h3>
                    <ul className="space-y-4">
                        <li className="flex items-center space-x-2">
                            <span
                                style={{ width: "0.3rem", height: "0.3rem" }}
                                className="bg-white"
                            ></span>
                            <a
                                href="/quem-somos"
                                className="hover:text-[#017bff] transition-colors"
                            >
                                Quem Somos
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span
                                style={{ width: "0.3rem", height: "0.3rem" }}
                                className="bg-white"
                            ></span>
                            <a
                                href="/loja-confiavel"
                                className="hover:text-[#017bff] transition-colors"
                            >
                                StormSports é confiável?
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span
                                style={{ width: "0.3rem", height: "0.3rem" }}
                                className="bg-white"
                            ></span>
                            <a
                                href="/perguntas-frequentes"
                                className="hover:text-[#017bff] transition-colors"
                            >
                                Perguntas Frequentes
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span
                                style={{ width: "0.3rem", height: "0.3rem" }}
                                className="bg-white"
                            ></span>
                            <a
                                href="/rastrear-pedido"
                                className="hover:text-[#017bff] transition-colors"
                            >
                                Rastrear Pedido
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span
                                style={{ width: "0.3rem", height: "0.3rem" }}
                                className="bg-white"
                            ></span>
                            <a
                                href="/guia-medidas"
                                className="hover:text-[#017bff] transition-colors"
                            >
                                Guia de Medidas
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span
                                style={{ width: "0.3rem", height: "0.3rem" }}
                                className="bg-white"
                            ></span>
                            <a
                                href="/cuidados-com-o-manto"
                                className="hover:text-[#017bff] transition-colors"
                            >
                                Cuidados com o manto
                            </a>
                        </li>
                        <li className="flex items-center space-x-2">
                            <span
                                style={{ width: "0.3rem", height: "0.3rem" }}
                                className="bg-white"
                            ></span>
                            <a
                                href="/contato"
                                className="hover:text-[#017bff] transition-colors"
                            >
                                Entrar em contato
                            </a>
                        </li>
                    </ul>
                </div>

                {/* Novidades */}
                <div>
                    <h3 className="font-bold mb-6">NOVIDADES</h3>
                    <p className="mb-6">
                        Fique por dentro de todas as novidades e ofertas em
                        primeira mão
                    </p>
                    <form className="flex flex-col space-y-4">
                        <input
                            type="email"
                            placeholder="Seu e-mail"
                            className="p-2 rounded bg-gray-800 text-white border border-gray-600"
                        />
                        <button
                            type="submit"
                            className="bg-[#017bff] py-2 px-4 rounded text-white hover:bg-[#0056b3] hover:text-white transition-colors"
                        >
                            Enviar
                        </button>
                    </form>
                </div>
            </div>
            <div className="text-center mt-12">
                <p className="mb-2">
                    Loja oficial e registrada | www.stormsports.com
                </p>
                <p className="-mb-6">
                    &copy; 2024 Loja Storm Sports - Todos os direitos reservados
                </p>
            </div>
        </footer>
    );
};

export default Footer;
