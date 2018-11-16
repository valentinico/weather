import React, { Component } from 'react';

import LocationList from './components/LocationList';

import './App.css';
const cities = [
  'Nuuk, GL',
  'Buenos Aires, AR',
  'Mollendo, PE',
  'San Miguel de Tucuman, AR',
];



class App extends Component {
  render() {
    return (
      <div className="App">
        <LocationList cities={cities}></LocationList>
      </div>
    );
  }
}

export default App;
