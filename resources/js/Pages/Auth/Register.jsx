import User from '@/Layouts/User';
import Header from "@/Components/User/Header";
import InputError from '@/Components/User/InputError';
import InputLabel from '@/Components/User/InputLabel';
import PrimaryButton from '@/Components/User/PrimaryButton';
import TextInput from '@/Components/User/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';

export default function Register() {
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        password: '',
        password_confirmation: '',
    });

    const submit = (e) => {
        e.preventDefault();

        post(route('register'), {
            onFinish: () => reset('password', 'password_confirmation'),
        });
    };

    return (
        <User>
            <Head title="Register" />

            <Header></Header>

            <h2 className="text-3xl font-bold mb-4 text-center mt-14">
                Criar minha conta
            </h2>
            <h3 className="text-xl mb-10 text-center text-black/80">
                Preencha os campos abaixo:
            </h3>

            <form onSubmit={submit} className="w-80 mx-auto">
                <div>
                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        placeholder="Seu nome"
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData("name", e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>

                <div className="mt-3">
                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        placeholder="Email"
                        className="mt-1 block w-full"
                        autoComplete="username"
                        onChange={(e) => setData("email", e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>

                <div className="mt-3">
                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        placeholder="Senha"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData("password", e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-3">
                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        placeholder="Confirme sua senha"
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) =>
                            setData("password_confirmation", e.target.value)
                        }
                        required
                    />

                    <InputError
                        message={errors.password_confirmation}
                        className="mt-2"
                    />
                </div>

                <div className="flex items-center justify-end mt-5">
                    <PrimaryButton className="ms-4" disabled={processing}>
                        Register
                    </PrimaryButton>
                </div>
                <div className="mt-6 text-center">
                    <span className="text-black/80">Já tem uma conta? </span>
                    <a href="/login" className="text-[#007bff]">
                        Entre aqui
                    </a>
                </div>
            </form>
        </User>
    );
}
