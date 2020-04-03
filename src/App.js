import React, {Component} from 'react';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: []
    };
  }
  componentDidMount(){
    fetch('https://corona.lmao.ninja/countries?sort=country')
      .then(response => response.json())
      .then(country => this.setState({data: country}))
      // .then(countryCases => this.setState({data: countryCases}))
  }

  

  render() {
    return (
      <div className="App">
        {this.state.data.map(country => (
          <div key={country.countryInfo.iso3} >
          <img alt={`${country.countryInfo.iso3}`} src={country.countryInfo.flag}/>
          <h1 >Country: {country.country}</h1>
          <h2 >Total Cases:{country.cases}</h2>
          <h2 >Total Deaths: {country.deaths}</h2>
          <h3 >Total Active: {country.active}</h3>
          </div>
        ))}
      </div>
    );
  }
}

export default App;

