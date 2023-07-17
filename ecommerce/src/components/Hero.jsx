import React from "react";
import { useState } from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import ml1 from "../images/ml1.jpg";
import ml2 from "../images/ml2.jpg";
import ml3 from "../images/ml3.jpg";
const imageList = [ml1, ml2, ml3];
const carousel = document.getElementById("carousel");


const Hero = () => {
    const [current, setCurrent] = useState(2);
    const next = () => {
        console.log(current)
        setCurrent((curr) => (curr === imageList.length - 1 ? 0 : curr + 1));
    }
    const prev = () => {
        setCurrent((curr) => (curr === 0 ? imageList.length - 1 : curr - 1));
        console.log(current)
    }
    return (
        <div className="relative w-full">
            <div className="w-[85%] mx-auto overflow-hidden relative">
                <div id="carousel" className="flex flex-nowrap gap-20" style={{transform: `translateX(-${current * 1800})px`}}>
                    {imageList.map((image, index) => (
                        <img src={image} alt={`Hero ${index}`} key={index} className="w-[1600px] mx-auto"/>
                    ))}
                </div>
            </div>
            <button onClick={next} className="inline-block absolute right-0 top-[50%] rounded-full bg-white w-16 h-16">
                <FaChevronRight className="text-1xl text-blue-400 mx-auto"/>
            </button>
            <button onClick={prev} className="inline-block absolute left-0 top-[50%] rounded-full bg-white w-16 h-16">
                <FaChevronLeft className="text-1xl text-blue-400 mx-auto"/>
            </button>
        </div>
    );
};

export default Hero;
