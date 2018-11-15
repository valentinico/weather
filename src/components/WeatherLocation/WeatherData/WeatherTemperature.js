import React from 'react';

import PropTypes from 'prop-types';



const getWeatherIcon = weatherState =>{   
        return <img src={weatherState} alt=""/>
}




const WeatherTemperature = ({temperature, main, weatherState}) => (
    <div className="wheaterTemperature"> 
        <span>{`${temperature}°`}</span>
        <div className="container-temp">
            {getWeatherIcon(weatherState)}
            <div className="small-title">{`${main}`}</div>
        </div>    
       
    </div>
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number.isRequired,
    weatherState: PropTypes.string.isRequired,
};


export default WeatherTemperature;