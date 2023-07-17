import React from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa";
import ml1 from "../images/ml1.jpg";
import ml2 from "../images/ml2.jpg";
import ml3 from "../images/ml3.jpg";
const imageList = [ml1, ml2, ml3];
const carrousel = document.querySelector(".scroll");


const Hero = () => {
    return (
        <div className="relative w-full">
            <button className="inline-block absolute left-0 top-[160px] rounded-full bg-white w-16 h-16">
                <FaChevronLeft className="text-1xl text-blue-400 mx-auto"/>
            </button>
            <div className="w-[85%] mx-auto ">
                <div id="carrousel" className="flex flex-nowrap gap-10 scroll-m-6 overflow-x-scroll scroll">
                    {imageList.map((image, index) => (
                        <img src={image} alt={`Hero ${index}`} key={index} className="w-[1600px] mx-auto"/>
                    ))}
                </div>
            </div>
            <button onClick={(e) => {carrousel.innerHTML = `scrollLeft: ${carrousel.scrollLeft}`}} className="inline-block absolute right-0 top-[160px] rounded-full bg-white w-16 h-16">
                <FaChevronRight className="text-1xl text-blue-400 mx-auto"/>
            </button>
        </div>
    );
};

export default Hero;
