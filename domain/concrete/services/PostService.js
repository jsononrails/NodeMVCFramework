var IPostService = require('../../abstract/services/IPostService'),
    PostRepository = require("../repositories/PostRepository"),
    model = new (require("../../../models/PostModel")),
    self;

var PostService = function() {
	self = this;
	self.repository = new PostRepository();
	self.model = model;
};

PostService.prototype = Object.create(IPostService);

PostService.prototype.insert = function(item, callback) {
    self.repository.insert(item, function(err) {
      if(err) {
        console.log("ERROR! File: PostService.js, Method: insert(item, callback), Error Message: " + err);
			  callback(err);
      }
    });
};

PostService.prototype.update = function(item, id, callback) {
	
};

PostService.prototype.getlist = function(callback) {
	self.repository.getlist(function(err, modelData, fields) {
		
		// check for errors
		if(!err) {
			var arrPostViewModel = [];
			for(var i = 0; i< modelData.length; i++) {
				
				// handle passing data to viewModel
				
				// arrPostViewModel.push(viewModel);
			}
			
			// pass view model on to controller
			callback(err, arrPostViewModel);
			
		} else {
			console.log("ERROR! File: PostService.js, Method: getlist(callback), Error Message: " + err);
			callback(err, null);
		}
	});
};

PostService.prototype.get = function(id, callback) {
	
};

PostService.prototype.delete = function(id, callback) {
	
};

module.exports = PostService;