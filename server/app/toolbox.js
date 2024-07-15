const { exec,  } = require('child_process');
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

  exec(commandString, (err, stdout, stderr) => {
    if (err) {
      console.error(`Error executing command: ${commandString}`, err);
      return;
    }
    if (stdout) console.log(`Command output: ${stdout}`);
    if (stderr) console.error(`Command error output: ${stderr}`);
  });
}
const mobileUserAgentString = '--user-agent="Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6478.122 Mobile Safari/537.36"'
const launchWebApp = (url,mode) => {
  const userAgentString = mode === 'mobile' ? mobileUserAgentString : ''

  executeSystemCommand(`DISPLAY=:44 chromium-browser ${userAgentString} --start-maximized  --kiosk --profile-directory=Default --app=${url}`)
}

module.exports = { getAllPossibleCombinations, asyncForEach, executeSystemCommand, launchWebApp }