const SearchCity = async (city) => {
    const apiKey = '9aec91d3cfff4d449c9150256232301';
    return fetch("http://api.weatherapi.com/v1/forecast.json?key=" + apiKey + "&q=" + city + "&days=5&aqi=no&alerts=no")
    .then(response => response.json())
    .catch(error => {
        alert('Något gick fel:' + error);
    })
    // var requestOptions = {
    //     method: 'GET',
    //     redirect: 'follow'
    //   };
    //  const apiKey = '62ba4773df2e2c4ad8dbb702686f1aac';
    //  return await fetch("https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey+"&units=metric", requestOptions)
    //  .then(response => response.json())
    //  .catch(error => {
    //     alert("Något gick sönder:" + error)
    //  })
};

export default SearchCity;