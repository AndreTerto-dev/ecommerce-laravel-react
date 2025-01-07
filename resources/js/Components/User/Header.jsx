import { useEffect, useState } from "react";
import { Link, usePage, useForm } from "@inertiajs/react";
import InputError from "@/Components/User/InputError";
import PrimaryButton from "@/Components/User/PrimaryButton";
import TextInput from "@/Components/User/TextInput";
import { toast, Toaster } from "sonner";


export default function Header() {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: "",
        password: "",
        remember: false,
    });

    const [warning, setWarning] = useState(false);

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isSearchOpen, setSearchOpen] = useState(false);
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

    useEffect(() => {
        if (warning) {
            toast.warning("Faça login para acessar sua Lista de Desejos.");
        }
        setWarning(false);
    }, [warning]);

    const handleWishlistClick = (e) => {
        if (!auth.user) {
            e.preventDefault(); // Evita o redirecionamento
            setWarning(true); // Define o warning como true
        }
    };

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
            <div className="flex justify-center items-center bg-[#017bff] text-white p-1 h-7">
                {/* Versão desktop */}
                <div className="hidden md:flex justify-between items-center w-full px-12">
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
                        <span className="font-bold">
                            Semana de Frete Grátis!
                        </span>
                    </div>
                    <div className="flex items-center">
                        <img
                            src="/assets/header/coracao.png"
                            className="w-6 h-6 mr-1"
                        />
                        <span className="font-bold">
                            Lançamentos disponíveis!
                        </span>
                    </div>
                </div>

                {/* Versão mobile */}
                <div className="flex md:hidden items-center">
                    <img
                        src="/assets/header/cubo.png"
                        className="w-7 h-7 mr-1"
                    />
                    <span className="font-bold">Compre 2 leve 3!</span>
                </div>
            </div>

            {/* Header responsivo para mobile */}
            {isMobile ? (
                <div className="flex justify-between items-center bg-gradient-to-b from-black to-[#1A1D1F] shadow-md w-full px-5 py-4 border-b-4 border-[#017bff]">
                    {/* Botão de Menu (Hambúrguer) */}
                    <button
                        className="text-white focus:outline-none"
                        onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                    >
                        <svg
                            className="w-6 h-6"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M4 6h16M4 12h16m-7 6h7"
                            />
                        </svg>
                    </button>

                    {/* Logo */}
                    <div className="flex items-center">
                        <a href="/">
                            <img
                                src="/assets/logo-text.png"
                                alt="Logo"
                                className="w-48 h-auto mr-2"
                            />
                        </a>
                    </div>

                    {/* Ações do Usuário */}
                    <div className="flex justify-end">
                        {auth.user ? (
                            <div className="flex items-center">
                                <img
                                    src="/assets/header/user-icon.png"
                                    alt="Usuário"
                                    className="w-6 h-6 mr-2"
                                />
                            </div>
                        ) : (
                            <div className="flex items-center">
                                <div className="flex flex-col items-center">
                                    <a
                                        href="#minha-conta"
                                        className="text-white font-bold text-base flex items-center"
                                        onClick={toggleLogin}
                                    >
                                        <img
                                            src="/assets/header/user-icon.png"
                                            alt="Usuário"
                                            className="w-6 h-auto mr-2"
                                        />
                                    </a>
                                </div>
                            </div>
                        )}

                        <div className="flex items-center">
                            <img
                                src="/assets/header/search-icon.png"
                                alt="Localizar"
                                className="w-6 h-auto mr-2"
                            />
                        </div>

                        <div className="flex items-center gap-2">
                            <a href="/cart">
                                <img
                                    src="/assets/header/cart-icon.png"
                                    alt="Carrinho"
                                    className="w-6 h-auto"
                                />
                            </a>
                        </div>
                    </div>

                    {!auth.user && (
                        <div
                            className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-6 rounded-lg shadow-lg z-10 w-full h-5/6 mt-14 transform transition-all duration-300 ease-in-out ${
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
                                        className="mt-12 block w-full"
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
                            <div className="mt-32 text-center">
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

                    {/* Menu suspenso */}
                    {isMobileMenuOpen && (
                        <div className="absolute top-28 left-0 w-full bg-black/90 shadow-lg z-10 py-1">
                            <ul className="flex flex-col items-center text-white font-bold text-base">
                                <li className="w-full text-start py-3 pl-6 hover:bg-gray-600/80">
                                    <a href="/dashboard">INÍCIO</a>
                                </li>
                                <li className="w-full text-start py-3 pl-6 hover:bg-gray-600/80 border-y-2 border-gray-600/40">
                                    <a href="#brasileiros">BRASILEIROS</a>
                                </li>
                                <li className="w-full text-start py-3 pl-6 hover:bg-gray-600/80">
                                    <a href="#internacionais">INTERNACIONAIS</a>
                                </li>
                                <li className="w-full text-start py-3 pl-6 hover:bg-gray-600/80 border-y-2 border-gray-600/40">
                                    <a href="#selecoes">SELEÇÕES</a>
                                </li>
                                <li className="w-full text-start py-3 pl-6 hover:bg-gray-600/80">
                                    <a href="#retro">RETRO</a>
                                </li>
                                <li className="w-full text-start py-3 pl-6 hover:bg-gray-600/80 border-y-2 border-gray-600/40">
                                    <a href="#infantil">INFANTIL</a>
                                </li>
                                <li className="w-full text-start py-3 pl-6 hover:bg-gray-600/80">
                                    <a href="/guia-medidas">GUIA DE MEDIDAS</a>
                                </li>
                                <li className="w-full text-start py-3 pl-6 hover:bg-gray-600/80 border-t-2 border-gray-600/40">
                                    <a href="/wishlist">LISTA DE DESEJOS</a>
                                </li>
                            </ul>

                            <p className="flex flex-col text-white font-black text-lg mt-10 pl-6">
                                PRECISA DE AJUDA?
                            </p>
                            <p className="flex text-white font-black text-base mt-5 pl-6">
                                <img
                                    src="/assets/footer/phone.png"
                                    alt="Phone"
                                    className="inline-block mr-2 w-7 h-7"
                                />
                                (82) 99643-2406
                            </p>
                            <p className="flex text-white font-black text-base mt-5 pl-6 mb-12">
                                <img
                                    src="/assets/footer/email.png"
                                    alt="Email"
                                    className="inline-block mr-2 w-7 h-7"
                                />
                                stormsports.oficial@gmail.com
                            </p>
                        </div>
                    )}
                </div>
            ) : (
                // Versão desktop
                <header className="flex flex-col p-4 h-32 bg-gradient-to-b from-black to-[#1A1D1F] shadow-md w-full border-b-4 border-[#017bff]">
                    <div className="flex items-start justify-center gap-16 ml-10 mt-2">
                        <div className="flex items-center -ml-20 -mt-1">
                            <a href="/">
                                <img
                                    src="/assets/logo.png"
                                    alt="Logo"
                                    className="w-12 h-auto mr-1"
                                />
                            </a>
                            <a href="/">
                                <div className="flex flex-col">
                                    <span className="text-blue-500 text-2xl font-bold -mb-1">
                                        Storm
                                    </span>
                                    <span className="text-white text-lg opacity-80">
                                        Sports
                                    </span>
                                </div>
                            </a>
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
                                    onClick={handleWishlistClick}
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
                    <Toaster
                        position="top-right"
                        richColors
                        toastOptions={{
                            className: "text-sm", // Aumenta o texto e o padding
                        }}
                    />
                </header>
            )}
        </>
    );
}
