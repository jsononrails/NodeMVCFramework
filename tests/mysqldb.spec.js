describe("MySQLDB", function(){
	it("is there a server running", function(next) {
		var mySQLClient = require('mysql'),
			config = require('../config')();
		
		var conn_props = config.db;
	
		var conn = mySQLClient.createConnection({
			host: conn_props.host,
			user: conn_props.user,
			password: conn_props.password,
			port: conn_props.port,
			database: conn_props.database
		});
		
		conn.connect(function(err) {
			expect(err).toBe(null);
			next();
		});
	});
});