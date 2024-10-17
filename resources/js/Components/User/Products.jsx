import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";
import "swiper/swiper-bundle.css";

export default function Products({ products }) {
    
    return (
        <div className="w-11/12 mx-auto mt-12">
            <h2 className="text-xl font-bold text-gray-800 border-b-2 border-[#017bff] inline p-1">
                Lançamentos
            </h2>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y]}
                spaceBetween={20}
                slidesPerView={6}
                slidesPerGroup={6}
                navigation
                pagination={{ clickable: true }}
            >
                {products.data.map((product) => (
                    <SwiperSlide key={product.id}>
                        <div className="border rounded-lg p-4 mt-4 shadow-sm hover:shadow-2xl transition-shadow duration-300 mb-12 relative">
                            <span className="text-white bg-[#017bff] py-1 px-2 rounded-lg text-sm font-semibold absolute -mt-8">
                                {product.discount}% OFF
                            </span>

                            <a href={`/products/${product.url}`}>
                                <img
                                    src={product.image_path}
                                    alt={product.name}
                                    className="w-full h-auto rounded-lg mb-4 mt-8"
                                />
                            </a>

                            <a href={`/products/${product.url}`}>
                                <h3 className="text-gray-700 font-bold">
                                    {product.name}
                                </h3>
                            </a>

                            <p className="text-sm text-red-500 line-through">
                                R$ {product.price}
                            </p>
                            <p className="text-green-600 font-bold text-lg">
                                R$ {product.new_price}
                            </p>
                            <p className="text-sm text-gray-500">
                                ou 12x de R$ {product.installments}
                            </p>
                            <p className="text-xs text-gray-400 mt-2">
                                +1453 unidades vendidas
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
