// const Weather = require("./openweather.js")

export default class Thermostat {
  constructor(weather) {
    this.weatherObj = weather;
    this.temperature = 20;
    this.mintemp = 10;
    this.maxtemp = 32;
  }

  getTemperature() {
    return this.temperature;
  }

  up() {
    this.temperature >= this.maxtemp ? this.maxtemp : (this.temperature += 1);
  }

  down() {
    this.temperature <= this.mintemp ? this.mintemp : (this.temperature -= 1);
  }

  setPowerSavingMode(bool) {
    if (bool) {
      if (this.temperature > 25) {
        this.temperature = 25;
      }
      this.maxtemp = 25;
      return "PSM is now on, max temp is 25 C";
    } else {
      this.maxtemp = 32;
      return "PSM is now off, max temp is 32 C";
    }
  }

  reset() {
    this.temperature = 20;
  }

  // setTemperature(currentTemp) {
  //   this.temperature = currentTemp
  // }

  setCity(city) {
    this.weatherObj.fetchWeatherData(city, (responseBody) => {
      this.temperature = responseBody.main.temp
      console.log(thermostat.getTemperature())
    })
  
  }
}

// const weather = new Weather();
// const thermostat = new Thermostat(weather);

// thermostat.setCity("London")
// setTimeout(() => {console.log(thermostat.getTemperature())},5000)


// module.exports = Thermostat;
