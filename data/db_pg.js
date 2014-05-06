var pg				= require('pg').native,
	config			= require('../config')();
	
exports.db = function(callback) {
	var client = new pg.Client(config.connString);
	callback(null, client);
};
