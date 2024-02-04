import { useState, useEffect } from "react";

export default function Weather() {
    const [weather, setWeather] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    console.log(
        weather.timelines.daily[0].values.temperatureAvg,
        weather.timelines.daily[0].values.pressureSurfaceLevelAvg,
        weather.timelines.daily[0].values.windSpeedAvg,
        weather.timelines.daily[0].values.humidityAvg,
    );

    useEffect(() => {
        setLoading(true);
        fetch(
            'https://api.tomorrow.io/v4/weather/forecast?location=42.3478,-71.0466&apikey=KtZfeTeZHwjo6Q2KWdBUqkcrEdr8xwm4')
            .then((res) => res.json()) 
            .then((data) => setWeather(data)) 
            .catch((err) => setError(err)). 
            finally(() => setLoading(false));
    }, [])

    return (
        <div>
            <h1>Weather</h1>
            {loading ? (<p>  loading.....</p>) : weather ? <div>
            <p>Temperature {weather.timelines.daily[0].values.temperatureAvg} </p>,
            <p>Pressure {weather.timelines.daily[0].values.pressureSurfaceLevelAvg} </p>,
            <p>Wind Speed {weather.timelines.daily[0].values.windSpeedAvg} </p>,
            <p>Humidity {weather.timelines.daily[0].values.humidityAvg} </p>,
         </div> : <p>{error}</p>}
        </div>

    );
}
