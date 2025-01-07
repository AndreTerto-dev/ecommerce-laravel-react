import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation, Pagination } from "swiper/modules"; // Módulos necessários
import "swiper/swiper-bundle.css"; // Importando estilos do Swiper

export default function Shields() {
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
                speed={1000} // Ajustando a velocidade da transição"
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
        src: "/assets/escudos/brasileiros/corinthians.png",
        alt: "Corinthians",
        link: "/corinthians",
    },
    {
        src: "/assets/escudos/brasileiros/sao-paulo.png",
        alt: "São Paulo",
        link: "/sao-paulo",
    },
    {
        src: "/assets/escudos/brasileiros/flamengo.png",
        alt: "Flamengo",
        link: "/flamengo",
    },
    {
        src: "/assets/escudos/brasileiros/palmeiras.png",
        alt: "Palmeiras",
        link: "/palmeiras",
    },
    {
        src: "/assets/escudos/brasileiros/vasco.png",
        alt: "Vasco",
        link: "/vasco",
    },
    {
        src: "/assets/escudos/brasileiros/atletico-mineiro.png",
        alt: "Atlético Mineiro",
        link: "/atletico-mineiro",
    },
    {
        src: "/assets/escudos/brasileiros/atletico-paranaense.png",
        alt: "Atlético Paranaense",
        link: "/atletico-paranaense",
    },
    {
        src: "/assets/escudos/brasileiros/bahia.png",
        alt: "Bahia",
        link: "/bahia",
    },
    {
        src: "/assets/escudos/brasileiros/botafogo.png",
        alt: "Botafogo",
        link: "/botafogo",
    },
    {
        src: "/assets/escudos/brasileiros/bragantino.png",
        alt: "Bragantino",
        link: "/bragantino",
    },
    {
        src: "/assets/escudos/brasileiros/cruzeiro.png",
        alt: "Cruzeiro",
        link: "/cruzeiro",
    },
    {
        src: "/assets/escudos/brasileiros/fluminense.png",
        alt: "Fluminense",
        link: "/fluminense",
    },
    {
        src: "/assets/escudos/brasileiros/fortaleza.png",
        alt: "Fortaleza",
        link: "/fortaleza",
    },
    {
        src: "/assets/escudos/brasileiros/gremio.png",
        alt: "Grêmio",
        link: "/gremio",
    },
    {
        src: "/assets/escudos/brasileiros/internacional.png",
        alt: "Internacional",
        link: "/internacional",
    },
    {
        src: "/assets/escudos/brasileiros/santos.png",
        alt: "Santos",
        link: "/santos",
    },
];
