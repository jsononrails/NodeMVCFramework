var _ = require("underscore"),
    ReqHelper = new require("../helpers/request_helper.js");

module.exports = {
	name: "base",
	requestHelper: new ReqHelper(),
  
	extend: function(child) {
			return _.extend({}, this, child);
	},
	
	run: function(req, res, next) {
		
	}
}