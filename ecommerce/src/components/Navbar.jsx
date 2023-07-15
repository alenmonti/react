import React from "react";
import {FaCrown} from "react-icons/fa";
import {BsBag} from "react-icons/bs";

const Navbar = () => {
    return (
        <div className="fixed w-full mt-4">
            <div className="flex justify-between w-[80vw] mx-auto relative">
                <FaCrown className="text-2xl text-gray-950 opacity-80"/>
                <BsBag className="text-2xl text-gray-900 opacity-80"/>
            </div>
        </div>
    );
}

export default Navbar;