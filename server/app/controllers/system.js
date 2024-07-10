const activateHotspot = async (req, res) => {
    let response = {}
  try {
    //get hotspot config from local storage configs and start the hotspot
    const {state} = req.body;
    if(state === 'on'){
        const {executeSystemCommand} = require('../toolbox')
        executeSystemCommand('sudo nmcli device wifi hotspot con-name my-hotspot ssid my-hotspot band bg password my-hotspot')
        response = {state: 'on'}

    }
    if(state === 'off'){
        const {executeSystemCommand} = require('../toolbox')
        executeSystemCommand('echo off')
        response = {state: 'off'}
    }
    res.status(200).json(JSON.stringify(response))
  } catch (e) {
    res.status(401).json(JSON.stringify([{}]))
  }
}
module.exports = {activateHotspot}