const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const cors = require('cors');
const https = require('https');


const { secretNames, getSecret } = require('./secrets');

//import routes

const configRoute = require("./routes/config")
const systemRoute = require("./routes/system")

const {  backupMongoDB } = require('./databaseBackup');

//express 
const app = express();
const port = getSecret(secretNames.port);
//middleware
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json({ limit: '100mb' }));


const corsOptions = {
  origin: ['*', '127.0.0.1'],
  credentials: true,            //access-control-allow-credentials:true
  optionSuccessStatus: 200,
}
app.use(cors(corsOptions))

// app.use(function(req, res, next) {
//   res.setHeader('Access-Control-Allow-Origin', 'http://dev.ryanromig.com');
//   res.setHeader('Access-Control-Allow-Origin', 'http://tooling.ryanromig.com');
//   next();
// });

//routes

app.use('/config', configRoute);
app.use('/system', systemRoute);
app.listen(port, () => {
  console.log(`Server running on port ${port}`);

});
module.exports = { app };
