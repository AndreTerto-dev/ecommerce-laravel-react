import User from "@/Layouts/User";
import Header from "@/Components/User/Header";
import { Head } from "@inertiajs/react";
import { useState } from "react";

const Product = ({ product, images }) => {
    // Estado para gerenciar a imagem principal que será exibida em destaque
    const [selectedImage, setSelectedImage] = useState(images[0]);

    return (
        <User>
            <Head title={product.data.name} />

            <Header />

            {/* Layout do produto com galeria lateral e detalhes */}
            <div className="flex flex-row space-x-12 mt-12 mx-40 max-w-7xl justify-center">
                {/* Div para miniaturas e imagem principal */}
                <div className="flex flex-row space-x-4 overflow-visible rounded-lg shadow-lg p-3">
                    {/* Galeria de miniaturas à esquerda */}
                    <div className="w-20 flex flex-col space-y-2">
                        {images.length > 0 ? (
                            images.map((image_path, index) => (
                                <div
                                    key={index}
                                    className={`border rounded-lg overflow-hidden cursor-pointer ${
                                        selectedImage === image_path
                                            ? "ring-2 ring-[#007bff]"
                                            : ""
                                    }`}
                                    onClick={() => setSelectedImage(image_path)}
                                >
                                    <img
                                        src={image_path}
                                        alt={`Thumbnail ${index + 1}`}
                                        className="w-full h-20 object-cover p-2"
                                    />
                                </div>
                            ))
                        ) : (
                            <p className="text-gray-700">
                                No images available.
                            </p>
                        )}
                    </div>

                    {/* Imagem principal */}
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

                {/* Informações do produto */}
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
                        <p className="text-lg text-gray-700">
                            {product.data.description}
                        </p>
                        <p className="text-lg text-red-500 line-through">
                            R$ {product.data.price}
                        </p>
                        <p className="text-green-600 font-bold text-3xl">
                            R$ {product.data.new_price}
                        </p>
                        <p className="text-gray-500">
                            ou 12x de R$ {product.data.installments}
                        </p>

                        {/* Exemplos de tamanhos */}
                        <div className="flex space-x-2">
                            {["P", "M", "G", "GG"].map((size) => (
                                <button
                                    key={size}
                                    className="px-4 py-2 border rounded-lg hover:bg-gray-200"
                                >
                                    {size}
                                </button>
                            ))}
                        </div>

                        {/* Personalização (exemplo de botão) */}
                        <div className="flex space-x-4">
                            <button className="px-4 py-2 border rounded-lg text-[#017bff] border-[#017bff]">
                                Sem Personalização
                            </button>
                            <button className="px-4 py-2 border rounded-lg">
                                Com Personalização
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </User>
    );
};

export default Product;
