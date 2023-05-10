import { CiSearch, CiLocationOn } from "react-icons/ci";
import axios from "axios";


const SearchBar = ({location, setLocation, setData}) => {

    const URL_API = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=1f934cc586cb5909bab75c467f1a420d&units=metric`;

    const searchLocation = () => {
            axios.get(URL_API).then((response) => {
                setData(response.data);
                setLocation("");
            }).catch((e) => {
                alert("Invalid Location")
            });
    }

    return (
        <div className="search new">
            <CiLocationOn className="location" />
            <input
                type="text"
                placeholder="Enter a city"
                value={location}
                onChange={(e) => { setLocation(e.target.value) }}
                onKeyDown={(e) => { e.key === "Enter" && searchLocation() }}
            />
            <CiSearch
                className="search-button"
                onClick={searchLocation}
            />
        </div>
    )
}

export default SearchBar;

