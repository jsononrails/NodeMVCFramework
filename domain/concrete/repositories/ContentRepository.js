var IContentRepository = require('../../abstract/repositories/IContentRepository');
var DB = require("../../../data/db");
var self;

var ContentRepository  = function() {
	self = this;
	DB.db(function(something, connection) {
		self.dbc = connection;
	});
};

ContentRepository .prototype = Object.create(IContentRepository);

ContentRepository .prototype.insert = function(item, callback) {
	console.log('Content repository: methond insert');
};	

ContentRepository .prototype.update = function(item, id, callback) {
	
};

ContentRepository .prototype.getlist = function(callback) {
	self.dbc.query("SELECT * FROM Users", function(err, results, fields) {
		if(err) {
			throw err;
		}
		callback(results, fields);
	});
};

ContentRepository .prototype.get = function(id, callback) {
	
};

ContentRepository .prototype.delete = function(id, callback) {
	
};


ContentRepository .prototype.callback = function(cb) {
	self.dbContext.db(cb);
};

module.exports = ContentRepository;