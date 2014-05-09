var _ = require("underscore"),
    ReqHelper = new require("../helpers/request_helper.js");
    AuthHelper = new require("../helpers/auth_helper.js");

module.exports = {
	name: "base",
	
//	requestHelper: new ReqHelper(),
// 	authHelper: new AuthHelper(),
  
	extend: function(child) {
			return _.extend({}, this, child);
	},
	
	run: function(req, res, next) {
	
	},
	
	authorized: function(req, res) {
		if(req.user === undefined)
			res.redirect('/'); 
	},
	
	current_user: function(req) {
		return req.user == null ? null : {
				userID: req.user.id,
				name: 	 req.user.displayName,
				gender:  req.user.gender,
				profileUrl: req.user.profileUrl
		}
	}
}