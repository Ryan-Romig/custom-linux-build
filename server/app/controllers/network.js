const userAgent = '--user-agent="Mozilla/5.0 (Linux; Android 14) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/126.0.6478.122 Mobile Safari/537.36"'
const { executeSystemCommand, launchWebApp } = require('../toolbox')
const activateHotspot = async (req, res) => {
    let response = {}
    try {
        //get hotspot config from local storage configs and start the hotspot
        console.log(req.body)
        const { state, size, mode } = req.body;
        if (state === 'on') {
            const userAgentString = mode === 'mobile' ? userAgent : ''
            // const commandString = `chromium ${userAgentString} --start-maximized --kiosk --profile-directory=Default --app=https://www.spotify.com`
            // executeSystemCommand('sudo nmcli device wifi hotspot con-name my-hotspot ssid my-hotspot band bg password my-hotspot')
            executeSystemCommand('pkill -SIGTERM chromium-browser')
            launchWebApp('https://www.spotify.com')
            response = { state: 'on' }
        }
        if (state === 'off') {

            executeSystemCommand('pkill -f -SIGTERM chromium-browser')
            response = { state: 'off' }
        }
        res.status(200).json(JSON.stringify(response))
    } catch (e) {
        res.status(401).json(JSON.stringify([{}]))
    }
}

module.exports = { activateHotspot }