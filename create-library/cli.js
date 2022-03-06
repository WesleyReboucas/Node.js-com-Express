#!/usr/bin/env node

import chalk from "chalk";
import getFile from "./index.js";
import validatedURL from "./http-validation.js";

const way = process.argv;

async function processText(fileWay) {
  const result = await getFile(fileWay[2]);
  if (way[3] === "valid") {
    console.log(chalk.yellow("[!] Validated Links"), await validatedURL(result));
  } else {
    console.log(chalk.yellow("[-] List links: "), result);
  }
}

processText(way);
