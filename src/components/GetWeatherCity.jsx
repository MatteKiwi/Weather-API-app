import { useEffect, useState, useRef } from "react";
import styles from  "../styles/styles.module.css";
import SearchCity from "../services/weatherAPI";
import DisplayWeather from "./DisplayWeather";
import CurrentWeather from "./CurrentWeather";

const GetWeatherCity = () => {

    const inputRef = useRef();
    const [weather, setWeather] = useState({});
    const [location, setLocation] = useState('Stockholm');
    const [showDetails, setShowDetails] = useState(false);

    const searchEvent = async () => {
        let city = inputRef.current.value;
        setLocation(city)
        await SearchCity(location).then(data => {
            setWeather(data)
            console.log(data)
        })  
    }

    useEffect(() => {
        SearchCity(location).then(data => {
            setWeather(data);
            console.log(data);
        })
    },[location])
        
    return(
        <>
        <div className={styles.searchBar}>
        <input type="text" ref={inputRef} placeholder="Sök på stad"></input>
        <button onClick={searchEvent}>Sök</button>  
        </div>
        <div className={styles.result}>
        <CurrentWeather data={weather}/>
        </div>
        <div className={styles.showDetails}>
        <button onClick={() => setShowDetails(!showDetails)}>{showDetails ? "Hide details" : "Show details"}</button>
        {showDetails ? <DisplayWeather data={weather} /> : null}
        
        </div>
        </>
    );
};

export default GetWeatherCity;