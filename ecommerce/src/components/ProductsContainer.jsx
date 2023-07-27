import React, { useEffect, useState } from "react";
import ProductItem from "./ProductItem";

const ProductsContainer = ({limit=20, title, cartItems, setCartItems}) => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.sort(() => Math.random() - 0.5).slice(0,limit));
            });
    }, []);

    return (
        <div className="max-w-[1400px] mx-auto px-[100px] my-8">
            <h1 className="text-2xl font-semibold text-gray-700 my-4">{title}</h1>
            <div className="flex flex-wrap justify-between gap-4 ">
                {products.map((product, index) => (
                    <ProductItem key={index} product={{...product, amount:0}} cartItems={cartItems} setCartItems={setCartItems} />
                ))}
            </div>
        </div>
    );
};

export default ProductsContainer;
