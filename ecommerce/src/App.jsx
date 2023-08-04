import React, {useState, useEffect} from "react";
import NavBar from "./components/NavBar";
import SideCart from "./components/SideCart";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import ProductPage from "./pages/ProductPage";

const App = () => {
    const [openCart, setOpenCart] = useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [productsFilter, setProductsFilter] = useState("");
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const fetchProducts = async () => {
            const response = await fetch("https://fakestoreapi.com/products");
            const data = await response.json();
            setProducts(data.sort(() => Math.random() - 0.5));
        }
        fetchProducts();
    }, []);
    const HomeProps = {productsFilter, products, cartItems, setCartItems};
    return (
        <Router>
            <NavBar setProductsFilter={setProductsFilter} setOpenCart={setOpenCart} cartItems={cartItems} />
            <Routes>
                <Route path="/" element={<Home {...HomeProps} />} />
                <Route path="/product/:id" element={<ProductPage cartItems={cartItems} setCartItems={setCartItems}/>} />
            </Routes>
            <SideCart openCart={openCart} setOpenCart={setOpenCart} cartItems={cartItems} setCartItems={setCartItems}/>
            <Footer />
        </Router>
    );
};

export default App;
