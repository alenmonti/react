import React from "react";
import { useState, useEffect } from "react";
import { formatPrice } from "../functions";
import { textLimit } from "../functions";
import { IoClose } from "react-icons/io5";
import { BsPlus, BsDash } from "react-icons/bs";
import { HiArrowRight } from "react-icons/hi";
// transalte-x-0 translate-x-full

const SideCart = ({ openCart, setOpenCart, cartItems, setCartItems }) => {
    return (
        <aside
            className={`fixed right-0 top-0 w-full h-full p-8 lg:w-[30%] bg-white z-50 transform ${
                openCart ? "translate-x-0" : "translate-x-full"
            } shadow-xl transition-transform duration-500 ease-in-out`}>
            <div className="w-full h-[80px] flex justify-between items-center border-b-[1px] border-gray-300">
                <h2 className="text-lg font-semibold">{`Cart (${cartItems.length})`}</h2>
                <button onClick={() => setOpenCart(false)}>
                    <HiArrowRight size={25} className="mx-auto" />
                </button>
            </div>
            <div className="w-full h-[calc(100%-80px)] flex flex-col gap-8 overflow-y-scroll scroll">
                {cartItems.map((product, index) => (
                    <div key={index} className="w-full h-[110px] flex justify-between items-center flex-shrink-0">
                        <div className="w-[100px]">
                            <img src={product.image} alt="productImg" className="max-h-[100px] max-w-full mx-auto" />
                        </div>
                        <div className="h-[60%] flex flex-col justify-between w-2/3">
                            <div className="flex justify-between w-full items-start">
                                <h3 className="text-xs font-medium uppercase max-w-[85%]">{textLimit(product.title, 40)}</h3>
                                <IoClose onClick={() => setCartItems((prev) => [...prev].filter((item) => item.id !== product.id))} size={15} className="text-gray-500 cursor-pointer" />
                            </div>
                            <div className="flex justify-between w-full text-xs font-semibold items-center">
                                <div className="flex justify-between w-16 border-[1px] border-gray-300 px-[6px] py-1 text-sm font-normal rounded-sm">
                                    <button onClick={() => {
                                        if (product.amount - 1 <= 0) {
                                            setCartItems((prev) => [...prev].filter((item) => item.id !== product.id));
                                        } else {
                                            setCartItems((prev) => {
                                                return prev.map((item) => {
                                                    if (item.id === product.id) return { ...item, amount: item.amount - 1};
                                                    else return item;
                                                });
                                            });
                                        }}}
                                    className="w-4">
                                        <BsDash className="mx-auto" />
                                    </button>
                                    <p>{product.amount}</p>
                                    <button onClick={() => {
                                        setCartItems((prev) => {
                                            return prev.map((item) => {
                                                if (item.id === product.id) return { ...item, amount: item.amount + 1};
                                                else return item;
                                            });
                                        });
                                    }}
                                    className="w-4">
                                        <BsPlus className="mx-auto" />
                                    </button>
                                </div>
                                <p className="text-gray-500">$ {formatPrice(product.price)}</p>
                                <p>$ {formatPrice(product.price * product.amount)}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </aside>
    );
};

export default SideCart;
