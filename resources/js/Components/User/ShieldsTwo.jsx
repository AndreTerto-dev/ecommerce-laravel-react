import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules"; // Módulos necessários
import "swiper/swiper-bundle.css"; // Importando estilos do Swiper

export default function ShieldsTwo() {
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

    return (
        <div className="mt-4 sm:-ml-0 -ml-16">
            <Swiper
                modules={[Navigation, Pagination]} // Usando os módulos de navegação e paginação
                spaceBetween={isMobile ? -60 : -150} // Ajuste do espaço entre os slides
                slidesPerView={isMobile ? 3.5 : 9} // Número de slides por visualização, dependendo se é mobile
                slidesPerGroup={isMobile ? 1 : 8} // Número de slides a serem movidos por vez, dependendo da tela
                navigation={!isMobile} // Desativa as setas de navegação no mobile
                pagination={isMobile ? false : { clickable: true }} // Desativa a paginação no mobile
                speed={1000} // Ajustando a velocidade da transição
                grabCursor={isMobile} // Habilita o cursor de "arraste" no mobile
                freeMode={isMobile} // Habilita o modo de scroll livre (lateral) no mobile
            >
                {teams.map((team, index) => (
                    <SwiperSlide key={index}>
                        <div className="ml-16">
                            <a href={team.link} className="group">
                                <img
                                    src={team.src}
                                    alt={team.alt}
                                    className="w-36 h-auto mb-6 transition-transform duration-500 transform group-hover:scale-110" // Efeito de zoom
                                />
                            </a>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

const teams = [
    {
        src: "/assets/escudos/estrangeiros/real-madrid.png",
        alt: "Real Madrid",
        link: "/real-madrid",
    },
    {
        src: "/assets/escudos/estrangeiros/city.png",
        alt: "City",
        link: "/city",
    },
    {
        src: "/assets/escudos/estrangeiros/barcelona.png",
        alt: "Barcelona",
        link: "/barcelona",
    },
    {
        src: "/assets/escudos/estrangeiros/bayern.png",
        alt: "Bayern",
        link: "/bayern",
    },
    {
        src: "/assets/escudos/estrangeiros/united.png",
        alt: "United",
        link: "/united",
    },
    {
        src: "/assets/escudos/estrangeiros/juventus.png",
        alt: "Juventus",
        link: "/juventus",
    },
    {
        src: "/assets/escudos/estrangeiros/chelsea.png",
        alt: "Chelsea",
        link: "/chelsea",
    },
    {
        src: "/assets/escudos/estrangeiros/arsenal.png",
        alt: "Arsenal",
        link: "/arsenal",
    },
    {
        src: "/assets/escudos/estrangeiros/atletico-madrid.png",
        alt: "Atlético Madrid",
        link: "/atletico-madrid",
    },
    {
        src: "/assets/escudos/estrangeiros/liverpool.png",
        alt: "Liverpool",
        link: "/liverpool",
    },
    {
        src: "/assets/escudos/estrangeiros/psg.png",
        alt: "PSG",
        link: "/psg",
    },
    {
        src: "/assets/escudos/estrangeiros/milan.png",
        alt: "Milan",
        link: "/milan",
    },
    {
        src: "/assets/escudos/estrangeiros/al-hilal.png",
        alt: "Al-Hilal",
        link: "/al-hilal",
    },
    {
        src: "/assets/escudos/estrangeiros/al-nassr.png",
        alt: "Al-Nassr",
        link: "/al-nassr",
    },
    {
        src: "/assets/escudos/estrangeiros/roma.png",
        alt: "Roma",
        link: "/roma",
    },
    {
        src: "/assets/escudos/estrangeiros/tottenham.png",
        alt: "Tottenham",
        link: "/tottenham",
    },
    {
        src: "/assets/escudos/estrangeiros/borussia.png",
        alt: "Borussia",
        link: "/borussia",
    },
    {
        src: "/assets/escudos/estrangeiros/inter-de-milao.png",
        alt: "Inter de Milão",
        link: "/inter-de-milao",
    },
];
