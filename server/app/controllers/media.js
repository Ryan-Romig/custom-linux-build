const playbackController = async (req, res) => {
    let response = {}
    try {
        //get hotspot config from local storage configs and start the hotspot
        const { volume, state } = req.body;
        let command = ''
        switch (state) {
            case 'play':
                command = 'play'
                break;
            case 'stop':
                command = 'stop'
                break;
            case 'pause':
                command = 'pause'   
                break;
            default:
                // Code for unknown state
                break;
        }

        const commandString = `playerctl ${command}`
        const { executeSystemCommand } = require('../toolbox')
        // executeSystemCommand('sudo nmcli device wifi hotspot con-name my-hotspot ssid my-hotspot band bg password my-hotspot')
        executeSystemCommand(commandString)
        response = { state: 'on' }
        res.status(200).json(JSON.stringify(response))
    } catch (e) {
        res.status(401).json(JSON.stringify([{}]))
    }
}

const volumeController = async (req, res) => {
    let response = {}
    try {
        //get hotspot config from local storage configs and start the hotspot
        const { volume } = req.body;
        let command = ''
       
        
        const commandString = `playerctl ${command}`
        const { executeSystemCommand } = require('../toolbox')
        // executeSystemCommand('sudo nmcli device wifi hotspot con-name my-hotspot ssid my-hotspot band bg password my-hotspot')
        executeSystemCommand(commandString)
        response = { state: 'on' }
        res.status(200).json(JSON.stringify(response))
    } catch (e) {
        res.status(401).json(JSON.stringify([{}]))
    }
}


module.exports = { playbackController }