import Pagination from "@/Components/Pagination";
import TableHeading from "@/Components/TableHeading";
import TextInput from "@/Components/TextInput";
import Admin from "@/Layouts/Admin";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({
    auth,
    products,
    queryParams = null,
    success,
}) {
    queryParams = queryParams || {};

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("product.index"), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        searchFieldChanged(name, e.target.value);
    };

    const sortChanged = (name) => {
        if (name === queryParams.sort_field) {
            queryParams.sort_direction =
                queryParams.sort_direction === "asc" ? "desc" : "asc";
        } else {
            queryParams.sort_field = name;
            queryParams.sort_direction = "asc";
        }
        router.get(route("product.index"), queryParams);
    };

    const deleteProduct = (product) => {
        if (!window.confirm("Are you sure you want to delete this product?")) {
            return;
        }
        router.delete(route("product.destroy", product.id));
    };

    return (
        <Admin
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-2xl text-gray-800 leading-tight">
                        Products
                    </h2>
                    <Link
                        href={route("product.create")}
                        className="bg-emerald-600 py-2 px-4 text-white rounded-lg shadow-md transition-transform duration-200 ease-in-out hover:bg-emerald-700 hover:scale-105"
                    >
                        Add New
                    </Link>
                </div>
            }
        >
            <Head title="Products" />

            <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                {success && (
                    <div className="bg-emerald-600 py-2 px-4 text-white rounded mb-2">
                        {success}
                    </div>
                )}
                <div className="bg-white/15 overflow-hidden shadow-2xl sm:rounded-lg">
                    <div className="p-6 text-gray-950">
                        <div className="overflow-auto sm:rounded-lg">
                            <table className="w-full text-sm text-left rtl:text-right text-gray-950">
                                <thead className="text-xs text-gray-950 uppercase bg-white/30 border-b-2 border-white/40">
                                    <tr className="text-nowrap">
                                        <TableHeading
                                            name="id"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={
                                                queryParams.sort_direction
                                            }
                                            sortChanged={sortChanged}
                                        >
                                            ID
                                        </TableHeading>
                                        <th className="px-3 py-3">Image</th>
                                        <TableHeading
                                            name="name"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={
                                                queryParams.sort_direction
                                            }
                                            sortChanged={sortChanged}
                                        >
                                            Name
                                        </TableHeading>
                                        <TableHeading
                                            name="price"
                                            sort_field={queryParams.sort_field}
                                            sort_direction={
                                                queryParams.sort_direction
                                            }
                                            sortChanged={sortChanged}
                                        >
                                            Price
                                        </TableHeading>

                                        <th className="px-3 py-3">
                                            Category Name
                                        </th>

                                        <th className="px-3 py-3 text-center">
                                            Actions
                                        </th>
                                    </tr>
                                </thead>
                                <thead className="text-xs text-gray-400 uppercase bg-white/30 border-b-2 border-white/40">
                                    <tr className="text-nowrap">
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3">
                                            <TextInput
                                                className="w-full"
                                                defaultValue={queryParams.name}
                                                placeholder="Product Name"
                                                onBlur={(e) =>
                                                    searchFieldChanged(
                                                        "name",
                                                        e.target.value
                                                    )
                                                }
                                                onKeyPress={(e) =>
                                                    onKeyPress("name", e)
                                                }
                                            />
                                        </th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                        <th className="px-3 py-3"></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {products.data.map((product) => (
                                        <tr
                                            className="bg-transparent border-b border-white/40"
                                            key={product.id}
                                        >
                                            <td className="px-3 py-2">
                                                {product.id}
                                            </td>
                                            <td className="px-3 py-2">
                                                <img
                                                    src={product.image_path}
                                                    alt={product.name}
                                                    style={{ width: 57 }}
                                                />
                                            </td>
                                            <th className="px-3 py-2 text-gray-950 text-nowrap hover:underline">
                                                <Link
                                                    href={route(
                                                        "product.show",
                                                        product.id
                                                    )}
                                                >
                                                    {product.name}
                                                </Link>
                                            </th>
                                            <td className="px-3 py-2 text-nowrap text-gray-950">
                                                {product.price}
                                            </td>
                                            <td className="px-3 py-2 text-gray-950">
                                                {product.category.name}
                                            </td>
                                            <td className="px-3 py-2 text-nowrap text-center">
                                                <Link
                                                    href={route(
                                                        "product.edit",
                                                        product.id
                                                    )}
                                                    className="font-medium text-blue-600 hover:underline mx-1"
                                                >
                                                    Edit
                                                </Link>
                                                <button
                                                    onClick={() =>
                                                        deleteProduct(product)
                                                    }
                                                    className="font-medium text-red-500 hover:underline mx-1"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        <Pagination links={products.meta.links} />
                    </div>
                </div>
            </div>
        </Admin>
    );
}
