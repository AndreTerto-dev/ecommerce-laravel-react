import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Admin from "@/Layouts/Admin";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Edit({ auth, product, categories, brands, teams }) {
    const { data, setData, post, errors } = useForm({
        name: product.data.name || "",
        description: product.data.description || "",
        price: product.data.price || "",
        stock_quantity: product.data.stock_quantity || "",
        launch: product.data.launch || "",
        discount: product.data.discount || "",
        category_id: product.data.category.id || "",
        brand_id: product.data.brand ? product.data.brand.id : "",
        team_id: product.data.team.id || "",
        images: product.data.images || "",
        _method: "PUT",
    });

    const handleImageChange = (e) => {
        setData("images", e.target.files);
    };

    const onSubmit = (e) => {
        e.preventDefault();
        post(route("product.update", product.data.id), {
            forceFormData: true,
        });
    };

    return (
        <Admin
            user={auth.user}
            header={
                <div className="flex justify-between items-center">
                    <h2 className="text-2xl font-semibold text-gray-800 leading-tight">
                        Edit Product "{product.data.name}"
                    </h2>
                </div>
            }
        >
            <Head title="Edit Product" />

            <div className="py-12">
                <div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
                    <div className="bg-transparent overflow-hidden shadow-sm sm:rounded-lg">
                        <form
                            onSubmit={onSubmit}
                            encType="multipart/form-data"
                            className="p-6 sm:p-8 bg-white/15 shadow sm:rounded-lg"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div className="space-y-4">
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
                                            htmlFor="price"
                                            value="Price"
                                        />
                                        <TextInput
                                            id="price"
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
                                            htmlFor="product_stock_quantity"
                                            value="Stock Quantity"
                                        />
                                        <TextInput
                                            id="product_stock_quantity"
                                            type="number"
                                            name="stock_quantity"
                                            value={data.stock_quantity}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "stock_quantity",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.stock_quantity}
                                            className="mt-2"
                                        />
                                    </div>

                                    <div>
                                        <InputLabel
                                            htmlFor="discount"
                                            value="Discount"
                                        />
                                        <TextInput
                                            id="discount"
                                            type="number"
                                            name="discount"
                                            value={data.discount}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "discount",
                                                    e.target.value
                                                )
                                            }
                                        />
                                        <InputError
                                            message={errors.discount}
                                            className="mt-2"
                                        />
                                    </div>
                                </div>

                                <div className="space-y-4">
                                    <div>
                                        <InputLabel
                                            htmlFor="launch"
                                            value="Launch"
                                        />

                                        <div className="mt-3 mb-6">
                                            <label className="mr-4">
                                                <input
                                                    type="radio"
                                                    name="launch"
                                                    value="true" // Aqui usamos string 'true'
                                                    checked={
                                                        data.launch === true
                                                    } // Comparando com booleano true
                                                    onChange={() =>
                                                        setData("launch", true)
                                                    } // Garantindo que o valor seja booleano true
                                                />
                                                Yes
                                            </label>
                                            <label>
                                                <input
                                                    type="radio"
                                                    name="launch"
                                                    value="false" // Aqui usamos string 'false'
                                                    checked={
                                                        data.launch === false
                                                    } // Comparando com booleano false
                                                    onChange={() =>
                                                        setData("launch", false)
                                                    } // Garantindo que o valor seja booleano false
                                                />
                                                No
                                            </label>
                                        </div>

                                        <InputError
                                            message={errors.launch}
                                            className="mt-2"
                                        />
                                    </div>
                                    <div>
                                        <InputLabel
                                            htmlFor="product_category_id"
                                            value="Category"
                                        />
                                        <SelectInput
                                            id="product_category_id"
                                            name="category_id"
                                            value={data.category_id}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "category_id",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            {categories.data.map((category) => (
                                                <option
                                                    key={category.id}
                                                    value={category.id}
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
                                            htmlFor="team_id"
                                            value="Team"
                                        />
                                        <SelectInput
                                            id="team_id"
                                            name="team_id"
                                            value={data.team_id}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "team_id",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            {teams.data.map((team) => (
                                                <option
                                                    key={team.id}
                                                    value={team.id}
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

                                    <div>
                                        <InputLabel
                                            htmlFor="brand_id"
                                            value="Brand"
                                        />
                                        <SelectInput
                                            id="brand_id"
                                            name="brand_id"
                                            value={data.brand_id}
                                            className="mt-1 block w-full"
                                            onChange={(e) =>
                                                setData(
                                                    "brand_id",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="">
                                                Select a brand
                                            </option>
                                            {brands.data.map((brand) => (
                                                <option
                                                    key={brand.id}
                                                    value={brand.id}
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
                                            htmlFor="images"
                                            value="Product Images"
                                        />
                                        <input
                                            id="images"
                                            type="file"
                                            name="images"
                                            className="mt-1 block w-full"
                                            onChange={handleImageChange}
                                            multiple
                                        />
                                        <InputError
                                            message={errors.images}
                                            className="mt-2"
                                        />
                                    </div>
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
                                    Save Changes
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </Admin>
    );
}
