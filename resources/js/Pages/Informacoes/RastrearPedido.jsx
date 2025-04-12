import React from "react";
import Header from "@/Components/User/Header";
import Footer from "@/Components/User/Footer";
import { Head } from "@inertiajs/react";

export default function QuemSomos() {
    return (
        <div className="bg-gray-50 relative">
            <Head title="Quem Somos" />

            <Header />

            <Footer />
        </div>
    );
}
