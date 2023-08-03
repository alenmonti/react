import React from "react";
import {IoSearchOutline} from "react-icons/io5";
import {CiLocationOn} from "react-icons/ci";
import {BsCart2} from "react-icons/bs";
import { Link } from "react-router-dom";

const Navbar = ({setProductsFilter, setOpenCart}) => {
    return (
        <div className="bg-[#fff159] relative z-40">
            <div className="w-full max-w-[1200px] mx-auto p-2  grid grid-cols-[max-content_minmax(350px,_1fr)_max-content] grid-rows-[1fr_max-content] gap-x-5 gap-y-4 justify-items-center items-end">
                <Link to="/">
                <img onClick={() => setProductsFilter("")} src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.13/mercadolibre/logo__large_plus.png" alt="Mercado Libre logo" className="w-[134px] h-[34px] cursor-pointer"/>
                </Link>  
                <div className="w-full max-w-[580px] relative">
                    <input type="text" name="buscar" placeholder="Buscar productos, marcas y más..." className="h-[40px] w-full rounded-sm pl-3 shadow-md text-sm placeholder-opacity-40 placeholder-gray-500 outline-none"/>
                    <button className="absolute right-0 top-0 h-[40px] w-[46px] flex items-center">
                        <span className="h-[60%] border-l-gray-200 border-l-[1px] "></span>
                        <IoSearchOutline className="text-gray-600 mx-auto text-base"/>
                    </button>
                </div>
                <img src="https://http2.mlstatic.com/D_NQ_957153-MLA69318147677_052023-OO.webp" alt="Nivel 6" className="w-[340px] h-[39px] cursor-pointer"/>
                <div className="flex cursor-pointer">
                    <CiLocationOn className="text-2xl text-gray-600"/>
                    <div className="flex flex-col">
                        <p className="text-[10px] opacity-60 leading-3">Enviar a</p>
                        <p className="text-xs leading-3">Capital Federal</p>
                    </div>
                </div>
                <ul className="flex gap-4 text-xs">
                    <li className="cursor-pointer opacity-80 hover:opacity-100"><a onClick={() => setProductsFilter("men's clothing")} href="#Productos">Ropa Hombre</a></li>
                    <li className="cursor-pointer opacity-80 hover:opacity-100"><a onClick={() => setProductsFilter("women's clothing")} href="#Productos">Ropa Mujer</a></li>
                    <li className="cursor-pointer opacity-80 hover:opacity-100"><a onClick={() => setProductsFilter("electronics")} href="#Productos">Electrodomesticos</a></li>
                    <li className="cursor-pointer opacity-80 hover:opacity-100"><a onClick={() => setProductsFilter("jewelery")} href="#Productos">Joyas</a></li>
                    <li className="cursor-pointer opacity-80 hover:opacity-100"><a onClick={() => setProductsFilter("")} href="#Productos">Todo</a></li>
                    <li className="cursor-pointer opacity-80 hover:opacity-100"><a href="https://www.mercadolibre.com.ar/ayuda" target="_blank">Ayuda</a></li>
                </ul>
                <div className="flex gap-5">
                <nav className="flex gap-3 text-xs">
                    <div className="cursor-pointer">Creá tu cuenta</div>
                    <div className="cursor-pointer">Ingresá</div>
                    <div className="cursor-pointer">Mis compras</div>
                </nav>
                <BsCart2 onClick={(e) => setOpenCart(prevState => !prevState)} className="text-2xl text-[#333] self-start cursor-pointer mt-[-8px]"/>
                </div>
            </div>
        </div>
    );
}

export default Navbar;