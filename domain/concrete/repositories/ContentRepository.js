var IContentRepository = require('../../abstract/repositories/IContentRepository');
var DB = require("../../../data/db");
var model = new(require("../../../models/ContentModel"));
var self;

var ContentRepository  = function() {
	self = this;
	DB.db(function(something, connection) {
		self.dbc = connection;
		self.model = model;
	});
};

ContentRepository .prototype = Object.create(IContentRepository);

ContentRepository .prototype.insert = function(item, callback) {
	console.log('Content repository: methond insert');
};	

ContentRepository .prototype.update = function(item, id, callback) {
	
};

// gets a list of all content
ContentRepository.prototype.getlist = function(callback) {
	
	// set query
	self.dbc.query(" \
		SELECT \
		 	contentId, \
			title,\
			description, \
			dateCreated \
		FROM \
			CONTENT \
		ORDER BY \
			dateCreated DESC", function(err, results, fields) {

		// check for db error
		if(!err) {
			
			var arrContentModel = [];

			for(var i = 0; i < results.length; i++) {
				
				// init new model object
				var model = self.model.Data();
				
				// set model values from results
				model.id = results[i].content_id;
				model.title = results[i].title;
				model.description = results[i].description;
				model.dateCreated = results[i].dateCreated;
				
				// create list of content model
				arrContentModel.push(model);
			}
			
			// close connection
			self.closeConnection();
			
			// pass back list of models to the service
			callback(err, arrContentModel);
			
		} else {
			
			// log error to sceen
			console.log("ERROR! File: ContentRepository.js, Method: getlist(callback), Error Message: " + err);
			
			// close connection
			self.closeConnection();
			
			callback(err, null);
		}
	});
};

ContentRepository.prototype.closeConnection = function() {
	self.dbc.end();
};

ContentRepository .prototype.get = function(id, callback) {
	
};

ContentRepository .prototype.delete = function(id, callback) {
	
};


ContentRepository.prototype.callback = function(cb) {
	self.dbContext.db(cb);
};

module.exports = ContentRepository;