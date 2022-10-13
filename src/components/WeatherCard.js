import React from 'react';
import WeatherIcon from "./WeatherIcon";


function WeatherCard({city, weatherType, currentTemp, highTemp, lowTemp, cloudiness, humidity, windSpeed}) {
    return (
        <div className="weatherCard">
            <div className="weatherCard--main">
                <h2 className="city">{city}</h2>
                <div className="weatherCard--temp">
                    <p>{currentTemp}&deg;</p>
                    <WeatherIcon className="weatherCard--icon" weatherType={weatherType}/>
                </div>
                <p>{weatherType}</p>
            </div>
            <div className="weatherCard--stats">
                <div className="weatherCard--wrapper">
                    <div>
                        <p> High: <strong>{highTemp}&deg;</strong>
                        </p>
                        <p> Low: <strong>{lowTemp}&deg;</strong>
                        </p>
                    </div>
                </div>
                <div>
                    <p>Cloudiness: {cloudiness}%</p>
                    <p>Humidity: {humidity}%</p>
                    <p>Wind Speed: {windSpeed}</p>
                </div>
            </div>
        </div>
    );
}

export default WeatherCard;