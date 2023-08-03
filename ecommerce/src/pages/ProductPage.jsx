import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { HiOutlineShieldCheck } from "react-icons/hi";
import { AiOutlineTrophy } from "react-icons/ai";
import ProductPreview from "../components/ProductPreview";
import { formatPrice, textLimit } from "../functions";

const ProductPage = ({ cartItems, setCartItems }) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        };
        fetchProduct();
    }, [id]);

    return (
        <div className="relative bg-white mx-6 my-6 p-4 max-w-[1200px] rounded-md shadow-sm flex flex-col justify-between items-center lg:flex-row lg:h-[700px] lg:mx-auto">
            <div className="absolute top-0 left-0 flex-col gap-3 p-4 hidden lg:flex">
                <ProductPreview image={product.image} />
                <ProductPreview image={product.image} />
                <ProductPreview image={product.image} />
                <ProductPreview image={product.image} />
            </div>
            <div className="flex justify-center items-center w-full h-[500px]">
                <img src={product.image} alt="producto" className=" max-w-[70%] max-h-[70%]" />
            </div>
            <div className="w-full max-w-[350px] h-full flex flex-col rounded-md border-gray-200 border-[1px] p-4 flex-shrink-0">
                <p className="text-xs text-gray-500">Nuevo | +5mil vendidos</p>
                <h1 className="text-2xl font-medium my-2">{product.title ? textLimit(product.title, 45) : null}</h1>
                <p className="text-2xl mt-2">$ {formatPrice(product.price)}</p>
                <p className="text-sm">en 12x $ {formatPrice(product.price / 12)}</p>
                <button className="text-xs text-blue-500 text-left my-2">Ver los medios de pago</button>

                <p className="text-sm text-green-600 font-semibold my-2">Llega gratis mañana</p>
                <p className="text-sm text-green-600 mt-2">Devolución gratis</p>
                <p className="text-xs text-gray-500 my-2">Tenés 30 días desde que lo recibís.</p>
                <p className="text-xs mt-2">
                    Color: <b>Negro</b>
                </p>
                <div className="flex gap-2 my-2">
                    <button className="p-2 border-[1px] border-gray-200 text-xs rounded-md">Azul</button>
                    <button className="p-2 border-[1px] border-gray-200 text-xs rounded-md">Rojo</button>
                    <button className="p-2 border-[1px] border-gray-200 text-xs rounded-md">Verde</button>
                    <button className="p-2 border-[1px] border-gray-200 text-xs rounded-md">Amarillo</button>
                </div>
                <p className="font-semibold my-6">Stock disponible</p>
                <button
                    onClick={() => {
                        if (cartItems.some((item) => item.id === product.id)) {
                            setCartItems((prev) => {
                                return prev.map((item) => {
                                    if (item.id === product.id) return { ...item, amount: item.amount + 1 };
                                    else return item;
                                });
                            });
                        } else {
                            setCartItems((prev) => [...prev, { ...product, amount: 1 }]);
                        }
                    }}
                    className="bg-blue-500 text-white p-2 rounded-md">
                    Agregar al carrito
                </button>
                <div className="my-4 grid grid-cols-[min-content_1fr] grid-rows-2 gap-2 items-center text-gray-500">
                    <HiOutlineShieldCheck />
                    <p className="my-2 text-xs">
                        <span className="text-blue-400 font-semibold">Compra Protegida,</span> recibí el producto que esperabas o te devolvemos tu dinero.
                    </p>
                    <AiOutlineTrophy />
                    <p className="my-2 text-xs">
                        <span className="text-blue-400 font-semibold">Mercado Puntos.</span> Sumás 66 puntos.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ProductPage;
