import React, { useState } from "react";
import { CiSearch, CiLocationOn } from "react-icons/ci";
import axios from "axios";


function App() {
    const [location, setLocation] = useState("");
    const [data, setData] = useState({});

    const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1f934cc586cb5909bab75c467f1a420d&units=metric`;

    const searchLocation = () => {
        axios.get(URL_API).then((response) => {
            setData(response.data)
            console.log(data)
        });
    }

    return (
        <div className="app">
            <div className="search">
                <CiLocationOn className="location" />
                <input
                    type="text"
                    placeholder="Enter a city"
                    value={location}
                    onChange={(e) => {setLocation(e.target.value)}}
                />
                <CiSearch 
                    className="search-button"
                    onClick={searchLocation}
                />
            </div>
            <main>
                <div className="general">
                    <h3 className="description">Day</h3>
                    <p className="ubication">{data ? data.name : "Buenos Aires"}</p>
                    <h1 className="temp">25°</h1>
                    <img src="assets/clear.png" alt="img" />
                </div>
                <div className="stats">
                    <div className="humidity">
                        <h4>30<span>%</span></h4>
                        <p className="small-text">Humidity</p>
                    </div>
                    <div className="wind">
                        <h4>5.66 <span>kmph</span></h4>
                        <p className="small-text">Wind Speed</p>
                    </div>
                </div>
            </main>
        </div>
    );
}

export default App;
