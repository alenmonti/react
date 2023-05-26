import React from "react";


const Navbar = () =>  {
    return (
        <nav className="flex justify-between items-center p-4 w-full absolute">
            <h1 className="text-red-600 font-bold text-4xl cursor-pointer">NETFLIX</h1>
            <div>
                <button className="text-white pr-4">Sign in</button>
                <button className="bg-red-600 px-6 py-2 rounded cursor-pointer text-white">Sign up</button>
            </div>
        </nav>
    )
}

export default Navbar