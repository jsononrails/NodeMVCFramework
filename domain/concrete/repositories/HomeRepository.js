var IHomeRepository = require('../../abstract/repositories/IHomeRepository'),
    userModel = new(require("../../../models/UserModel")),
  	DB = require("../../../data/db_pg"),
    self;


var HomeRepository  = function() {
	self = this;
	DB.db(function(something, client) {
		self.dbc = client;
		self.model = userModel;
		self.messages = [];
	});
};

HomeRepository.prototype = Object.create(IHomeRepository);

// gets a list of all posts
HomeRepository.prototype.getUsers = function(callback) {
	
	var sql = "SELECT user_id, username FROM users";
	
	self.dbc.connect(function(err) {
	  if(err) {
		console.error("problem connecting to database", err);
		messages.push(["error", err]);
	  }
	
	  // execute query
	  self.dbc.query(sql, function(err, result) {
		// check for errors
	    if(err) {
			console.error("problem executing query", err);
			messages.push(["error", err]);
	    }
		
		// close connection
	    self.dbc.end();
		callback(self.messages = err ? self.messages : null, result);
	  });
	});
};

HomeRepository.prototype.closeConnection = function() {
	self.dbc.end();
};

HomeRepository.prototype.callback = function(cb) {
	self.dbContext.db(cb);
};

module.exports = HomeRepository;