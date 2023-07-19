import React from "react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ml1 from "../images/ml1.jpg";
import ml2 from "../images/ml2.jpg";
import ml3 from "../images/ml3.jpg";
import ml4 from "../images/ml4.jpg";
import ml5 from "../images/ml5.jpg";
const sliderList = [ml1, ml2, ml3, ml4, ml5];
const gap = 160;
//translate-x-0 translate-x-[-1760px] translate-x-[-3520px] translate-x-[-5280px] translate-x-[-7040px] gap-[160px] tailwind clases

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const next = () => {
        setCurrent(current === sliderList.length - 1 ? 0 : current + 1);
    };
    const prev = () => {
        setCurrent(current === 0 ? sliderList.length - 1 : current - 1);
    };
    return (
        <div className="w-full relative overflow-x-hidden">
            <div className="w-[1600px] mx-auto relative">
                <div className={`flex gap-[${gap}px] transition-all duration-500 ease-in-out transform ${`translate-x-[-${current * (1600 + gap)}px]`}`}>
                    {sliderList.map((image, index) => (
                        <img src={image} alt={`Hero ${index}`} key={index} className="min-w-[1600px]" />
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
