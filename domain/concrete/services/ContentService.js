var IContentService = require('../../abstract/services/IContentService');

var ContentService = function() {};

ContentService.prototype = Object.create(IContentService);

ContentService.prototype.insert = function(item, callback) {
	console.log('Item for insert: ' + item.title);
};	

ContentService.prototype.update = function(item, id, callback) {
	
};

ContentService.prototype.getlist = function(callback) {
	
};

ContentService.prototype.get = function(id, callback) {
	
};

ContentService.prototype.delete = function(id, callback) {
	
};

module.exports = ContentService;