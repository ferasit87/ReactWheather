const axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/weather?appid=adc5e43e8ed6bb195f35a19ac93b272e'

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      console.log(res);
      if (res.data.code && res.data.message) {
        throw new Error (res.data.message);
      }else {
        return res.data.main.temp;
      }
    }, function(res){
        throw new Error(res.data.message);
    });
  }
}
