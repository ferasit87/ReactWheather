const React = require('react');

var WeatherMessage = ({temp , city}) =>{  
  return (
    <p>This is  {city}  {temp} </p>
  );
};
module.exports = WeatherMessage;
