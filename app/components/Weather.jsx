const React = require('react');
var WeatherMessage = require('WeatherMessage');
var WeatherForm = require('WeatherForm');
var openweathermap = require('openWeatherMap');

var Weather = React.createClass({
  mainformsubmit : function(city){
    var that = this ;
    debugger ; 
    this.setState({isLoading:true});
    openweathermap.getTemp(city).then(function(temp){
        that.setState({
          city: city,
          temp: temp,
          isLoading : false
        });
      },function(err){
        that.setState({isLoading:false});
      console.log(err);
    });
  },
  getInitialState: function () {
     return {
          isLoading:false
      }
   },
  render: function () {
    var {isLoading, city, temp} = this.state ;
  function renderMessage(){
    if (isLoading){
      return <p>Loading ...  </p> ;
    }else if (temp && city){
      return <WeatherMessage city={city} temp={temp}/>;
    }else{
      return <p>Start get temp</p> ;
    }
  }
  return (
    <div>
      <h3> Weather component </h3>
      <WeatherForm submitForm={this.mainformsubmit}/>
      {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;
