import Admin from "@/Layouts/Admin";
import { Head, Link } from "@inertiajs/react";

export default function Show({ auth, category }) {
    return (
        <Admin
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-950 leading-tight">
                        {`Category "${category.data.name}"`}
                    </h2>
                    <Link
                        href={route("category.edit", category.data.id)}
                        className="bg-emerald-500 py-2 px-4 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Edit
                    </Link>
                </div>
            }
        >
            <Head title={`Category "${category.data.name}"`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white/15 overflow-hidden shadow-2xl sm:rounded-lg">
                        <div className="p-6 text-gray-950">
                            <div className="grid gap-6">
                                <div>
                                    <div>
                                        <label className="font-bold text-lg">
                                            Category ID
                                        </label>
                                        <p className="mt-1 text-gray-950">
                                            {category.data.id}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Category Name
                                        </label>
                                        <p className="mt-1 text-gray-950">
                                            {category.data.name}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Category Description
                                        </label>
                                        <p className="mt-1 text-gray-950">
                                            {category.data.description}
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
