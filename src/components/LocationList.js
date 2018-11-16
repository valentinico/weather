import React from 'react';
import WeatherLocation from './WeatherLocation';


const eachCity = (cities) =>(
    cities.map( city => <WeatherLocation key={city} city={city}/>)
)



const LocationList = ({cities}) => {

    return(
        <div>
            {eachCity(cities)}       
        </div>
    )
    }


export default LocationList;