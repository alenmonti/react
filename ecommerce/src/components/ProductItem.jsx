import React, { useEffect } from "react";
import {textLimit} from "../functions";
import { formatPrice } from "../functions";
import { BsFillLightningFill } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";
import { FaRegEye } from "react-icons/fa";
import { Link } from "react-router-dom";


const ProductItem = ({ product, cartItems, setCartItems }) => {
    const discount = Math.floor(product.id % 2);

    return (
        <div className="bg-white flex flex-col w-[222px] rounded-md mb-6 shadow-md hover:shadow-xl relative">
            <div className="absolute top-0 right-0 z-30 flex flex-col gap-2 m-2">
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
                    className="text-center text-2xl p-1 cursor-pointer bg-red-300 shadow-md rounded-sm">
                    <BsPlusLg size={15} />
                </button>
                <Link to={`/product/${product.id}`}
                    className="text-center text-2xl p-1 cursor-pointer bg-white shadow-md rounded-sm">
                    <FaRegEye size={15} />
                </Link>
            </div>
            <div className="h-[222px] overflow-hidden flex justify-center items-center">
                <img src={product.image} alt="product item" className="rounded-t-md max-h-[90%] max-w-[90%]" placeholder="" />
            </div>
            <div className="w-full border-t-[1px] border-gray-300"></div>
            <div className="flex flex-col h-[150px] p-4 gap-1">
                <div>
                    <span className="font-medium text-xl text-gray-700">$ {formatPrice(product.price)}</span>
                    {discount === 0 ? null : <span className="text-green-600 text-xs"> 30% OFF</span>}
                </div>
                <p className="text-xs text-green-600">
                    Mismo precio en 3 cuotas de <br></br>$ {formatPrice(product.price / 3)}
                </p>
                <p className="text-xs text-green-600 font-medium">
                    Envío gratis{" "}
                    {discount === 1 ? null : (
                        <span className="text-green-600 font-semibold">
                            <BsFillLightningFill className="inline ml-1" />
                            FULL
                        </span>
                    )}
                </p>
                <p className="text-xs">{textLimit(product.title, 45)}</p>
            </div>
        </div>
    );
};

export default ProductItem;
