import React, { useState } from "react";

import SearchBar from "./SearchBar.jsx"
import DataDisplay from "./DataDisplay.jsx"



function App() {
    const [location, setLocation] = useState("");
    const [data, setData] = useState({});

    return (
        <div className="app">
            <SearchBar location={location} setLocation={setLocation} setData={setData} />
            {data.main ?
                <DataDisplay data={data} />
                : <h2 className="title-font">EasyWeather</h2>}
        </div>
    );
}

export default App;
