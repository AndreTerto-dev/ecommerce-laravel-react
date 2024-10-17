import Checkbox from '@/Components/User/Checkbox';
import User from '@/Layouts/User';
import Header from "@/Components/User/Header";
import InputError from '@/Components/User/InputError';
import PrimaryButton from '@/Components/User/PrimaryButton';
import TextInput from '@/Components/User/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Login({ status, canResetPassword }) {
    const { data, setData, post, processing, errors, reset } = useForm({
        email: '',
        password: '',
        remember: false,
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('login'), {
            onFinish: () => reset('password'),
        });
    };

    return (
        <User>
            <Head title="Log in" />

            <Header></Header>

            {status && (
                <div className="mb-4 font-medium text-sm text-green-600">
                    {status}
                </div>
            )}

            <h2 className="text-3xl font-bold mb-4 text-center mt-16">
                Entrar na minha conta
            </h2>
            <h3 className="text-xl mb-12 text-center text-black/80">
                Insira seu e-mail e senha:
            </h3>

            <form onSubmit={submit} className="w-80 mx-auto">
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
                        onChange={(e) => setData("email", e.target.value)}
                    />

                    <InputError message={errors.email} className="mt-2" />
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
                        onChange={(e) => setData("password", e.target.value)}
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>
                <PrimaryButton disabled={processing}>Entrar</PrimaryButton>

                <div className="mt-12 text-center">
                    <span className="text-black/80">Novo cliente? </span>
                    <Link
                        href={route("register")}
                        className="text-[#007bff]"
                    >
                        Criar sua conta
                    </Link>
                </div>
                <div className="mt-2 text-center">
                    <span className="text-black/80">Esqueceu sua senha? </span>
                    {canResetPassword && (
                        <Link
                            href={route("password.request")}
                            className="text-[#007bff]"
                        >
                            Recuperar senha
                        </Link>
                    )}
                </div>
            </form>
        </User>
    );
}
