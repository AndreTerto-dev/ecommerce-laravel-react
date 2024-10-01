import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import Admin from "@/Layouts/Admin";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, brand }) {
    const { data, setData, post, errors } = useForm({
        name: brand.name || "",
        _method: "PUT",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("brand.update", brand.data.id));
    };

    return (
        <Admin
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-gray-800 leading-tight">
                        Edit Brand "{brand.data.name}"
                    </h2>
                </div>
            }
        >
            <Head title="Edit Brand" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={onSubmit}
                            className="p-6 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                        >
                            <div>
                                <InputLabel
                                    htmlFor="brand_name"
                                    value="Brand Name"
                                />
                                <TextInput
                                    id="brand_name"
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
                            <div className="mt-4 flex justify-end">
                                <Link
                                    href={route("brand.index")}
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
