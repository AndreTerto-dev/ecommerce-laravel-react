import Admin from "@/Layouts/Admin";
import { Head, Link } from "@inertiajs/react";

export default function Show({ auth, product }) {
    return (
        <Admin
            user={auth.user}
            header={
                <div className="flex items-center justify-between">
                    <h2 className="font-semibold text-xl text-gray-800 leading-tight">
                        {`Product "${product.data.name}"`}
                    </h2>
                    <Link
                        href={route("product.edit", product.data.id)}
                        className="bg-emerald-500 py-2 px-4 text-white rounded shadow transition-all hover:bg-emerald-600"
                    >
                        Edit
                    </Link>
                </div>
            }
        >
            <Head title={`Product "${product.data.name}"`} />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                {/* Primeira coluna - informações principais */}
                                <div>
                                    <div>
                                        <label className="font-bold text-lg">
                                            Product ID
                                        </label>
                                        <p className="mt-1 text-gray-700 dark:text-gray-300">
                                            {product.data.id}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Product Name
                                        </label>
                                        <p className="mt-1 text-gray-700 dark:text-gray-300">
                                            {product.data.name}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Product Description
                                        </label>
                                        <p className="mt-1 text-gray-700 dark:text-gray-300">
                                            {product.data.description}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Price
                                        </label>
                                        <p className="mt-1 text-gray-700 dark:text-gray-300">
                                            ${product.data.price}
                                        </p>
                                    </div>
                                </div>

                                {/* Segunda coluna - detalhes adicionais */}
                                <div>
                                    <div>
                                        <label className="font-bold text-lg">
                                            Stock Quantity
                                        </label>
                                        <p className="mt-1 text-gray-700 dark:text-gray-300">
                                            {product.data.stock_quantity}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Category
                                        </label>
                                        <p className="mt-1 text-gray-700 dark:text-gray-300">
                                            {product.data.category.name}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Team
                                        </label>
                                        <p className="mt-1 text-gray-700 dark:text-gray-300">
                                            {product.data.team.name}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Brand
                                        </label>
                                        <p className="mt-1 text-gray-700 dark:text-gray-300">
                                            {product.data.brand
                                                ? product.data.brand.name
                                                : "No brand available"}
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
