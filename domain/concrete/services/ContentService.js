var IContentService = require('../../abstract/services/IContentService');
var ContentRepository = require("../repositories/ContentRepository");

var ContentService = function() {
	this.repository = new ContentRepository();
};

ContentService.prototype = Object.create(IContentService);

ContentService.prototype.insert = function(item, callback) {
	console.log('Content service: methond insert');
	this.repository.insert(item, callback);
};	

ContentService.prototype.update = function(item, id, callback) {
	
};

ContentService.prototype.getlist = function(callback) {
	this.repository.getlist(function(results, fields) {
		callback(results);
	});
};

ContentService.prototype.get = function(id, callback) {
	
};

ContentService.prototype.delete = function(id, callback) {
	
};

module.exports = ContentService;