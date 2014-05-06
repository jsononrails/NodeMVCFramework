var IPostRepository = require('../../abstract/repositories/IPostRepository'),
    postModel = new(require("../../../models/PostModel")),
  	DB = require("../../../data/db_pg"),
    self;


var PostRepository  = function() {
	self = this;
	DB.db(function(something, client) {
		self.dbc = client;
		self.model = postModel;
	});
};

PostRepository .prototype = Object.create(IPostRepository);

PostRepository .prototype.insert = function(item, callback) {
  console.log("PostRepository: insert");
};	

PostRepository .prototype.update = function(item, id, callback) {
	console.log("PostRepository: update")
};

// gets a list of all posts
PostRepository.prototype.getlist = function(callback) {
	console.log("PostRepository: getlist")
};

PostRepository .prototype.get = function(id, callback) {
	console.log("PostRepository: get")
};

PostRepository .prototype.delete = function(id, callback) {
	console.log("PostRepository: delete")
};

PostRepository.prototype.closeConnection = function() {
	self.dbc.end();
};

PostRepository.prototype.callback = function(cb) {
	self.dbContext.db(cb);
};

module.exports = PostRepository;