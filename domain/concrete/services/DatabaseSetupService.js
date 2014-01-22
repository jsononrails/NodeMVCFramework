var IDatabaseSetupService = require('../../abstract/services/IDatabaseSetupService');
var DatabaseSetupRepository = require("../repositories/DatabaseSetupRepository");

var self;

var DatabaseSetupService = function() {
	self = this;
  
  // set repository
	self.repository = new DatabaseSetupRepository();
  
  // define success/fail messages
  self.createTablesSucceed = "Tables created successfully!";
  self.createTablesFailed = "Failed to create tables in the database, please try again or contact the site admin!";
};

DatabaseSetupService.prototype = Object.create(IDatabaseSetupService);

DatabaseSetupService.prototype.createTables = function(callback) {
	self.repository.createTables(function(err) {
		
		// check for errors
		if(!err) {
			console.log(self.createTablesSucceed);
      
			// pass message on to controller
			callback(err, self.createTablesSucceed);
			
		} else {
      // log error
			console.log("ERROR! File: DatabaseSetupService.js, Method: createTables(callback), Error Message: " + err);
      
      // pass message on to controller
			callback(err, self.createTablesFailed);
		}
	});
};

module.exports = DatabaseSetupService;