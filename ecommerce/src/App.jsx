import React from "react";
import Slider from "./components/Slider";
import Navbar from "./components/Navbar";
import PayMethods from "./components/PayMethods";

const App = () => {
    return (
        <>
            <Navbar />
            <Slider />
            <PayMethods />
        </>
    );
};

export default App;
