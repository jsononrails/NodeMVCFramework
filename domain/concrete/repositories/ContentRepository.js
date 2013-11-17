var IContentRepository = require('../../abstract/repositories/IContentRepository');

var ContentRepository  = function(db) {
	this.db = db;
};

ContentRepository .prototype = Object.create(IContentRepository);

ContentRepository .prototype.insert = function(item, callback) {
	console.log('Content repository: methond insert');
};	

ContentRepository .prototype.update = function(item, id, callback) {
	
};

ContentRepository .prototype.getlist = function(callback) {
	
};

ContentRepository .prototype.get = function(id, callback) {
	
};

ContentRepository .prototype.delete = function(id, callback) {
	
};

module.exports = ContentRepository;