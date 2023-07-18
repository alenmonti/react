import React from "react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ml1 from "../images/ml1.jpg";
import ml2 from "../images/ml2.jpg";
import ml3 from "../images/ml3.jpg";
const imageList = [ml1, ml2, ml3];
const tail = ["translate-x-0", "translate-x-[-1760px]", "translate-x-[-3520px]", "gap-[160px]"];
const gap = 160;

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent((current === imageList.length - 1 ? 0 : current + 1));
    };
    const prev = () => {
        setCurrent((current === 0 ? imageList.length - 1 : current - 1));
    };
    return (
        <div className="w-full relative">
            <div className="w-[1600px] mx-auto relative">
                <div id="carousel" className={`flex gap-[${gap}px] transition-all duration-500 ease-in-out transform ${`translate-x-[-${current * (1600 + gap)}px]`}`}>
                    {imageList.map((image, index) => (
                        <img src={image} alt={`Hero ${index}`} key={index} className="min-w-[1600px]" id="sliderImg" />
                    ))}
                </div>
            </div>
            <button onClick={next} className="inline-block absolute right-0 top-[50%] translate-y-[-50%] rounded-full bg-white w-16 h-16">
                <FaChevronRight className="text-1xl text-blue-400 mx-auto" />
            </button>
            <button onClick={prev} className="inline-block absolute left-0 top-[50%] translate-y-[-50%] rounded-full bg-white w-16 h-16">
                <FaChevronLeft className="text-1xl text-blue-400 mx-auto" />
            </button>
        </div>
    );
};

export default Slider;
