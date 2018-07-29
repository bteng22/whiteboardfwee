const mongoose = require('mongoose');
const config = require('../config');
const connection = mongoose.connect(config.database.uri);

mongoose.Promise = global.Promise;

connection
	.then(db => {
		console.log(
			`Successfully connected to ${config.database.uri} MongoDB cluster in ${
				config.env
			} mode.`
		);
		return db;
	})
	.catch(err => {
		if (err.message.code === 'ETIMEDOUT') {
			console.log('Attempting to re-establish database connection.');
			mongoose.connect(config.database.uri);
		} else {
			console.log('Error while attempting to connect to database:');
			console.log(err);
		}
	});

  module.export = connection;