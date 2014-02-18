var _ = require("underscore"),
    ReqHelper = new require("../helpers/request_helper.js");
    AuthHelper = new require("../helpers/auth_helper.js");

module.exports = {
	name: "base",
	requestHelper: new ReqHelper(),
  authHelper: new AuthHelper(),
  
	extend: function(child) {
			return _.extend({}, this, child);
	},
	
	run: function(req, res, next) {
		
	}
}