var IDatabaseSetupRepository = require('../../abstract/repositories/IDatabaseSetupRepository');
var DB = require("../../../data/db");

var self;

var DatabaseSetupRepository  = function() {
	self = this;
	DB.db(function(something, connection) {
		self.dbc = connection;
	});
};

DatabaseSetupRepository.prototype = Object.create(IDatabaseSetupRepository);

// create initial database tables
DatabaseSetupRepository.prototype.createTables = function(callback) {
	
	// set query
	self.dbc.query(" \
        CREATE TABLE CONTENT( \
        contentId INT NOT NULL AUTO_INCREMENT, \
        title VARCHAR(100) NOT NULL, \
        description VARCHAR(5000), \
        dateCreated DATE, \
        PRIMARY KEY ( contentId ));"
, function(err, results) {
		
		// check for db error
		if(!err) {
			
			for(var i = 0; i < results.length; i++) {
			    console.log(results[i]);
			}
			
			// close connection
			self.closeConnection();
			
			// pass back results to the service
			callback(err, results);
			
		} else {
			
			// log error to sceen
			console.log("ERROR! File: DatabaseSetupRepository.js, Method: createTables(callback), Error Message: " + err);
			
			// close connection
			self.closeConnection();
			
			callback(err, null);
		}
	});
};

DatabaseSetupRepository.prototype.closeConnection = function() {
	self.dbc.end();
};

DatabaseSetupRepository.prototype.callback = function(cb) {
	self.dbContext.db(cb);
};

module.exports = DatabaseSetupRepository;