import Admin from "@/Layouts/Admin";
import { Head, Link } from "@inertiajs/react";

export default function Show({ auth, team }) {
    return (
        <Admin
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        {`Team "${team.data.name}"`}
                    </h2>
                    <Link
                        href={route("team.edit", team.data.id)}
                        className="bg-emerald-500 py-2 px-4 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Edit
                    </Link>
                </div>
            }
        >
            <Head title={`Team "${team.data.name}"`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white/15 overflow-hidden shadow-2xl sm:rounded-lg flex flex-row">
                        <div className="p-6 text-gray-950">
                            <div className="grid gap-6">
                                <div>
                                    <div>
                                        <label className="font-bold text-lg">
                                            Team ID
                                        </label>
                                        <p className="mt-1 text-gray-950">
                                            {team.data.id}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Team Name
                                        </label>
                                        <p className="mt-1 text-gray-950">
                                            {team.data.name}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Team Country
                                        </label>
                                        <p className="mt-1 text-gray-950">
                                            {team.data.country}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="ml-auto p-6">
                            <img
                                src={team.data.image_path}
                                alt={`Image of ${team.name}`}
                                className="w-52 h-52 object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </Admin>
    );
}
