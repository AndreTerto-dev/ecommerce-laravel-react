import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function Products({ products }) {
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
        <div className="mt-12">
            <h2 className="ml-7 text-xl font-bold text-gray-800 border-b-2 border-[#017bff] inline p-1">
                Lançamentos
            </h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={isMobile ? -150 : 20}
                slidesPerView={isMobile ? 1 : 6}
                slidesPerGroup={isMobile ? 1 : 6}
                navigation={!isMobile} // Desativa as setas de navegação no mobile
                pagination={isMobile ? false : { clickable: true }} // Desativa a paginação no mobile
                grabCursor={isMobile} // Habilita o cursor de "arraste" no mobile
                freeMode={isMobile}
            >
                {products.data.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="pl-7">
                            <div className="w-72 sm:w-auto border rounded-lg p-4 mt-4 shadow-sm hover:shadow-2xl transition-shadow duration-300 mb-12 relative">
                                <span className="text-white bg-[#017bff] py-1 px-2 rounded-lg text-sm font-semibold absolute -mt-2">
                                    {product.discount}% OFF
                                </span>

                                <a href={`/products/${product.slug}`}>
                                    <img
                                        src={product.image_path}
                                        alt={product.name}
                                        className="w-full h-auto rounded-lg mb-4 mt-8"
                                    />
                                </a>

                                <a href={`/products/${product.slug}`}>
                                    <h3 className="text-gray-700 font-bold">
                                        {product.name}
                                    </h3>
                                </a>

                                <p className="text-sm text-red-500 line-through">
                                    R${" "}
                                    {Number(product.price)
                                        .toFixed(2)
                                        .replace(".", ",")}
                                </p>
                                <p className="text-green-600 font-bold text-lg">
                                    R${" "}
                                    {Number(product.new_price)
                                        .toFixed(2)
                                        .replace(".", ",")}
                                </p>
                                <p className="text-sm text-gray-500">
                                    ou 12x de R${" "}
                                    {Number(product.installments)
                                        .toFixed(2)
                                        .replace(".", ",")}
                                </p>
                                <p className="text-xs text-gray-400 mt-2">
                                    +1453 unidades vendidas
                                </p>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
