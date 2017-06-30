var chalk = require("chalk");

var message = chalk.yellow.bgBlue("Hello") + chalk.blue.bgYellow(" World");
console.log(message);