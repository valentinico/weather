import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import transformWeather from './../../services/transformWeather';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity';

import Location from './Location';
import WeatherData from './WeatherData';






class WeatherLocation extends Component {

    constructor(props){
        super(props);
        const city = props.city;
        this.state = {
            city: city,
            data: null,
        };
        
    }

    componentDidMount() {this.upateWeather();}
    
    componentDidUpdate(prevProps, prevState) {}

    
    
    upateWeather = ()=>{
        //RESOLVE CITY
        const api_weather = getUrlWeatherByCity(this.state.city);

        //RESOLVE WEATHER DATA
        fetch(api_weather).then( resolve => {
            return resolve.json();
        }).then( data =>{
            const  newWeather = transformWeather(data);
            this.setState({
                data: newWeather,
            });
        })
        
    };    
    
    render(){
        return(
        <div className="container">
            <Location city={this.state.city}></Location>
            {this.state.data ? <WeatherData data={this.state.data}></WeatherData> : "Cargando.." }
        </div>
        );
    }
};

WeatherLocation.propTypes ={
   city: PropTypes.string.isRequired,
}

export default WeatherLocation;