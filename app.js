#! /usr/bin/env node
import inquirer from "inquirer";
import { differenceInSeconds } from "date-fns";
import chalk from "chalk";
//doing some decortion
console.log(chalk.bold.italic.cyanBright("\n \t \t******Welcome To -_- Arisha Ghaffar -_- CountDown Timer ******"));
const response = await inquirer.prompt([
    {
        name: "userInput",
        type: "number",
        message: "Please enter the amount of seconds",
        validate: (input) => {
            if (isNaN(input)) {
                return "please enter valid number";
            }
            else if (input > 60) {
                return "Seconds must be less than 60";
            }
            else {
                return true;
            }
        }
    }
]);
let input = response.userInput;
//creating function
function startTime(value) {
    let initialTime = new Date().setSeconds(new Date().getSeconds() + value);
    let intervalTime = new Date(initialTime);
    setInterval((() => {
        let currentTime = new Date();
        let timeDifference = differenceInSeconds(intervalTime, currentTime);
        if (timeDifference <= 0) {
            console.log("Timer is expired");
            process.exit();
        }
        let minutes = Math.floor((timeDifference % (3600 * 24)) / 3600);
        let seconds = Math.floor(timeDifference % 60);
        console.log(`${chalk.bold.blueBright(minutes.toString().padStart(2, "0"))}:${chalk.bold.blue(seconds.toString().padStart(2, "0"))}`);
    }), 1000);
}
//Calling 
startTime(input);
