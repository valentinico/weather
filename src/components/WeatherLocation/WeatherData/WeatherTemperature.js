import React from 'react';
//import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';


// const icons = {
//     [CLOUD]: "cloud",
//     [SUN]: "day-sunny",
//     [RAIN]: "rain",
//     [SNOW]: "snow",
//     [THUNDER]: "thunderstorm",
//     [DRIZZLE]: "showers",
// };

// const getWeatherIcon = weatherState =>{
//     const icon = icons[weatherState];
//     console.log(weatherState);
//     if (icon)
//         return (
//             <div>
//                 <img src={CLOUD} alt=""/>
//                 <WeatherIcons name={icon} ></WeatherIcons>
//             </div>
//             );
//     else
//         return <WeatherIcons name={"day-sunny"} ></WeatherIcons>;
    
// }


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