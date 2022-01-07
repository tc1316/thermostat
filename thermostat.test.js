// const Thermostat = require("./newthermostat")
import Thermostat from "./newthermostat"

describe("Thermostat", () => {
  let thermostat = new Thermostat();

  it("can return initial temp of 20 C", () => {
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it("can increase temperature", () => {
    thermostat.up();
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(22);
  });

  it("can decrease temperature", () => {
    thermostat.down();
    expect(thermostat.getTemperature()).toEqual(21);
  });

  it("can enable PSM", () => {
    expect(thermostat.setPowerSavingMode(true)).toEqual(
      "PSM is now on, max temp is 25 C"
    );
  });

  it("changes the max temp to 25 C after PSM is enabled", () => {
    expect(thermostat.maxtemp).toEqual(25);
  });

  it("cannot go past the PSM max temp of 25", () => {
    for (let i = 0; i < 10; i++) {
      thermostat.up();
    }
    expect(thermostat.getTemperature()).toEqual(25);
  });

  it("reverts the max temp to 32 C after PSM is disabled", () => {
    thermostat.setPowerSavingMode(false);
    expect(thermostat.maxtemp).toEqual(32);
  });

  it("can increase past 25 C once PSM is disabled", () => {
    thermostat.up();
    expect(thermostat.getTemperature()).toEqual(26);
  });

  it("can reset the temeprature to 20 C", () => {
    thermostat.reset();
    expect(thermostat.getTemperature()).toEqual(20);
  });

  it("can update its temperature to the city its located", () => {
    const weatherDouble = { fetchWeatherData: (city, callback) => 5}
    const newThermostat = new Thermostat(weatherDouble)
    
    // newThermostat.setCity("London")
    // expect(newThermostat.getTemperature()).toBe(5);
  });
});
