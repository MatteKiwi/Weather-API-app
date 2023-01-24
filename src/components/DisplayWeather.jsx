import styles from '../styles/styles.module.css';

const DisplayWeather = ({data}) => {

    let list = data.forecast?.forecastday.map(day => {
        return(
        <div className={styles.forecastCard}>
            <h3>{data.location?.name}</h3>
            <p>{day.current?.temp_c}</p>
            <p>{day?.date}</p>
            <img src={day.day.condition?.icon}></img>
            <p>Max: {day.day?.maxtemp_c}℃</p>
            <p>Min: {day.day?.mintemp_c}℃</p>          
        </div>
        );     
    });

    return(<>{list}</>);
};

export default DisplayWeather;