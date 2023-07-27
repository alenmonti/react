import React, { useEffect } from "react";
import { formatPrice } from "../functions";
import { BsFillLightningFill } from "react-icons/bs";
import { BsPlusLg } from "react-icons/bs";

const dolarPrice = 500;

const ProductItem = ({ product, cartItems, setCartItems }) => {
    const discount = Math.floor(product.id % 2);

    function randomNumberUpTo(max) {
        return Math.floor(Math.random() * max);
    }
    const textLimit = (text, limit) => {
        if (text.length > limit) {
            return text.slice(0, limit) + "...";
        } else {
            return text;
        }
    };

    return (
        <div className="bg-white flex flex-col w-[222px] rounded-md mb-6 shadow-md hover:shadow-xl relative">
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
                className="text-center text-2xl m-3 p-1 cursor-pointer absolute top-0 right-0 z-30 bg-red-300 shadow-md rounded-sm">
                <BsPlusLg size={15} />
            </button>
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
