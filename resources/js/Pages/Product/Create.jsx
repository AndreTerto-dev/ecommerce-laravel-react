import InputError from "@/Components/InputError";
import InputLabel from "@/Components/InputLabel";
import SelectInput from "@/Components/SelectInput";
import TextInput from "@/Components/TextInput";
import Admin from "@/Layouts/Admin";
import { Head, Link, useForm } from "@inertiajs/react";

export default function Create({ auth, brands, categories, teams }) {
    const { data, setData, post, errors } = useForm({
        name: "",
        slug: "",
        description: "",
        price: "",
        stock_quantity: "",
        discount: "",
        launch: false,
        brand_id: "",
        category_id: "",
        team_id: "",
        images: [],
    });

    const handleImageChange = (e) => {
        setData("images", e.target.files);
    };

    const onSubmit = (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("slug", data.slug);
        formData.append("description", data.description);
        formData.append("price", data.price);
        formData.append("stock_quantity", data.stock_quantity);
        formData.append("discount", data.discount);
        formData.append("launch", data.launch);
        formData.append("brand_id", data.brand_id);
        formData.append("category_id", data.category_id);
        formData.append("team_id", data.team_id);

        if (data.images) {
            for (let i = 0; i < data.images.length; i++) {
                formData.append(`images[${i}]`, data.images[i]);
            }
        }


        post(route("product.store"), {
            data: formData,
            headers: {
                "Content-Type": "multipart/form-data",
            },
        });
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
                    <div className="bg-transparent overflow-hidden shadow-2xl sm:rounded-lg">
                        <form
                            onSubmit={onSubmit}
                            className="p-6 sm:p-8 bg-white/15 shadow sm:rounded-lg"
                            encType="multipart/form-data"
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
                                    <div>
                                        <InputLabel
                                            htmlFor="product_stock"
                                            value="Product Stock"
                                        />
                                        <TextInput
                                            id="product_stock"
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
                                                setData(
                                                    "team_id",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="">
                                                Select Team
                                            </option>
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
                                                setData(
                                                    "brand_id",
                                                    e.target.value
                                                )
                                            }
                                        >
                                            <option value="">
                                                Select Brand
                                            </option>
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
                                            htmlFor="product_images"
                                            value="Product Images"
                                        />
                                        <input
                                            id="product_images"
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
