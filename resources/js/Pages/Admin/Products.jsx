import Admin from "@/Layouts/Admin";
import { Head } from "@inertiajs/react";
import BarChart from "../../Components/Admin/BarChart";
import LineChart from "../../Components/Admin/LineChart";
import Sidebar from "../../Components/Admin/Sidebar"; // Importe a Sidebar

export default function Dashboard() {
    return (
        <Admin>
            <div className="flex-grow p-8">
                <h1 className="text-[#007bff] text-4xl font-bold mb-4">
                    Products
                </h1>
            </div>
        </Admin>
    );
}
