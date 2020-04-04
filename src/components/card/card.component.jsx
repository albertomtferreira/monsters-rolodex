import React from 'react';
import './card.styles.css'

export const Card  = (props) => (
    <div className='card-container'>
        <img className='flag-container' alt={`${props.country.countryInfo.iso3}`} src={props.country.countryInfo.flag}/>
        <h1 >Country: {props.country.country}</h1>
        <h2 >Total Cases:{props.country.cases}</h2>
        <h2 >Total Deaths: {props.country.deaths}</h2>
        <h3 >Total Active: {props.country.active}</h3>
    </div>
)