var PostController = require("./Base"),
    View = require("../views/Base"),
	  Service = require("../domain/concrete/services/PostService.js"),
    PostModel = new (require("../models/PostModel"));

module.exports = PostController.extend({
	name: "Post",
  service: new Service(),
  
  // insert action for saving new posts
  insert: function(req, res, next) {
    
    var self = this,
        view = new View(res, 'home'),
        result = null;
   
    
    // get current user maybe move this to a helper?
    return self.authHelper.get_current_user(req, res, post_callback);
    
    // handle post insert thru repo pattern
    // but do user auth check via controller 
    
    function post_callback(req, res, user) {
      if ( !user ) {
        res.locals.messages = ["error", "User not logged in..."];
        console.log(res.locals.messages);
        return res.redirect('/');
      }
      console.log(user);
    }
    
    
    var post_status = self.requestHelper.get_argument(req, 'status', ""),//.replace("\n","");
        modelData = PostModel.new_post(post_status);
    
    modelData.validate(function(err) {
      if(!err) {
        // do service call here
        
        /* service.insert(function(err, postid) {
      
        });*/
        
        return res.redirect('/');
      } else {
        
        console.log(err);
        
        // fix this
        view.render({
          title: 'Posts - Error',
          error: err
        });
        
      }
    });
  },
  
	index: function(req, res, next) {
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
	}
});