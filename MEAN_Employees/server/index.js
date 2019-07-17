/* Modules */
const express = require("express");
const chalk = require("chalk");

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(chalk.yellow("Server on port 3000"));
});
