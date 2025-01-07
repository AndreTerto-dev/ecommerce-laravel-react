import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Módulos necessários
import "swiper/swiper-bundle.css"; // Estilos do Swiper

const Cards = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    const cardData = [
        { href: "/brasileiros", src: "/assets/cards/brasileiros.png" },
        { href: "/internacionais", src: "/assets/cards/internacionais.png" },
        { href: "/selecoes", src: "/assets/cards/selecoes.png" },
    ];

    return isMobile ? (
        <Swiper
            spaceBetween={10}
            slidesPerView={1}
            grabCursor={true}
            slidesPerGroup={1} // Número de slides a serem movidos por vez, dependendo da tela
            freeMode={true}
        >
            {cardData.map((card, index) => (
                <SwiperSlide key={index}>
                    <div className="">
                        <a href={card.href}>
                            <img
                                src={card.src}
                                alt={`Banner ${card.href}`}
                                className="h-auto rounded-xl"
                            />
                        </a>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    ) : (
        <div className="flex gap-6 mx-12 mt-12">
            {cardData.map((card, index) => (
                <div key={index}>
                    <a href={card.href}>
                        <img
                            src={card.src}
                            alt={`Banner ${card.href}`}
                            className="h-auto rounded-xl"
                        />
                    </a>
                </div>
            ))}
        </div>
    );
};

const FeaturesSection = () => {
    const features = [
        {
            icon: "/assets/features/entrega.png",
            title: "Entrega Garantida",
            description: "Envio imediato após o pagamento.",
        },
        {
            icon: "/assets/features/satisfeito.png",
            title: "Cliente Satisfeito",
            description: "Garantia de compra ou seu dinheiro de volta!",
        },
        {
            icon: "/assets/features/atendimento.png",
            title: "Suporte ao Cliente",
            description: "Atendimento Seg. a Sáb. 8:00h às 18:00h",
        },
        {
            icon: "/assets/features/pagamento.png",
            title: "Pagamento Seguro",
            description: "Aceitamos Cartão, PIX e Boleto.",
        },
    ];

    return (
        <div className="bg-white py-8">
            <Swiper
                modules={[Navigation, Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                pagination={{ clickable: true }}
            >
                {features.map((feature, index) => (
                    <SwiperSlide key={index}>
                        <div className="flex flex-col items-center text-center space-y-4 mb-14">
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="w-14 h-14"
                            />
                            <h3 className="font-semibold text-xl text-gray-800">
                                {feature.title}
                            </h3>
                            <p className="text-gray-600 text-sm">
                                {feature.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
};

export default FeaturesSection;
