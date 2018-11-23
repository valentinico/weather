import {
    THUNDER, 
    DRIZZLE,
    RAIN,
    SNOW,
    CLOUD,
    SUN, 
} from './../constants/weathers';

const getWeatherState = (weather_data) => {
    const id = weather_data.weather[0].id;
    if ( id<300 ) {
        return THUNDER;
    }else if( id<400 ){
        return DRIZZLE;
    }else if( id<600 ){
        return RAIN;
    }else if( id < 700 ){
        return SNOW;
    }else if( id === 800 ){
        return SUN;
    }else if( id < 900 ){
        return CLOUD; 
    }

    
    
};



const transformWeather = (weather_data) => {
    const data = {
        city : weather_data.name,
        temperature: weather_data.main.temp,
        humidity: weather_data.main.humidity,
        main: weather_data.weather[0].main,
        wind:`${ Math.trunc(weather_data.wind.speed*3.6)} Km/h`,
        weatherState: getWeatherState(weather_data),
    }        
    return data;
};


export default transformWeather