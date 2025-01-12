import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules"; // Módulos necessários
import "swiper/swiper-bundle.css"; // Estilos do Swiper

const FeaturesSection = () => {

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
        <>
            {isMobile ? (
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
            ) : (
                <div className="flex bg-white py-8 justify-center pb-16 gap-12">
                    {features.map((feature, index) => (
                        <div key={index} className="flex items-start space-x-2">
                            <img
                                src={feature.icon}
                                alt={feature.title}
                                className="w-14 h-14"
                            />
                            <div>
                                <h3 className="font-semibold text-xl mb-1 text-gray-800">
                                    {feature.title}
                                </h3>
                                <p className="text-gray-600 text-sm">
                                    {feature.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            )}
        </>
    );
};

export default FeaturesSection;
