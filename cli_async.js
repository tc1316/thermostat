// const Thermostat = require("./thermostat");
import Thermostat from "./thermostat.js";
// const readline = require("readline");
import readline from "readline";
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const thermostat = new Thermostat();

function cli() {
  return new Promise(function (resolve, reject) {
    console.log(`Temperature is ${thermostat.getTemperature()}`);
    rl.setPrompt("Enter line > ");
    rl.prompt();
    rl.on("line", function (line) {
      if (line === "exit") {
        rl.close();
        return;
      }

      if (line === "up") {
        thermostat.up();
        if (thermostat.getTemperature() >= thermostat.maxtemp) {
          console.log(
            `Temperature is ${thermostat.getTemperature()} (maximum reached)`
          );
        } else {
          console.log(`Temperature is ${thermostat.getTemperature()}`);
        }
      } else if (line === "down") {
        thermostat.down();
        if (thermostat.getTemperature() <= thermostat.mintemp)
          console.log(
            `Temperature is ${thermostat.getTemperature()} (minimum reached)`
          );
        else console.log(`Temperature is ${thermostat.getTemperature()}`);
      } else if (line === "psm off") {
        thermostat.setPowerSavingMode(false);
        console.log(`Max temperature is now ${thermostat.maxtemp}`);
      } else if (line === "psm on") {
        thermostat.setPowerSavingMode(true);
        console.log(`Max temperature is ${thermostat.maxtemp}`);
      }
      rl.prompt();
    }).on("close", function () {
      console.log("quitting");
      resolve(`The temperature was set to ${thermostat.getTemperature()}`);
    });
  });
}

async function run() {
  try {
    let replResult = await cli();
    console.log(replResult);
  } catch (e) {
    console.log("failed:", e);
  }
  // await cli()
}

run();
