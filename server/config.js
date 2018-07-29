require('dotenv').config({ path: './server/.env' });

module.exports = {
	env: process.env.NODE_ENV || 'development',
  database: {
    uri: process.env.DB_URI,
  }
};