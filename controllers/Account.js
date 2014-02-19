var AccountController = require("./Base"),
    View = require("../views/Base"),
	  Service = require("../domain/concrete/services/AccountService.js"),
    UserModel = new (require("../models/UserModel"));

module.exports = AccountController.extend({
	name: "Account",
  service: new Service(),
  
  // login action
  login: function(req, res, next) {
  
  },
  
  // logout action
  logout: function(req, res, next) {
  
  },
  
  // signup action for a new account
  signup: function(req, res, next) {
    
    var self = this,
        view = new View(res, 'signup'),
        result = null;
   
    
    // get current user maybe move this to a helper?
    return self.authHelper.get_current_user(req, res, post_callback);
    
    // handle post insert thru repo pattern
    // but do user auth check via controller 
    
    function post_callback(req, res, user) {
      if ( !user ) {
        req.session.messages = [["error", "User not logged in..."], ["error", "User not logged in2..."]];
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