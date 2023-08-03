import React from "react";
import Slider from "../components/Slider";
import PayMethods from "../components/PayMethods";
import ProductsContainer from "../components/ProductsContainer";


const Home = ({productsFilter, products, cartItems, setCartItems}) => {
    return (
        <>
        <Slider />
        <PayMethods />
        {productsFilter ? null : <ProductsContainer title="Ofertas" products={products.slice(0, 5)} cartItems={cartItems} setCartItems={setCartItems} />} 
        {productsFilter ? null : <ProductsContainer title="También puede interesarte" products={products.slice(5, 10)} cartItems={cartItems} setCartItems={setCartItems} />}
        <ProductsContainer title="Productos" products={products} cartItems={cartItems} setCartItems={setCartItems} productsFilter={productsFilter} />
        </>
    );
};

export default Home;