import React from "react";
import img from "../images/hero.png"

const Hero = () => {
    return (<div className="bg-gradient-to-br to-[#fcdcb3]  from-[#ffc0bc] h-[80vh] v-[100vw]">
                <div className="flex flex-row justify-evenly items-center h-full w-[80vw] mx-auto relative">
                    <div>
                        <h1 className="text-6xl text-gray-900 font-normal text-center uppercase">One Online Shop</h1>
                        <p className="text-2xl text-gray-900 font-light text-center uppercase">Everything you need</p>
                    </div>
                    <img src={img} alt="shop" className=""/>
                </div>
            </div>);
};

export default Hero;
