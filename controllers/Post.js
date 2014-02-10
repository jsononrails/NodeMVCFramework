var PostController = require("./Base"),
	View = require("../views/Base"),
	Service = require("../domain/concrete/services/PostService.js");
	
module.exports = PostController.extend({
	name: "Post",
	run: function(req, res, next) {
		self = this,
		view = new View(res, 'post'),
		service = new Service(),
		result = null;
		
		service.getlist(function(err, postViewModels) {
			if(!err) {
				view.render({
					title: 'Posts',
					content: postViewModels
				});
			}
      else {
        view.render({
          title: 'Posts - Error',
          error: err,
          content: null
        });
      }
		});
    
    // insert action
    service.insert(function(err, postid) {
      
    });
	}
});