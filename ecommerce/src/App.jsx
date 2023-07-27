import React, {useState} from "react";
import Slider from "./components/Slider";
import NavBar from "./components/NavBar";
import PayMethods from "./components/PayMethods";
import ProductsContainer from "./components/ProductsContainer";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

const App = () => {
    const [openCart, setOpenCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    return (
        <>
            <NavBar setOpenCart={setOpenCart} />
            <Slider />
            <PayMethods />
            <ProductsContainer title="Ofertas" limit={5} cartItems={cartItems} setCartItems={setCartItems} />
            <ProductsContainer title="También puede interesarte" limit={5} cartItems={cartItems} setCartItems={setCartItems} />
            <ProductsContainer title="Productos" cartItems={cartItems} setCartItems={setCartItems} />
            <SideCart openCart={openCart} setOpenCart={setOpenCart} cartItems={cartItems} setCartItems={setCartItems}/>
            <Footer />
        </>
    );
};

export default App;
