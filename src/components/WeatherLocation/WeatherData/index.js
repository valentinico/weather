import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';

import './styles.css';

const WeatherData = ({data}) => {
    
    const {temperature, main, weatherState, humidity, wind} = data;
    return(
        <div >
            <WeatherTemperature temperature={temperature} main={main} weatherState={weatherState}/>
            <WeatherExtraInfo humidity={humidity} wind={wind}/>
        </div>
    );
    

};

export default WeatherData;