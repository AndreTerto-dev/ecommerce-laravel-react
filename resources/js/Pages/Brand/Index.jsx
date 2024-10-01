import Pagination from "@/Components/Pagination";
import TableHeading from "@/Components/TableHeading";
import TextInput from "@/Components/TextInput";
import Admin from "@/Layouts/Admin";
import { Head, Link, router } from "@inertiajs/react";

export default function Index({ auth, brands, queryParams = null, success }) {
    queryParams = queryParams || {};

    const searchFieldChanged = (name, value) => {
        if (value) {
            queryParams[name] = value;
        } else {
            delete queryParams[name];
        }

        router.get(route("brand.index"), queryParams);
    };

    const onKeyPress = (name, e) => {
        if (e.key !== "Enter") return;

        searchFieldChanged(name, e.target.value);
    };

    const deleteBrand = (brand) => {
        if (!window.confirm("Are you sure you want to delete this brand?")) {
            return;
        }
        router.delete(route("brand.destroy", brand.id));
    };

    return (
        <Admin
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-2xl text-gray-800 leading-tight">
                        Brands
                    </h2>
                    <Link
                        href={route("brand.create")}
                        className="bg-emerald-600 py-2 px-4 text-white rounded-lg shadow-md transition-transform duration-200 ease-in-out hover:bg-emerald-700 hover:scale-105"
                    >
                        Add New
                    </Link>
                </div>
            }
        >
            <Head title="Brands" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    {success && (
                        <div className="bg-emerald-600 py-2 px-4 text-white rounded mb-4">
                            {success}
                        </div>
                    )}
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg -mt-16">
                        <div className="p-6 text-gray-900 dark:text-gray-100">
                            <div className="overflow-auto">
                                <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <TableHeading
                                                name="id"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={() => {}}
                                            >
                                                ID
                                            </TableHeading>
                                            <TableHeading
                                                name="name"
                                                sort_field={
                                                    queryParams.sort_field
                                                }
                                                sort_direction={
                                                    queryParams.sort_direction
                                                }
                                                sortChanged={() => {}}
                                            >
                                                Name
                                            </TableHeading>
                                            <th className="px-3 py-3 text-center">
                                                Actions
                                            </th>
                                        </tr>
                                    </thead>
                                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 border-b-2 border-gray-500">
                                        <tr className="text-nowrap">
                                            <th className="px-3 py-3"></th>
                                            <th className="px-3 py-3">
                                                <TextInput
                                                    className="w-full"
                                                    defaultValue={
                                                        queryParams.name
                                                    }
                                                    placeholder="Brand Name"
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
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {brands.data.map((brand) => (
                                            <tr
                                                className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                                                key={brand.id}
                                            >
                                                <td className="px-3 py-2">
                                                    {brand.id}
                                                </td>
                                                <th className="px-3 py-2 text-gray-100 text-nowrap hover:underline">
                                                    <Link
                                                        href={route(
                                                            "brand.show",
                                                            brand.id
                                                        )}
                                                    >
                                                        {brand.name}
                                                    </Link>
                                                </th>
                                                <td className="px-3 py-2 text-nowrap text-center">
                                                    <Link
                                                        href={route(
                                                            "brand.edit",
                                                            brand.id
                                                        )}
                                                        className="font-medium text-blue-600 dark:text-blue-500 hover:underline mx-1"
                                                    >
                                                        Edit
                                                    </Link>
                                                    <button
                                                        onClick={() =>
                                                            deleteBrand(brand)
                                                        }
                                                        className="font-medium text-red-600 dark:text-red-500 hover:underline mx-1"
                                                    >
                                                        Delete
                                                    </button>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <Pagination links={brands.meta.links} />
                        </div>
                    </div>
                </div>
            </div>
        </Admin>
    );
}
