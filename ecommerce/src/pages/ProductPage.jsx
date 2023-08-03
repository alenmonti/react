import React from "react";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";


const ProductPage = ({products}) => {
    const { id } = useParams();
    const [product, setProduct] = useState({});
    useEffect(() => {
        const fetchProduct = async () => {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProduct(data);
        }
        fetchProduct();
    }, [id]);

    return (
        <>
        <h1>{product.title}</h1>
        </>
    );
};

export default ProductPage;