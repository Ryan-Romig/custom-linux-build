const reboot = async (req, res) => {
  try {
    const {executeSystemCommand} = require('../toolbox')
    executeSystemCommand('sudo reboot')
    res.status(200).json(JSON.stringify(response))
  } catch (e) {
    res.status(401).json(JSON.stringify([{}]))
  }
}
module.exports = {reboot}