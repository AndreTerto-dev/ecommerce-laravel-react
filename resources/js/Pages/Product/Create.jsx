import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Admin from "@/Layouts/Admin";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, brands, categories, teams }) {
    const { data, setData, post, errors } = useForm({
        name: "",
        description: "",
        price: "",
        stock_quantity: "",
    });

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("product.store"));
    };

    return (
        <Admin
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="font-semibold text-2xl text-gray-800 leading-tight">
                        Create New Product
                    </h2>
                </div>
            }
        >
            <Head title="Create Product" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-white dark:bg-gray-800 overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={onSubmit}
                            className="p-6 sm:p-8 bg-white dark:bg-gray-800 shadow sm:rounded-lg"
                        >
                            {/* First Part */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                <div>
                                    <InputLabel
                                        htmlFor="product_name"
                                        value="Product Name"
                                    />
                                    <TextInput
                                        id="product_name"
                                        type="text"
                                        name="name"
                                        value={data.name}
                                        className="mt-1 block w-full"
                                        isFocused={true}
                                        onChange={(e) =>
                                            setData("name", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.name}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="product_description"
                                        value="Product Description"
                                    />
                                    <TextInput
                                        id="product_description"
                                        type="text"
                                        name="description"
                                        value={data.description}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "description",
                                                e.target.value
                                            )
                                        }
                                    />
                                    <InputError
                                        message={errors.description}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="product_price"
                                        value="Product Price"
                                    />
                                    <TextInput
                                        id="product_price"
                                        type="number"
                                        name="price"
                                        value={data.price}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("price", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.price}
                                        className="mt-2"
                                    />
                                </div>
                                <div>
                                    <InputLabel
                                        htmlFor="product_stock"
                                        value="Product Stock"
                                    />
                                    <TextInput
                                        id="product_stock"
                                        type="number"
                                        name="stock_quantity"
                                        value={data.stock}
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("stock_quantity", e.target.value)
                                        }
                                    />
                                    <InputError
                                        message={errors.stock}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            {/* Second Part */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                <div>
                                    <InputLabel
                                        htmlFor="product_brand_id"
                                        value="Brand"
                                    />
                                    <SelectInput
                                        name="brand_id"
                                        id="product_brand_id"
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("brand_id", e.target.value)
                                        }
                                    >
                                        <option value="">Select Brand</option>
                                        {brands.data.map((brand) => (
                                            <option
                                                value={brand.id}
                                                key={brand.id}
                                            >
                                                {brand.name}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <InputError
                                        message={errors.brand_id}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="product_category_id"
                                        value="Category"
                                    />
                                    <SelectInput
                                        name="category_id"
                                        id="product_category_id"
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData(
                                                "category_id",
                                                e.target.value
                                            )
                                        }
                                    >
                                        <option value="">
                                            Select Category
                                        </option>
                                        {categories.data.map((category) => (
                                            <option
                                                value={category.id}
                                                key={category.id}
                                            >
                                                {category.name}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <InputError
                                        message={errors.category_id}
                                        className="mt-2"
                                    />
                                </div>

                                <div>
                                    <InputLabel
                                        htmlFor="product_team_id"
                                        value="Team"
                                    />
                                    <SelectInput
                                        name="team_id"
                                        id="product_team_id"
                                        className="mt-1 block w-full"
                                        onChange={(e) =>
                                            setData("team_id", e.target.value)
                                        }
                                    >
                                        <option value="">Select Team</option>
                                        {teams.data.map((team) => (
                                            <option
                                                value={team.id}
                                                key={team.id}
                                            >
                                                {team.name}
                                            </option>
                                        ))}
                                    </SelectInput>
                                    <InputError
                                        message={errors.team_id}
                                        className="mt-2"
                                    />
                                </div>
                            </div>

                            <div className="mt-6 flex justify-end">
                                <Link
                                    href={route("product.index")}
                                    className="bg-gray-100 py-2 px-4 text-gray-800 rounded shadow transition-all hover:bg-gray-200 mr-2"
                                >
                                    Cancel
                                </Link>
                                <button
                                    type="submit"
                                    className="bg-emerald-500 py-2 px-4 text-white rounded shadow transition-all hover:bg-emerald-600"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Admin>
    );
}
