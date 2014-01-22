var IContentService = require('../../abstract/services/IContentService');
var ContentRepository = require("../repositories/ContentRepository");
var model = new (require("../../../models/ContentModel"));
var self;

var ContentService = function() {
	self = this;
	self.repository = new ContentRepository();
	self.model = model;
};

ContentService.prototype = Object.create(IContentService);

ContentService.prototype.insert = function(item, callback) {
	console.log('Content service: methond insert');
	self.repository.insert(item, callback);
};	

ContentService.prototype.update = function(item, id, callback) {
	
};

ContentService.prototype.getlist = function(callback) {
	self.repository.getlist(function(err, modelData, fields) {
		
		// check for errors
		if(!err) {
			var arrContentViewModel = [];
			for(var i = 0; i< modelData.length; i++) {
				
				var viewModel = self.model.ViewModel();
				
				viewModel.id = modelData[i].id;
				viewModel.title = modelData[i].title;
				viewModel.description = modelData[i].description;
				viewModel.dateCreated = modelData[i].dateCreated;
				
				arrContentViewModel.push(viewModel);
			}
			
			// pass view model on to controller
			callback(err, arrContentViewModel);
			
		} else {
			console.log("ERROR! File: ContentService.js, Method: getlist(callback), Error Message: " + err);
			callback(err, null);
		}
	});
};

ContentService.prototype.get = function(id, callback) {
	
};

ContentService.prototype.delete = function(id, callback) {
	
};

module.exports = ContentService;