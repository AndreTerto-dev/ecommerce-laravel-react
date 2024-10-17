import Admin from "@/Layouts/Admin";
import { Head, Link } from "@inertiajs/react";

export default function Show({ auth, product, images }) {
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

            <div className="py-8">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white/15 overflow-hidden shadow-2xl sm:rounded-lg">
                        <div className="p-6 text-gray-950">
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                    {/* Div esquerda */}
                                    <div>
                                        <label className="font-bold text-lg">
                                            Product ID
                                        </label>
                                        <p className="mt-1 text-gray-900">
                                            {product.data.id}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Product Name
                                        </label>
                                        <p className="mt-1 text-gray-900">
                                            {product.data.name}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Product Description
                                        </label>
                                        <p className="mt-1 text-gray-900">
                                            {product.data.description}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Launch
                                        </label>
                                        <p className="mt-1 text-gray-900">
                                            {product.data.launch ? "Yes" : "No"}
                                        </p>
                                    </div>
                                </div>

                                {/* Div direita */}
                                <div>
                                    <div>
                                        <label className="font-bold text-lg">
                                            Stock Quantity
                                        </label>
                                        <p className="mt-1 text-gray-900">
                                            {product.data.stock_quantity}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Category
                                        </label>
                                        <p className="mt-1 text-gray-900">
                                            {product.data.category.name}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Team
                                        </label>
                                        <p className="mt-1 text-gray-900">
                                            {product.data.team.name}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Brand
                                        </label>
                                        <p className="mt-1 text-gray-900">
                                            {product.data.brand
                                                ? product.data.brand.name
                                                : "No brand available"}
                                        </p>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        <label className="font-bold text-lg">
                                            Price
                                        </label>
                                        <p className="mt-1 text-gray-900">
                                            ${product.data.price}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Discount
                                        </label>
                                        <p className="mt-1 text-gray-900">
                                            {product.data.discount
                                                ? `${product.data.discount}%`
                                                : "No discount available"}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            New Price
                                        </label>
                                        <p className="mt-1 text-gray-900">
                                            ${product.data.new_price}
                                        </p>
                                    </div>
                                    <div className="mt-4">
                                        <label className="font-bold text-lg">
                                            Installments
                                        </label>
                                        <p className="mt-1 text-gray-900">
                                            12x ${product.data.installments}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                <div className="bg-white/15 overflow-hidden shadow-2xl sm:rounded-lg">
                    <div className="p-6 pb-4 text-gray-950">
                        <h3 className="font-semibold text-lg mb-4">
                            Product Images
                        </h3>

                        <div className="flex overflow-x-auto space-x-4">
                            {images.length > 0 ? (
                                images.map((image_path, index) => (
                                    <div
                                        key={index}
                                        className="rounded-lg overflow-hidden shadow-lg flex-shrink-0"
                                    >
                                        <img
                                            src={image_path}
                                            alt={`Product image ${index + 1}`}
                                            className="w-36 h-36 object-cover mb-2"
                                        />
                                    </div>
                                ))
                            ) : (
                                <p className="text-gray-700">
                                    No images available for this product.
                                </p>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </Admin>
    );
}
