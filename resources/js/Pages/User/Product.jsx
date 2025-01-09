import User from "@/Layouts/User";
import Header from "@/Components/User/Header";
import { Head, Link, useForm } from "@inertiajs/react";
import { useEffect, useState } from "react";
import Footer from "@/Components/User/Footer";
import { toast } from "sonner";

const Product = ({ product, images, warning }) => {
    const [isMobile, setIsMobile] = useState(false);
    const [selectedImage, setSelectedImage] = useState(images[0]);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth < 640);
        };

        handleResize();
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    }, []);

    useEffect(() => {
        if (warning) {
            toast.warning(warning);
        }
    }, [warning]);

    return (
        <User>
            <Head title={product.data.name} />
            <Header />

            <div className={`mt-12 ${isMobile ? "px-4" : "mx-40 max-w-7xl"}`}>
                <div
                    className={`${
                        isMobile
                            ? "space-y-4"
                            : "flex flex-row space-x-12 justify-center bg-gray-50"
                    }`}
                >
                    {isMobile ? (
                        <div className="flex flex-col items-center">
                            {/* Imagem principal */}
                            <div className="rounded-lg mb-4">
                                <img
                                    src={selectedImage}
                                    alt="Selected product"
                                    className="w-full h-auto object-cover"
                                />
                            </div>

                            {/* Miniaturas */}
                            <div className="flex w-20 space-x-4">
                                {images.map((image_path, index) => (
                                    <div
                                        key={index}
                                        className={`border-2 rounded-lg cursor-pointer ${
                                            selectedImage === image_path
                                                ? "ring-2 ring-[#007bff]"
                                                : "border-gray-300"
                                        }`}
                                        onClick={() =>
                                            setSelectedImage(image_path)
                                        }
                                    >
                                        <img
                                            src={image_path}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-20 h-20 object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ) : (
                        <div className="flex flex-row space-x-4">
                            {/* Miniaturas no desktop */}
                            <div className="w-20 flex flex-col space-y-2">
                                {images.map((image_path, index) => (
                                    <div
                                        key={index}
                                        className={`border-2 rounded-lg cursor-pointer ${
                                            selectedImage === image_path
                                                ? "ring-2 ring-[#007bff]"
                                                : "border-gray-300"
                                        }`}
                                        onClick={() =>
                                            setSelectedImage(image_path)
                                        }
                                    >
                                        <img
                                            src={image_path}
                                            alt={`Thumbnail ${index + 1}`}
                                            className="w-full h-20 object-cover"
                                        />
                                    </div>
                                ))}
                            </div>

                            {/* Imagem principal no desktop */}
                            <div className="flex-1">
                                <div className="max-w-lg h-auto mb-4 p-4">
                                    <img
                                        src={selectedImage}
                                        alt="Selected product"
                                        className="w-full h-auto max-h-96 object-cover"
                                    />
                                </div>
                            </div>
                        </div>
                    )}

                    <div className="rounded-lg shadow-lg p-4">
                        <div className="space-y-2">
                            <div className="flex gap-2">
                                <p className="text-[10px] border bg-white text-gray-600 rounded-md p-1 font-bold">
                                    473 VENDIDOS
                                </p>
                                <p className="text-[10px] border bg-black text-white rounded-md p-1">
                                    COMPRE 2 LEVE 3
                                </p>
                                <p className="text-[10px] bg-[#017bff] rounded-md p-1 font-bold">
                                    OFERTA RELÂMPAGO
                                </p>
                            </div>
                            <h1 className="text-2xl font-bold">
                                {product.data.name}
                            </h1>
                            <p className="text-lg text-red-500 line-through">
                                R${" "}
                                {Number(product.data.price)
                                    .toFixed(2)
                                    .replace(".", ",")}
                            </p>
                            <p className="text-green-500 font-bold text-3xl">
                                R${" "}
                                {Number(product.data.new_price)
                                    .toFixed(2)
                                    .replace(".", ",")}
                            </p>
                            <p className="text-gray-500">
                                ou 12x de R${" "}
                                {Number(product.data.installments)
                                    .toFixed(2)
                                    .replace(".", ",")}
                            </p>

                            <div className="flex space-x-2">
                                {["P", "M", "G", "GG", "XG", "XXG"].map((size) => (
                                    <button
                                        key={size}
                                        className="px-4 py-2 border rounded-lg hover:bg-gray-200"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>

                            <div className="flex space-x-4">
                                <button className="px-4 py-2 border rounded-lg text-[#017bff] border-[#017bff]">
                                    Sem Personalização
                                </button>
                                <button className="px-4 py-2 border rounded-lg">
                                    Com Personalização
                                </button>
                            </div>

                            <div className="sm:flex flex-row space-y-2 justify-start gap-4">
                                <Link
                                    href={route("cart.add.item")}
                                    method="post"
                                    data={{
                                        product_id: product.data.id,
                                        quantity: 1,
                                    }}
                                    as="button"
                                    type="button"
                                >
                                    <button className="px-12 py-3 border rounded-lg bg-[#017bff] text-white text-lg font-extrabold">
                                        COMPRAR AGORA
                                    </button>
                                </Link>
                                <Link
                                    href={route("wishlist.add")}
                                    method="post"
                                    data={{
                                        product_id: product.data.id,
                                    }}
                                    as="button"
                                    type="button"
                                >
                                    <button className="px-4 py-3 border rounded-lg bg-black text-white text-sm font-extrabold">
                                        ADICIONAR A LISTA DE DESEJOS
                                    </button>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </User>
    );
};

export default Product;
