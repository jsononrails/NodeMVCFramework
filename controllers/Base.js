var _ = require("underscore"),
    ReqHelper = new require("../helpers/request_helper.js");
    AuthHelper = new require("../helpers/auth_helper.js");

module.exports = {
	name: "base",

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
				id: req.user.id,
				displayName: 	 req.user.displayName,
				gender:  req.user.gender,
				profileUrl: req.user.profileUrl
		}
	}
}