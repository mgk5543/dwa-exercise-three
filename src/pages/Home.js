import React, { useEffect, useMemo, useState } from 'react';
import axios from 'axios';
import { useSearchParams } from "react-router-dom";
import { WEATHER_APP_API_KEY } from "../API_KEYS";
import WeatherCard from '../components/WeatherCard.js';
import Header from '../components/Header.js'
import '../App.css';
 
function Home() {
    const [weatherData, setWeatherData] = useState({});
    const [city, setCity] = useState("Orlando");
    const [searchParams] = useSearchParams();
    // Query OpenWeatherAPI for weather data
    // make request to OpenWeather based on a city

    //cities: Seoul, Chicago, Orlando, Bogota
    //use searchParams

    
    useEffect (() => {
        const cityToQuery = searchParams.get("city") || city;
        setCity(cityToQuery);
    axios
        .get(
            `https://api.openweathermap.org/data/2.5/weather?q=${cityToQuery}&appid=${WEATHER_APP_API_KEY}&units=imperial`
        )
        .then(function (response) {
            //console.log(searchParams);
            //console.log(response.data);
            setWeatherData(response.data);
        })
        .catch(function (error) {
            //console.warn(error);
            setWeatherData({});
        });
    }, []);

    const { weatherType, currentTemp, highTemp, lowTemp, cloudiness, humidity, windSpeed } = useMemo(() => {
        const weatherMain = weatherData.main || {};
        return {
            weatherType: weatherData.weather && weatherData.weather[0].main, //does same thing as const weatherMain
            currentTemp: weatherMain.feels_like,
            highTemp: weatherMain.temp_max,
            lowTemp: weatherMain.temp_min,
            cloudiness: weatherData.clouds && weatherData.clouds.all, //does same thing as const weatherMain
            humidity: weatherMain.humidity,
            windSpeed: weatherData.wind && weatherData.wind.speed,
        };
    }, [weatherData]);
    // Display this weather data in our app
    //console.log("state value",weatherData);


    return (
        <div className="homepage">
            <h1>Weather App</h1>
            <Header/>
            <WeatherCard 
            city={city} 
            weatherType={weatherType}
            currentTemp={currentTemp}
            highTemp={highTemp}
            lowTemp={lowTemp}
            cloudiness={cloudiness} 
            humidity={humidity}
            windSpeed={windSpeed}/>
        </div>
    ); 
}

export default Home;