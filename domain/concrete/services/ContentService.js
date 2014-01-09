var IContentService = require('../../abstract/services/IContentService');
var ContentRepository = require("../repositories/ContentRepository");
var DB = require("../../../data/db");

var ContentService = function() {
	var db = DB;
	this.repository = new ContentRepository(db);
};

ContentService.prototype = Object.create(IContentService);

ContentService.prototype.insert = function(item, callback) {
	console.log('Content service: methond insert');
	this.repository.insert(item, callback);
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