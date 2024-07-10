require('dotenv-expand').expand(require('dotenv').config({path:'../.env'}))

const secrets = {
  dbUri: process.env.DB_URI || '',
  port: process.env.PORT || 5000,
  clientToken: process.env.CLIENT_TOKEN,
  dbName: process.env.DATABASE_NAME,
  password:process.env.MONGO_PASSWORD,
  username:process.env.MONGO_USERNAME
};
const secretNames = {
  dbUri:'dbUri',
  port:'port',
  clientToken:'clientToken',
  dbName:'dbName',
  password:'password',
  username:'username'
}

const getSecret = (key) => secrets[key];

module.exports = { getSecret, secretNames };
