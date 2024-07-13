require('dotenv-expand').expand(require('dotenv').config({path:'../.env'}))

const secrets = {
  port: process.env.PORT || 5000,
  clientToken: process.env.CLIENT_TOKEN,
};
const secretNames = {
  port:'port',
  clientToken:'clientToken',
}

const getSecret = (key) => secrets[key];

module.exports = { getSecret, secretNames };
