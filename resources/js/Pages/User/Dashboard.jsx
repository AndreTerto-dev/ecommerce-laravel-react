import User from "@/Layouts/User";
import Header from "@/Components/User/Header";
import Shields from "@/Components/User/Shields";
import ShieldsTwo from "@/Components/User/ShieldsTwo";
import Features from "@/Components/User/FeaturesSection";
import Products from "@/Components/User/Products";
import Footer from "@/Components/User/Footer";
import Cards from "@/Components/User/Cards";
import CardsTwo from "@/Components/User/CardsTwo";
import { Head } from "@inertiajs/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css"; // Importando estilos do Swiper


export default function Dashboard({ products }) {
    return (
        <User>
            <Head title="Dashboard" />

            <Header />

            {/* Banner Section */}
            <div className="relative w-full h-auto mx-auto overflow-hidden transition-all duration-700 md:hover:scale-105">
                <a
                    href="/alguma-pagina"
                    className="block transition-all duration-300"
                >
                    {/* Banner Desktop */}
                    <img
                        src="/assets/banner-one.png"
                        alt="Banner da Loja de Camisas"
                        className="hidden sm:block w-11/12 h-auto mx-auto rounded-xl transition-all duration-300 mt-9"
                    />
                    {/* Banner Mobile */}
                    <img
                        src="/assets/banner-mobile.png"
                        alt="Banner Mobile"
                        className="block sm:hidden w-full h-auto rounded-none transition-all duration-300"
                    />
                </a>
            </div>

            <Shields />

            <Products products={products} />

            <Cards />
            
            <Products products={products} />

            <CardsTwo />

            <Products products={products} />

            <ShieldsTwo />

            <Products products={products} />

            <Features />

            <Footer />
        </User>
    );
}
