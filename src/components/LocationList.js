import React from 'react';
import WeatherLocation from './WeatherLocation';

const LocationList = () => (
        <div>
            <WeatherLocation city="Nuuk, GL"></WeatherLocation>
            <WeatherLocation city="Buenos Aires, AR"></WeatherLocation>
            <WeatherLocation city="Mollendo, PE"></WeatherLocation>
            <WeatherLocation city="San Miguel de Tucuman, AR"></WeatherLocation>
        </div>
    )


export default LocationList;