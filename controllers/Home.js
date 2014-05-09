var HomeController = require("./Base"),
	View = require("../views/Base"),
	Service = require("../domain/concrete/services/HomeService.js");
	
module.exports = HomeController.extend({
	name: "Home",
  
  // index action for home
	index: function(req, res, next) {

		var view = new View(res, 'home');

		view.render({
			title: 'Home'
		});
	},
	
	users: function(req, res, next) {
		var self = this;
		var view = new View(res, 'home');
		var service = new Service();
		var result = null;
		
    	view.render({
      		title: 'Home Sweet Home + Users'
		});
	}
});