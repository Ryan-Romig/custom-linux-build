const getAllPossibleCombinations = () => {
  const result = []
  return result

}
const asyncForEach = async (array, callback) => {
  for (let index = 0; index < array.length; index++) {
    await callback(array[index], index, array);
  }
}

const executeSystemCommand = (commandString) => {
  const { exec } = require('child_process');

  exec(commandString, (err, stdout, stderr) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log
  }
  )
}

const launchWebApp = (url) => {
  const { executeSystemCommand } = require('../toolbox')
  executeSystemCommand(`DISPLAY=:1 google-chrome --start-maximized  --kiosk --profile-directory=Default --app=${url}`)
}

module.exports = { getAllPossibleCombinations, asyncForEach, executeSystemCommand, launchWebApp }