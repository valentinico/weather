
import React, { Component } from 'react';
import { PropTypes } from 'prop-types'



class ForecastExtended extends Component {


    
    render(){
        const city = this.props.city;
        return(
            <div>
                {city === null ? <p>Seleccione una ciudad</p> :<h1>{city}</h1>}
            </div>
        )         
    };
    
};

ForecastExtended.propTypes = {
    city : PropTypes.string,
}


export default ForecastExtended;