import React from "react";



const PayMethod = ({img, type, link, center}) => {
    return (
        <div className={`flex justify-center items-center gap-4 ${center ? "self-center" : ""}`}>
            <img src={img} alt="card" className="w-12 cursor-pointer"/>
            <div>
                <p className="text-sm">{type}</p>
                <p className="text-xs text-blue-500 hover:text-blue-700 cursor-pointer">{link}</p>
            </div>
        </div>
    )
};

export default PayMethod;