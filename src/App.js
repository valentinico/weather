import React, { Component } from 'react';

import LocationList from './components/LocationList';
import ForecastExtended from './components/ForecastExtended';

import './App.css';

const cities = [
  'Nuuk, GL',
  'Buenos Aires, AR',
  'Mollendo, PE',
  'San Miguel de Tucuman, AR',
];



class App extends Component {
  
  constructor(props){
    super(props);
    this.state = {
      city: null,
      datadetail: null,
    }
    console.log(`this.state.city es: ${this.state.city}`);

  }


  handleSelectedLocation = city => {
    this.setState({
      city : city
    })
    console.log(`ahora vale: ${city}`);
  }

  render() {
    return (
      <div className="App">
        <LocationList cities={cities} onSelectedLocation={this.handleSelectedLocation}></LocationList>
        <ForecastExtended city={this.state.city} datadetail={this.state.datadetail}></ForecastExtended>
      </div>
    );

  }
}

export default App;
