import { useState } from "react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Link } from "@inertiajs/react";

export default function Authenticated({ header, children }) {
    const [showingNavigationDropdown, setShowingNavigationDropdown] =
        useState(false);

    return (
        <div className="flex flex-col min-h-screen bg-white">
            <main>{children}</main>
        </div>
    );
}
