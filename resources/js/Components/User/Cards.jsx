import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules"; // Módulos necessários
import "swiper/swiper-bundle.css"; // Importando estilos do Swiper

export default function Cards() {
    // Verificando se a tela é mobile
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640); // Atualiza o estado com base na largura da janela
        };

        handleResize(); // Executa na montagem do componente para pegar o tamanho inicial da janela
        window.addEventListener("resize", handleResize); // Atualiza dinamicamente quando a janela é redimensionada

        return () => {
            window.removeEventListener("resize", handleResize); // Remove o ouvinte de evento quando o componente for desmontado
        };
    }, []);

    if (isMobile) {
        // Renderiza o Swiper somente em dispositivos móveis
        return (
            <Swiper
                spaceBetween={-10}
                slidesPerView={1.3}
                grabCursor={isMobile}
                freeMode={isMobile}
            >
                <SwiperSlide>
                    <div className="ml-6">
                        <a href="/brasileiros">
                            <img
                                src="/assets/cards/brasileiros.png"
                                alt="Banner da Loja de Camisas"
                                className="h-auto rounded-xl"
                            />
                        </a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="ml-6">
                        <a href="/internacionais">
                            <img
                                src="/assets/cards/internacionais.png"
                                alt="Banner da Loja de Camisas"
                                className="h-auto rounded-xl"
                            />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ml-6">
                        <a href="/selecoes">
                            <img
                                src="/assets/cards/selecoes.png"
                                alt="Banner da Loja de Camisas"
                                className="h-auto rounded-xl mb-12"
                            />
                        </a>
                    </div>
                </SwiperSlide>
            </Swiper>
        );
    }

    // Caso não seja mobile, renderiza o layout padrão (sem Swiper)
    return (
        <div className="flex gap-6 mx-12 mt-12">
            <div>
                <a href="/brasileiros">
                    <img
                        src="/assets/cards/brasileiros.png"
                        alt="Banner da Loja de Camisas"
                        className="h-auto rounded-xl"
                    />
                </a>
            </div>
            <div>
                <a href="/internacionais">
                    <img
                        src="/assets/cards/internacionais.png"
                        alt="Banner da Loja de Camisas"
                        className="h-auto rounded-xl"
                    />
                </a>
            </div>
            <div>
                <a href="/selecoes">
                    <img
                        src="/assets/cards/selecoes.png"
                        alt="Banner da Loja de Camisas"
                        className="h-auto rounded-xl mb-12"
                    />
                </a>
            </div>
        </div>
    );
}
