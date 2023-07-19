import React from "react";
import { BsFillLightningFill } from "react-icons/bs";
const dolarPrice = 500;

const ProductItem = ({ price = 999.99, description = "not found", img }) => {
    function getRandomInt(max) {
        return Math.floor(Math.random() * max);
    }
    const textLimit = (text, limit) => {
        if (text.length > limit) {
            return text.slice(0, limit) + "...";
        } else {
            return text;
        }
    };

    return (
        <div className="bg-white flex flex-col w-[222px] rounded-md mb-6 shadow-md hover:shadow-xl cursor-pointer">
            <div className="h-[222px] overflow-hidden flex justify-center items-center">
                <img src={img} alt="product item" className="rounded-t-md max-h-[90%] max-w-[90%]" />
            </div>
            <div className="w-full border-t-[1px] border-gray-300"></div>
            <div className="flex flex-col h-[150px] p-4 gap-1">
                <div>
                    <span className="font-medium text-xl text-gray-700">$ {(price * dolarPrice).toLocaleString("es", { maximumFractionDigits: 2 })}</span>
                    {getRandomInt(3) === 1 ? null : <span className="text-green-600 text-xs"> 30% OFF</span>}
                </div>
                <p className="text-xs text-green-600">
                    Mismo precio en 3 cuotas de <br></br>$ {((price * dolarPrice) / 3).toLocaleString("es", { maximumFractionDigits: 2 })}
                </p>
                <p className="text-xs text-green-600 font-medium">
                    Envío gratis{" "}
                    {getRandomInt(3) === 1 ? null : (
                        <span className="text-green-600 font-semibold">
                            <BsFillLightningFill className="inline ml-1" />
                            FULL
                        </span>
                    )}
                </p>
                <p className="text-xs">{textLimit(description, 45)}</p>
            </div>
        </div>
    );
};

export default ProductItem;
