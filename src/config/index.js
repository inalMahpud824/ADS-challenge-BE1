require('dotenv').config();


const port = process.env.PORT_APP || 3000;
const api = process.env.API_PATH || 'api/v1';

module.exports = {
  port,
  api
};
