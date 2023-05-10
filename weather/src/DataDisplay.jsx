

const DataDisplay = ({data}) => {
    return (
        <main className="new">
            <section className="general">
                <h3 className="description">{data.weather ? data.weather[0].description : null}</h3>
                <p className="ubication translucid">{data.name}</p>
            </section>
            <section className="graphic">
                <img src={`assets/${(data.weather ? data.weather[0].main : null)}.png`} alt="img" />
            </section>
            <section className="temp-data">
            <h1 className="temp">{data.main ? data.main.temp.toFixed() : null}°</h1>
            </section>
            <section className="stats">
                <div className="humidity">
                    <h2>{data.main ? data.main.humidity : null}<span className="small">%</span></h2>
                    <p className="small translucid">Humidity</p>
                </div>
                <img src="/assets/humidity.png" alt="humidity" />
                <div className="wind">
                    <h2>{data.wind ? data.wind.speed : null} <span className="small">km/h</span></h2>
                    <p className="small translucid">Wind Speed</p>
                </div>
                <img src="/assets/wind.png" alt="wind" />
            </section>
        </main>  
    )
};

export default DataDisplay;