import User from "@/Layouts/User";
import Header from "@/Components/User/Header";
import Shields from "@/Components/User/Shields";
import Products from "@/Components/User/Products";
import { Head } from "@inertiajs/react";

export default function Dashboard({ products }) {
    return (
        <User>
            <Head title="Dashboard" />

            <Header />

            {/* Banner Section */}
            <div className="relative w-11/12 h-auto mt-9 mx-auto overflow-hidden transition-all duration-700 hover:scale-105">
                <a
                    href="/alguma-pagina"
                    className="block transition-all duration-300"
                >
                    <img
                        src="/assets/banner-one.png"
                        alt="Banner da Loja de Camisas"
                        className="w-full h-auto rounded-xl transition-all duration-300"
                    />
                </a>
            </div>

            <Shields />

            <Products products={products} />

            {/* Conteúdo do Dashboard */}
            <div className="dashboard-content mt-8">
                {/* Adicione seu conteúdo aqui */}
            </div>
        </User>
    );
}
