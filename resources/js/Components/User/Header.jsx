import { useState } from "react";
import { Link, usePage, useForm } from "@inertiajs/react";
import InputError from "@/Components/User/InputError";
import PrimaryButton from "@/Components/User/PrimaryButton";
import TextInput from "@/Components/User/TextInput";

export default function Header() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route("login"), {
            onFinish: () => reset("password"),
        });
    };

    const [isLoginOpen, setLoginOpen] = useState(false); // Estado para controlar a visibilidade do login
    const { auth } = usePage().props; // Acessa as props para verificar se o usuário está autenticado

    const toggleLogin = () => {
        setLoginOpen(!isLoginOpen); // Alterna o estado
    };

    return (
        <>
            {/* Faixa com frases */}
            <div className="flex justify-between items-center bg-[#017bff] text-white p-1 px-12 h-7">
                <div className="flex items-center">
                    <img
                        src="/assets/header/cubo.png"
                        className="w-7 h-7 mr-1"
                    />
                    <span className="font-bold">Compre 2 leve 3!</span>
                </div>
                <div className="flex items-center">
                    <img
                        src="/assets/header/frete.png"
                        className="w-8 h-9 mr-1"
                    />
                    <span className="font-bold">Semana de Frete Grátis!</span>
                </div>
                <div className="flex items-center">
                    <img
                        src="/assets/header/coracao.png"
                        className="w-6 h-6 mr-1"
                    />
                    <span className="font-bold">Lançamentos disponíveis!</span>
                </div>
            </div>

            {/* Header */}
            <header className="flex flex-col p-4 h-32 bg-gradient-to-b from-[#0a0f14] to-[#262b2e] shadow-md w-full border-b-4 border-[#017bff]">
                <div className="flex items-start justify-center gap-16 ml-10 mt-2">
                    <div className="flex items-center -ml-20 -mt-1">
                        <img
                            src="/assets/logo.png"
                            alt="Logo"
                            className="w-12 h-auto mr-1"
                        />
                        <div className="flex flex-col">
                            <span className="text-blue-500 text-2xl font-bold -mb-1">
                                Storm
                            </span>
                            <span className="text-white text-lg opacity-80">
                                Sports
                            </span>
                        </div>
                    </div>

                    {/* Barra de Pesquisa */}
                    <div className="flex items-center relative">
                        <input
                            type="text"
                            placeholder="Pesquisar..."
                            className="px-4 py-3 rounded-lg border border-blue-500 text-sm w-[37rem] h-10 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300"
                        />
                        <button className="absolute right-1 top-1/2 transform -translate-y-1/2 px-4 py-1 bg-blue-500 text-white rounded-lg cursor-pointer">
                            Buscar
                        </button>
                    </div>

                    {/* Ações do Usuário */}
                    <div className="flex items-center">
                        {auth.user ? (
                            <div className="flex items-center">
                                <img
                                    src="/assets/header/user-icon.png"
                                    alt="Usuário"
                                    className="w-7 h-7 mr-2"
                                />
                                <div className="flex flex-col items-center">
                                    <span className="text-gray-400 text-sm">
                                        Bem-vindo, {auth.user.name}
                                    </span>
                                    <Link
                                        href={route("logout")}
                                        method="post"
                                        className="text-white font-bold text-base"
                                    >
                                        Sair
                                    </Link>
                                </div>
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <img
                                    src="/assets/header/user-icon.png"
                                    alt="Usuário"
                                    className="w-7 h-7 mr-2"
                                />
                                <div className="flex flex-col items-center">
                                    <span className="text-gray-400 text-sm">
                                        Entrar / Criar Conta
                                    </span>
                                    <a
                                        href="#minha-conta"
                                        className="text-white font-bold text-base flex items-center"
                                        onClick={toggleLogin}
                                    >
                                        Minha Conta
                                        <img
                                            src="/assets/header/seta.png"
                                            alt="Setinha"
                                            className="w-3 h-3 ml-2"
                                        />
                                    </a>
                                </div>
                            </div>
                        )}

                        <span className="border-l-2 border-blue-500 h-10 mx-8"></span>

                        <div className="flex items-center">
                            <img
                                src="/assets/header/search-icon.png"
                                alt="Localizar"
                                className="w-7 h-7 mr-2"
                            />
                            <div className="flex flex-col items-center">
                                <span className="text-gray-400 text-sm">
                                    Localize seu produto
                                </span>
                                <a
                                    href="#rastrear-pedido"
                                    className="text-white font-bold text-base"
                                >
                                    Rastrear Pedido
                                </a>
                            </div>
                        </div>

                        <span className="border-l-2 border-blue-500 h-10 mx-8"></span>

                        <div className="flex items-center gap-2">
                            <a href="#carrinho">
                                <img
                                    src="/assets/header/cart-icon.png"
                                    alt="Carrinho"
                                    className="w-7 h-7"
                                />
                            </a>
                            <a
                                href="/cart"
                                className="text-white font-bold text-base flex flex-col items-center"
                            >
                                <span>Carrinho</span>
                            </a>
                        </div>
                    </div>
                </div>

                {/* Caixa de Login com transição */}
                {!auth.user && (
                    <div
                        className={`absolute right-80 top-28 bg-white p-6 rounded-lg shadow-lg z-10 w-80 transform transition-all duration-300 ease-in-out ${
                            isLoginOpen
                                ? "scale-100 opacity-100"
                                : "scale-95 opacity-0 pointer-events-none"
                        }`}
                    >
                        <h2 className="text-xl font-bold mb-4 text-center">
                            Entrar na minha conta
                        </h2>
                        <h3 className="text-xl mb-4 text-center text-black/80">
                            Insira seu e-mail e senha:
                        </h3>
                        <form onSubmit={submit} className="mx-auto">
                            <div>
                                <TextInput
                                    id="email"
                                    type="email"
                                    name="email"
                                    value={data.email}
                                    placeholder="Email"
                                    className="mt-1 block w-full"
                                    autoComplete="username"
                                    isFocused={true}
                                    onChange={(e) =>
                                        setData("email", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.email}
                                    className="mt-2"
                                />
                            </div>

                            <div className="mt-3 mb-7">
                                <TextInput
                                    id="password"
                                    type="password"
                                    name="password"
                                    value={data.password}
                                    placeholder="Senha"
                                    className="mt-1 block w-full"
                                    autoComplete="current-password"
                                    onChange={(e) =>
                                        setData("password", e.target.value)
                                    }
                                />

                                <InputError
                                    message={errors.password}
                                    className="mt-2"
                                />
                            </div>
                            <PrimaryButton disabled={processing}>
                                Entrar
                            </PrimaryButton>
                        </form>
                        <div className="mt-12 text-center">
                            <span className="text-black/80">
                                Novo cliente?{" "}
                            </span>
                            <Link
                                href={route("register")}
                                className="text-[#007bff]"
                            >
                                Criar sua conta
                            </Link>
                        </div>
                        <div className="mt-2 text-center">
                            <span className="text-black/80">
                                Esqueceu sua senha?{" "}
                            </span>
                            <Link
                                href={route("password.request")}
                                className="text-[#007bff]"
                            >
                                Recuperar senha
                            </Link>
                        </div>
                    </div>
                )}

                {/* Grupo de Itens de Navegação */}
                <nav className="flex justify-center -mt-3 text-xs">
                    <ul className="flex gap-3 text-white font-bold">
                        <li>
                            <a
                                href="/dashboard"
                                className="hover:bg-gray-600 px-4 py-2 rounded transition duration-300"
                            >
                                INÍCIO
                            </a>
                        </li>
                        <li>
                            <a
                                href="#brasileiros"
                                className="hover:bg-gray-600 px-4 py-2 rounded transition duration-300"
                            >
                                BRASILEIROS
                            </a>
                        </li>
                        <li>
                            <a
                                href="#internacionais"
                                className="hover:bg-gray-600 px-4 py-2 rounded transition duration-300"
                            >
                                INTERNACIONAIS
                            </a>
                        </li>
                        <li>
                            <a
                                href="#selecoes"
                                className="hover:bg-gray-600 px-4 py-2 rounded transition duration-300"
                            >
                                SELEÇÕES
                            </a>
                        </li>
                        <li>
                            <a
                                href="#retro"
                                className="hover:bg-gray-600 px-4 py-2 rounded transition duration-300"
                            >
                                RETRO
                            </a>
                        </li>
                        <li>
                            <a
                                href="#infantil"
                                className="hover:bg-gray-600 px-4 py-2 rounded transition duration-300"
                            >
                                INFANTIL
                            </a>
                        </li>
                        <li>
                            <a
                                href="/guia-medidas"
                                className="hover:bg-gray-600 px-4 py-2 rounded transition duration-300"
                            >
                                GUIA DE MEDIDAS
                            </a>
                        </li>
                        <li>
                            <a
                                href="/wishlist"
                                className="hover:bg-gray-600 px-4 py-2 rounded transition duration-300"
                            >
                                LISTA DE DESEJOS
                            </a>
                            
                        </li>
                        {auth.user && auth.user.role === "admin" ? (
                            <li>
                                <a
                                    href="/admin/dashboard"
                                    className="hover:bg-gray-600 px-4 py-2 rounded transition duration-300"
                                >
                                    PAINEL ADMINISTRADOR
                                </a>
                            </li>
                        ) : null}
                    </ul>
                </nav>
            </header>
        </>
    );
}
