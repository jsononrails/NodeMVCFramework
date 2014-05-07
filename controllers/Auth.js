/// ./controllers/Auth.js

var 
	AuthController 		= require("./Base"),
	View 				= require("../views/Base"),
    UserModel 			= new (require("../models/UserModel"));

module.exports = AuthController.extend({
	name: "Auth",
  
  // facebook login success
  success: function(req, res, next) {
		var view = new View(res, 'login/success');
		console.log(AuthController.current_user);
		view.render({
			title: 'Logged in',
		});
  },

});