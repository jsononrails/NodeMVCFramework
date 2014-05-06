var HomeController = require("./Base"),
	View = require("../views/Base"),
	Service = require("../domain/concrete/services/HomeService.js");
	
module.exports = HomeController.extend({
	name: "Home",
  
  // index action for home
	index: function(req, res, next) {
		var self = this;
		var view = new View(res, 'home');
		var service = new Service();
		var result = null;
	
	service.getUsers(function(err, usersViewModel) {
			if(!err) {
				view.render({
					title: 'Home',
					users: usersViewModel
				});
			}
    		else {
        		view.render({
          			title: 'Home - Error',
          			error: err,
          			content: null
        		});
    		}
		});
	},
	
	users: function(req, res, next) {
		var self = this;
		var view = new View(res, 'home');
		var service = new Service();
		var result = null;
		
    view.render({
      title: 'Home Sweet Home + Users'});
		
	}
});