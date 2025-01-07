import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules"; // Módulos necessários
import "swiper/swiper-bundle.css"; // Importando estilos do Swiper

export default function CardsTwo() {
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
                        <a href="/femininas">
                            <img
                                src="/assets/cards/femininas.png"
                                alt="Banner da Loja de Camisas"
                                className="h-auto rounded-xl"
                            />
                        </a>
                    </div>
                </SwiperSlide>

                <SwiperSlide>
                    <div className="ml-6">
                        <a href="/infantis">
                            <img
                                src="/assets/cards/infantis.png"
                                alt="Banner da Loja de Camisas"
                                className="h-auto rounded-xl"
                            />
                        </a>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="ml-6">
                        <a href="/retros">
                            <img
                                src="/assets/cards/retros.png"
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
                <a href="/femininas">
                    <img
                        src="/assets/cards/femininas.png"
                        alt="Banner da Loja de Camisas"
                        className="h-auto rounded-xl"
                    />
                </a>
            </div>
            <div>
                <a href="/infantis">
                    <img
                        src="/assets/cards/infantis.png"
                        alt="Banner da Loja de Camisas"
                        className="h-auto rounded-xl"
                    />
                </a>
            </div>
            <div>
                <a href="/retros">
                    <img
                        src="/assets/cards/retros.png"
                        alt="Banner da Loja de Camisas"
                        className="h-auto rounded-xl mb-12"
                    />
                </a>
            </div>
        </div>
    );
}
