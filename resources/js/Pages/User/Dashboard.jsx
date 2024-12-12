import User from "@/Layouts/User";
import Header from "@/Components/User/Header";
import Shields from "@/Components/User/Shields";
import ShieldsTwo from "@/Components/User/ShieldsTwo";
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

            <div className="flex gap-6 mx-12 mt-12">
                <div>
                    <a href="/brasileiros" className="">
                        <img
                            src="/assets/cards/brasileiros.png"
                            alt="Banner da Loja de Camisas"
                            className="h-auto rounded-xl"
                        />
                    </a>
                </div>
                <div>
                    <a href="/internacionais" className="">
                        <img
                            src="/assets/cards/internacionais.png"
                            alt="Banner da Loja de Camisas"
                            className="h-auto rounded-xl"
                        />
                    </a>
                </div>
                <div>
                    <a href="/selecoes" className="">
                        <img
                            src="/assets/cards/selecoes.png"
                            alt="Banner da Loja de Camisas"
                            className="h-auto rounded-xl mb-12"
                        />
                    </a>
                </div>
            </div>

            <Products products={products} />

            <div className="flex gap-6 mx-12 mt-12">
                <div>
                    <a href="/femininas" className="">
                        <img
                            src="/assets/cards/femininas.png"
                            alt="Banner da Loja de Camisas"
                            className="h-auto rounded-xl"
                        />
                    </a>
                </div>
                <div>
                    <a href="/infantis" className="">
                        <img
                            src="/assets/cards/infantis.png"
                            alt="Banner da Loja de Camisas"
                            className="h-auto rounded-xl"
                        />
                    </a>
                </div>
                <div>
                    <a href="/retros" className="">
                        <img
                            src="/assets/cards/retros.png"
                            alt="Banner da Loja de Camisas"
                            className="h-auto rounded-xl mb-12"
                        />
                    </a>
                </div>
            </div>

            <Products products={products} />

            <ShieldsTwo />

            <Products products={products} />
        </User>
    );
}
