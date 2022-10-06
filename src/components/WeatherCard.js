import React from 'react';

function WeatherCard({city, weatherType, currentTemp, highTemp, lowTemp, cloudiness, humidity, windSpeed}) {
    return (
        <div className="weatherCard">
            <h2>{city}</h2>
            <div className="weatherCard--stats">
                <div>
                    <div>
                        <p>{weatherType}</p>
                        <p>Currently {currentTemp}</p>
                    </div>
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