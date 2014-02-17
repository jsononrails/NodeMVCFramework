var PostController = require("./Base"),
	View = require("../views/Base"),
	Service = require("../domain/concrete/services/PostService.js");

module.exports = PostController.extend({
	name: "Post",
  service: new Service(),
  
  // insert action for saving new posts
  insert: function(req, res, next) {
    
    var self = this,
        view = new View(res, 'home'),
        result = null;
    
    // get current user maybe move this to a helper?
    return get_current_user(req, res, post_callback);
    
    function post_callback(req, res, user) {
      if ( !user ) {
        return res.redirect('/home');
      }
      console.log(user);
    }
    
    var post_status = self.requestHelper.get_argument(req, 'status', "");//.replace("\n","");
    console.log(post_status);
    return res.redirect('/');
     // insert action
   /* service.insert(function(err, postid) {
      
    });*/
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