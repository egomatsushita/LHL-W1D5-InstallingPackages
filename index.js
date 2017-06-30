var chalk = require("chalk");

var message = chalk.yellow.bold.bgBlue("Hello") + chalk.blue.underline.bgYellow(" World");
console.log(message);