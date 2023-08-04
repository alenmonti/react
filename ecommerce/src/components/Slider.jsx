import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ml1 from "../images/ml1.jpg";
import ml2 from "../images/ml2.jpg";
import ml3 from "../images/ml3.jpg";
import ml4 from "../images/ml4.jpg";
import ml5 from "../images/ml5.jpg";
const sliderList = [ml1, ml2, ml3, ml4, ml5];
const gap = 160;
// tailwind clases
//translate-x-0 translate-x-[-1760px] translate-x-[-3520px] translate-x-[-5280px] translate-x-[-7040px] 
//translate-x-[-960px] translate-x-[-1920px] translate-x-[-2880px] translate-x-[-3840px]
//gap-[160px] min-w-[800px] w-[800px] w-[1600px] min-w-[1600px]

const Slider = () => {
    const [x, setX] = useState(0);
    const [imgSize, setImgSize] = useState(800);
    const [current, setCurrent] = useState(0);
    useEffect(() => {
        window.addEventListener("resize", () => {    
            window.innerWidth > 1200 ? setImgSize(1600) : setImgSize(800);
        });
        window.innerWidth > 1200 && setImgSize(1600);
    }, []);
    const next = () => setCurrent(current === sliderList.length - 1 ? 0 : current + 1);
    const prev = () => setCurrent(current === 0 ? sliderList.length - 1 : current - 1);
    return (
        <div onDragStart={(e)=> {
            setX(e.clientX);
        }} onDragEnd={(e)=> {
            if(e.clientX - x > 0) {
                prev();
            } else {
                next();
            }
        }} className="w-full relative overflow-x-hidden flex justify-center">
            <div className={`w-[${imgSize}px] mx-auto relative`}>
                <div className={`flex gap-[${gap}px] transition-all duration-500 ease-in-out transform ${`translate-x-[-${current * (imgSize + gap)}px]`}`}>
                    {sliderList.map((image, index) => (
                        <img src={image} alt={`Hero ${index}`} key={index} className={`min-w-[${imgSize}px] select-none`} />
                    ))}
                </div>
            </div>
            {window.innerWidth > 1200 ? 
                <>
                <button onClick={next} className="inline-block absolute right-0 top-[50%] translate-y-[-50%] rounded-full bg-white w-16 h-16">
                    <FaChevronRight className="text-1xl text-blue-400 mx-auto" />
                </button>
                <button onClick={prev} className="inline-block absolute left-0 top-[50%] translate-y-[-50%] rounded-full bg-white w-16 h-16">
                    <FaChevronLeft className="text-1xl text-blue-400 mx-auto" />
                </button>
                </>
                : null}

        </div>
    );
};

export default Slider;
