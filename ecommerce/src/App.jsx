import React, {useState, useEffect} from "react";
import Slider from "./components/Slider";
import NavBar from "./components/NavBar";
import PayMethods from "./components/PayMethods";
import ProductsContainer from "./components/ProductsContainer";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";

const App = () => {
    const [openCart, setOpenCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [productsFilter, setProductsFilter] = useState("");
    const [products, setProducts] = useState([]);
    useEffect(() => {
        fetch("https://fakestoreapi.com/products/")
            .then((response) => response.json())
            .then((data) => {
                setProducts(data.sort(() => Math.random() - 0.5));
            });
    }, []);
    return (
        <>
            <NavBar setProductsFilter={setProductsFilter} setOpenCart={setOpenCart} />
            <Slider />
            <PayMethods />
            {productsFilter ? null : <ProductsContainer title="Ofertas" products={products.slice(0, 5)} cartItems={cartItems} setCartItems={setCartItems} />} 
            {productsFilter ? null : <ProductsContainer title="También puede interesarte" products={products.slice(5, 10)} cartItems={cartItems} setCartItems={setCartItems} />}
            <ProductsContainer title="Productos" products={products} cartItems={cartItems} setCartItems={setCartItems} productsFilter={productsFilter} />
            <SideCart openCart={openCart} setOpenCart={setOpenCart} cartItems={cartItems} setCartItems={setCartItems}/>
            <Footer />
        </>
    );
};

export default App;
