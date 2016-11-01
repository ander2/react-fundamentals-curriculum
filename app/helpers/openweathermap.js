var axios = require('axios');
var api = {
  getCurrentWeather: function  (city) {
    var API_KEY= "f7270ecf7bfc541cf1298811e51da08c";
    var URL = "http://api.openweathermap.org/data/2.5/weather?type=accurate&mode=json&units=metric&APPID=" + API_KEY;
    return axios.get(URL + '&q=' + city)
    .then(function (result) {
        return result.data;
    })
    .catch(function  (err) {
        console.error("Uppps there was an error", err);
    });
  },
  getForecast: function  (city, country) {
    var API_KEY= "f7270ecf7bfc541cf1298811e51da08c";
    var URL = "http://api.openweathermap.org/data/2.5/forecast/daily?mode=json&units=metric&APPID=" + API_KEY;
    return axios.get(URL + '&q=' + city + ',' + country)
    .then(function (result) {
        return result.data;
    })
    .catch(function  (err) {
        console.error("Uppps there was an error", err);
    });
  }
}

module.exports = api;
