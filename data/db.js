var mysql = require('mysql'),
	config = require("../config");

exports.db = function(callback) {
	
	conn_props = config.db;
	
	var pool = mysql.createConnection({
		host: conn_props.host,
		user: conn_props.user,
		password: conn_props.password,
		database: conn_props.database
	});
	callback(null, connection);
};