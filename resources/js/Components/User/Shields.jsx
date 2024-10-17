import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules"; // Adicionando módulos que você quer usar
import "swiper/swiper-bundle.css"; // Importando estilos do Swiper

export default function Shields() {
    return (
        <div className="mt-4 px-8">
            <Swiper
                modules={[Navigation, Pagination]} // Usando os módulos de navegação e paginação
                spaceBetween={-150} // Ajuste se necessário
                slidesPerView={9} // Número de slides por visualização
                slidesPerGroup={8} // Número de slides a serem movidos por vez
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
        src: "/assets/escudos/corinthians.png",
        alt: "Corinthians",
        link: "/corinthians",
    },
    {
        src: "/assets/escudos/sao-paulo.png",
        alt: "São Paulo",
        link: "/sao-paulo",
    },
    {
        src: "/assets/escudos/flamengo.png",
        alt: "Flamengo",
        link: "/flamengo",
    },
    {
        src: "/assets/escudos/palmeiras.png",
        alt: "Palmeiras",
        link: "/palmeiras",
    },
    { src: "/assets/escudos/vasco.png", alt: "Vasco", link: "/vasco" },
    {
        src: "/assets/escudos/atletico-mineiro.png",
        alt: "Atlético Mineiro",
        link: "/atletico-mineiro",
    },
    {
        src: "/assets/escudos/atletico-paranaense.png",
        alt: "Atlético Paranaense",
        link: "/atletico-paranaense",
    },
    {
        src: "/assets/escudos/bahia.png",
        alt: "Bahia",
        link: "/bahia",
    },
    {
        src: "/assets/escudos/botafogo.png",
        alt: "Botafogo",
        link: "/botafogo",
    },
    {
        src: "/assets/escudos/bragantino.png",
        alt: "Bragantino",
        link: "/bragantino",
    },
    {
        src: "/assets/escudos/cruzeiro.png",
        alt: "Cruzeiro",
        link: "/cruzeiro",
    },
    {
        src: "/assets/escudos/fluminense.png",
        alt: "Fluminense",
        link: "/fluminense",
    },
    {
        src: "/assets/escudos/fortaleza.png",
        alt: "Fortaleza",
        link: "/fortaleza",
    },
    {
        src: "/assets/escudos/gremio.png",
        alt: "Grêmio",
        link: "/gremio",
    },
    {
        src: "/assets/escudos/internacional.png",
        alt: "Internacional",
        link: "/internacional",
    },
    {
        src: "/assets/escudos/palmeiras.png",
        alt: "Palmeiras",
        link: "/palmeiras",
    },
    {
        src: "/assets/escudos/santos.png",
        alt: "Santos",
        link: "/santos",
    },
];
