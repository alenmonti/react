import React from "react";

const Footer = () => {
    return (
        <div className="w-full bg-white flex flex-col text-center">
            <div className="flex flex-col justify-center items-center relative max-w-[1200px] mx-auto lg:flex-row">
                <div className="flex flex-col max-w-[400px] p-[35px]">
                    <img className="w-[66px] mx-auto my-6" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/payment.svg" alt="creditCard" />
                    <p className="text-lg">Elegí cómo pagar</p>
                    <p className="text-xs text-gray-500 mt-2 mb-4">Podés pagar con tarjeta, débito, efectivo o hasta 12 cuotas sin tarjeta con Mercado Crédito.</p>
                    <a className="text-xs text-blue-600" href="https://www.mercadolibre.com.ar/pagar-online-con-mercadopago" target="_blank">Cómo pagar tus compras</a>
                </div>
                <div className="h-[65px] border-l-[1px] border-gray-300 hidden lg:inline-block"></div>
                <div className="flex flex-col max-w-[400px] p-[35px]">
                    <img className="mx-auto my-6" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/shipping.svg" alt="box" />
                    <p className="text-lg">Envío gratis desde $ 8.000</p>
                    <p className="text-xs text-gray-500 mt-2 mb-4">Al registrarte en Mercado Libre tenés envíos gratis en miles de productos</p>
                </div>
                <div className="h-[65px] border-l-[1px] border-gray-300 hidden lg:inline-block"></div>
                <div className="flex flex-col max-w-[400px] p-[35px]">
                    <img className="mx-auto my-6" src="https://http2.mlstatic.com/storage/homes-korriban/assets/images/ecosystem/protected.svg" alt="check" />
                    <p className="text-lg">Seguridad, de principio a fin</p>
                    <p className="text-xs text-gray-500 mt-2 mb-4">¿No te gusta? ¡Devolvelo! En Mercado Libre, no hay nada que no puedas hacer, porque estás siempre protegido.</p>
                    <a className="text-xs text-blue-600" href="https://www.mercadolibre.com.ar/seguridad" target="_blank">Cómo te protegemos</a>
                </div>
            </div>
            <div className="w-full flex justify-center">
                <div className="flex justify-between items-center gap-2 w-[1200px] text-center flex-col lg:flex-row">
                    <div className="flex flex-col rounded-md border-gray-300 w-full max-w-[47%] border-[1px] py-4 gap-1 justify-center min-h-[110px] h-min">
                        <p className="text-sm">Botón de arrepentimiento</p>
                        <a className="text-xs text-blue-600" href="https://www.mercadolibre.com.ar/seguridad" target="_blank">Cancelar una compra</a>
                        <a className="text-xs text-blue-600" href="https://www.mercadolibre.com.ar/seguridad" target="_blank">Cancelar una suscripción</a>
                        <a className="text-xs text-blue-600" href="https://www.mercadolibre.com.ar/seguridad" target="_blank">Cancelar un seguro o garantía</a>
                    </div>
                    <div className="flex flex-col rounded-md border-gray-300 border-[1px] w-full max-w-[47%] py-4 gap-1 justify-center min-h-[110px] h-min">
                        <p className="text-sm">Conocé las normas que aplican cuando comprás</p>
                        <a className="text-xs text-blue-600" href="https://www.mercadolibre.com.ar/seguridad" target="_blank">Ver contratos de adhesión - Ley N.º 24.240 de Defensa del Consumidor</a>
                    </div>
                </div>
            </div>
            <div className="w-full pt-4 border-t-[1px] border-gray-300 mt-20">
                <div className="max-w-[1200px] mx-auto">
                    <div className="flex justify-center items-center gap-4 flex-wrap text-xs cursor-pointer lg:justify-between">
                        <span>Trabajá con nosotros</span>
                        <span>Términos y condiciones</span>
                        <span>Cómo cuidamos tu privacidad</span>
                        <span>Accesibilidad</span>
                        <span>Información al usuario financiero</span>
                        <span>Ayuda</span>
                        <span>Defensa del Consumidor</span>
                        <span>Información sobre seguros</span>
                    </div>
                    <p className="text-xs text-gray-400 text-left">Copyright © 1999-2023 MercadoLibre S.R.L.</p>
                    <p className="text-xs text-gray-400 text-left">Avenida Caseros 3039, Piso 2, CP 1264, Parque Patricios, CABA</p>
                </div>
            </div>
        </div>
    );
};

export default Footer;