import React from "react";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import PayMethods from "./components/PayMethods";
import ProductsContainer from "./components/ProductsContainer";

const App = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <PayMethods />
            <ProductsContainer title="Ofertas" limit={5} />
            <ProductsContainer title="También puede interesarte" limit={5} />
            <ProductsContainer title="Productos" />
        </>
    );
};

export default App;
