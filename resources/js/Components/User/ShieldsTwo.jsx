import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Adicionando módulos que você quer usar
import "swiper/swiper-bundle.css"; // Importando estilos do Swiper

export default function ShieldsTwo() {
    return (
        <div className="mt-4 px-8">
            <Swiper
                modules={[Navigation, Pagination]} // Usando os módulos de navegação e paginação
                spaceBetween={-150} // Ajuste se necessário
                slidesPerView={9} // Número de slides por visualização
                slidesPerGroup={9} // Número de slides a serem movidos por vez
                navigation // Adicionando botões de navegação
                pagination={{ clickable: true }} // Paginação clicável
                speed={1000} // Diminui a velocidade da transição para 250ms
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


