// const got = require('got')
import got from 'got'
// const dotenv = require("dotenv")
import dotenv from 'dotenv'
dotenv.config();

// const apiKey = 'fd58f45000e4c9ee9b5a555653d9a10e'
// const city = 'London';
// const apiUrl = `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${apiKey}`;

// let weatherData = null;

// got(apiUrl).then((response) => {
//   weatherData = JSON.parse(response.body);
//   console.log('Temperature: ' + weatherData.main.temp);
//   console.log('Condition: ' + weatherData.weather[0].main);
// });

// console.log('Requesting weather data');

// const fetchRepoInfo = (key, callback) => {
//   got(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=London&appid=${key}`).then((response) => {
//     callback(response)
//   });
// }

// fetchRepoInfo(apikey, (repoResponse) => {
//   console.log(JSON.parse(repoResponse.body));
// });

class Weather {
  constructor() {
    this.apiKey = `${process.env.API_KEY}`;
  }

  fetchWeatherData(city, callback) {
    got(
      `http://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${this.apiKey}`
    ).then((response) => {
      callback(JSON.parse(response.body));
      // This passes the parsed response body to whatever function is calling it i.e. the anonymous func below
    
    });
  }

}

// const weather = new Weather();
// weather.fetchWeatherData("London", (responseBody) => {
//   console.log(responseBody);
// });

// module.exports = Weather
