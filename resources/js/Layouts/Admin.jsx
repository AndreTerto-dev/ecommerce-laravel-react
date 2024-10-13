import { useState } from "react";
import { usePage } from "@inertiajs/react";
import Sidebar from "../Components/Admin/Sidebar";

export default function Authenticated({ header, children }) {
    const user = usePage().props.auth.user;

    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="h-screen bg-gradient-to-r from-[#0056b3] via-[#007bff] to-[#ace1f2] flex items-center justify-center">
            <div className="grid h-[97%] w-[97%] bg-white/60 rounded-3xl gap-4 grid-cols-[11rem_auto_20rem] overflow-hidden shadow-lg">
                <Sidebar />
                <main className="flex flex-col -space-y-12">
                    {header && (
                        <header>
                            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                                {header}
                            </div>
                        </header>
                    )}
                    <div className="flex-1 p-6 transform scale-95">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
}
