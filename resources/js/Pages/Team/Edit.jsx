import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Admin from "@/Layouts/Admin";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, team }) {
    const { data, setData, post, errors } = useForm({
        image: "",
        name: team.data.name || "",
        country: team.data.country || "",
        _method: "PUT",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("team.update", team.data.id));
    };

    return (
        <Admin
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-gray-800 leading-tight">
                        Edit Team "{team.data.name}"
                    </h2>
                </div>
            }
        >
            <Head title="Edit Team" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={onSubmit}
                            className="p-6 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                        >
                            <div className="flex space-x-6">
                                <div className="w-full">
                                    <div>
                                        <InputLabel
                                            htmlFor="team_image_path"
                                            value="Team Image"
                                        />
                                        <TextInput
                                            id="team_image_path"
                                            type="file"
                                            name="image"
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "image",
                                                    e.target.files[0]
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.image}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="team_name"
                                            value="Team Name"
                                        />
                                        <TextInput
                                            id="team_name"
                                            type="text"
                                            name="name"
                                            value={data.name}
                                            className="mt-1 block w-full"
                                            isFocused={true}
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                        />
                                        <InputError
                                            message={errors.name}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div className="mt-4">
                                        <InputLabel
                                            htmlFor="team_country"
                                            value="Team Country"
                                        />
                                        <TextInput
                                            id="team_country"
                                            type="text"
                                            name="country"
                                            value={data.country}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "country",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.country}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>

                                {/* Imagem do Time */}
                                {team.data.image_path && (
                                    <div className="ml-auto">
                                        <img
                                            src={team.data.image_path}
                                            alt="Team"
                                            className="w-64 h-auto object-cover"
                                        />
                                    </div>
                                )}
                            </div>

                            <div className="mt-4 flex justify-center">
                                <Link
                                    href={route("team.index")}
                                    className="bg-gray-100 py-2 px-4 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                                >
                                    Cancel
                                </Link>
                                <button
                                    type="submit"
                                    className="bg-emerald-500 py-2 px-4 text-white rounded shadow transition-all hover:bg-emerald-600"
                                >
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Admin>
    );
}
