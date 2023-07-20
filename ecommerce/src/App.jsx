import React, {useState} from "react";
import Slider from "./components/Slider";
import NavBar from "./components/NavBar";
import PayMethods from "./components/PayMethods";
import ProductsContainer from "./components/ProductsContainer";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

const App = () => {
    const [openCart, setOpenCart] = useState(false);
    return (
        <>
            <NavBar setOpenCart={setOpenCart} />
            <Slider />
            <PayMethods />
            <ProductsContainer title="Ofertas" limit={5} />
            <ProductsContainer title="También puede interesarte" limit={5} />
            <ProductsContainer title="Productos" />
            <SideCart openCart={openCart} setOpenCart={setOpenCart}/>
            <Footer />
        </>
    );
};

export default App;
