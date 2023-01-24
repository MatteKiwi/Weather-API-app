import styles from '../styles/styles.module.css';

const CurrentWeather = ({data}) => {

    return(
    <>
    <div className={styles.forecastCard}>
        <h3>{data.location?.name}</h3>
        <p>{data.current?.temp_c}℃</p>
        <p>🗓️{data.location?.localtime} </p>
        <img src={data.current?.condition.icon}></img>
    </div>
    </>
    );
};

export default CurrentWeather;