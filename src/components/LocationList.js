import React from 'react';
import PropTypes from 'prop-types';
import WeatherLocation from './WeatherLocation';


const LocationList = ({cities, onSelectedLocation}) => {

    const handleWheatherLocationClick = city =>{
        //console.log(`handleWheatherLocationClick es ${handleWheatherLocationClick}`);
        onSelectedLocation(city);
    }

    const eachCity = (cities) =>(
        cities.map( city => <WeatherLocation 
            key={city} 
            city={city} 
            onWheatherLocationClick= {()=> handleWheatherLocationClick(city)}
            />)
    )

    return(
        <div>
            {eachCity(cities)}       
        </div>
    )
    }

LocationList.propTypes = {
    cities: PropTypes.array.isRequired,
    onSelectedLocation: PropTypes.func,
}


export default LocationList;