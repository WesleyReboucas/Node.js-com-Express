import chalk from "chalk";
import fs from "fs";

function getLinks(text) {
  const regex = /\[([^\]]*)\]\((https?:\/\/[^$#\s].[^\s]*)\)/gm;
  const arrayResults = [];
  let temp;
  while ((temp = regex.exec(text)) !== null) {
    arrayResults.push({
      [temp[1]]: temp[2],
    });
  }
  return arrayResults.length === 0 ? '[X] Links nonexistent' : arrayResults;
}

function handleError(error) {
  throw new Error(
    chalk.white.bgRed.bold(error.code) + chalk.red(" Address isn't correct.")
  );
}

async function getFile(addressFile) {
  const encoding = "utf-8";
  try {
    const text = await fs.promises.readFile(addressFile, encoding);
    return getLinks(text);
  } catch (error) {
    handleError(error);
  } finally {
    // console.log(chalk.yellow("[!] Function 'getAddress' worked."));
  }
}

export default getFile;

// ===== Use promise '.then' =====
// function getFile(addressFile) {
//   const encoding = "utf-8";
//   fs.promises
//     .readFile(addressFile, encoding)
//     .then((text) => {
//       console.log(chalk.white.bgGreen("[!] Read ") + text);
//     })
//     .catch((error) => {
//       handleError(error);
//     });
// }

// ===== Use code sync =====
// function getFile(addressFile) {
//   const encoding = "utf-8";
//   fs.readFile(addressFile, encoding, (error, text) => {
//     if (error) {
//       handleError(error);
//     }
//     console.log(chalk.green(text));
//   });
// }
