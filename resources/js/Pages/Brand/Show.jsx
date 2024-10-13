import Admin from "@/Layouts/Admin";
import { Head, Link } from "@inertiajs/react";

export default function Show({ auth, brand }) {
    return (
        <Admin
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        {`Brand "${brand.data.name}"`}
                    </h2>
                    <Link
                        href={route("brand.edit", brand.data.id)}
                        className="bg-emerald-500 py-2 px-4 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Edit
                    </Link>
                </div>
            }
        >
            <Head title={`Brand "${brand.data.name}"`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white/15 overflow-hidden shadow-2xl sm:rounded-lg">
                        <div className="p-6 text-gray-950">
                            <div className="grid gap-6">
                                <div>
                                    <div>
                                        <label className="font-bold text-lg">
                                            Brand ID
                                        </label>
                                        <p className="mt-1 text-gray-950">
                                            {brand.data.id}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Brand Name
                                        </label>
                                        <p className="mt-1 text-gray-950">
                                            {brand.data.name}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Admin>
    );
}
