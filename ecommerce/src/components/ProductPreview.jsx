import React from "react";

const ProductPreview = ({image}) => {
    return (
        <div className="w-[50px] h-[50px] flex justify-center items-center border-gray-300 rounded-md border-[1px] cursor-pointer">
            <img className="max-w-full max-h-full p-1" src={image} alt="producto preview" />
        </div>
    );
}

export default ProductPreview;