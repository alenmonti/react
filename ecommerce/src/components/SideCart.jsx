import React from "react";
import {useState} from "react"
// transalte-x-0 translate-x-full

const CartSideBar = ({openCart, setOpenCart}) => {
    
    return (
        <aside className={`fixed right-0 top-24 w-full h-full lg:w-[30%] bg-white z-40 transform ${openCart ? "translate-x-0" : "translate-x-full"} shadow-xl transition-transform duration-500 ease-in-out`}>
            <button onClick={(e) => setOpenCart(false)} className="absolute top-0 right-0 m-2 rounded-full bg-red-300 w-8 h-8 text-red-500">X</button>
        </aside>
    );
};

export default CartSideBar;