const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const https = require('https');


const { secretNames, getSecret } = require('./secrets');

//import routes

const configRoute = require("./routes/config")
const systemRoute = require("./routes/system")
const mediaRoute = require("./routes/media")

//express 
const app = express();
const port = getSecret(secretNames.port);
//middleware
app.use(bodyParser.urlencoded({ extended: true }))

app.use(bodyParser.json({ limit: '100mb' }));

app.use(cors())

//routes

app.use('/config', configRoute);
app.use('/system', systemRoute);
app.use('/media', mediaRoute);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);

});
module.exports = { app };
