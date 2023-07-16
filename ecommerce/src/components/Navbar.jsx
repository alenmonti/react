import React from "react";
import {IoSearchOutline} from "react-icons/io5";
import {CiLocationOn} from "react-icons/ci";

const Navbar = () => {
    return (
        <div className="bg-[#fff159]">
            <div className="w-full max-w-[1200px] mx-auto p-2 z-40 grid grid-cols-[max-content_minmax(350px,_1fr)_max-content] grid-rows-[1fr_max-content] gap-x-5 gap-y-2 justify-items-center items-end">     
                <img src="https://http2.mlstatic.com/frontend-assets/ml-web-navigation/ui-navigation/5.22.13/mercadolibre/logo__large_plus.png" alt="Mercado Libre logo" className="w-[134px] h-[34px]"/>
                <div className="w-full max-w-[580px] relative">
                    <input type="text" name="buscar" placeholder="Buscar productos, marcas y más..." className="h-[40px] w-full rounded-sm pl-3 shadow-sm text-sm text-opacity-50"/>
                    <button className="absolute right-0 top-0 h-[40px] w-[46px] border-l-[1px] border-gray-300">
                        <IoSearchOutline className="text-gray-600 mx-auto text-base"/>
                    </button>
                </div>
                <img src="https://http2.mlstatic.com/D_NQ_957153-MLA69318147677_052023-OO.webp" alt="Nivel 6" className="w-[340px] h-[39px]"/>
                <div className="flex">
                    <CiLocationOn className="text-2xl text-gray-600"/>
                    <div className="flex flex-col">
                        <p className="text-xs opacity-50 leading-3">Enviar a</p>
                        <p className="text-sm leading-3">Capital Federal</p>
                    </div>
                </div>
                <ul className="flex gap-4 text-sm opacity-80">
                    <li>Ofertas</li>
                    <li>Historial</li>
                    <li>Supermercado</li>
                    <li>Moda</li>
                    <li>Vender</li>
                    <li>Ayuda</li>
                </ul>
            </div>
        </div>
    );
}

export default Navbar;