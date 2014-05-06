var IHomeService = require('../../abstract/services/IHomeService'),
    HomeRepository = require("../repositories/HomeRepository"),
    model = new (require("../../../models/UserModel")),
    self;

var HomeService = function() {
	self = this;
	self.repository = new HomeRepository();
	self.model = model;
};

HomeService.prototype = Object.create(IHomeService);

HomeService.prototype.getUsers = function(callback) {
	
	self.repository.getUsers(function(err, result) {

		// check for errors
		if(!err) {
			var arrUserViewModel = [];
			for(var i = 0; i< result.rows.length; i++) {
				
				// handle passing data to viewModel
				arrUserViewModel.push(result.rows[i]);
			}
			
			// pass view model on to controller
			callback(err, arrUserViewModel);
			
		} else {
			console.log("ERROR! File: HomeService.js, Method: getUsers, Error Message: " + err);
			callback(err, null);
		}
	});
};

module.exports = HomeService;