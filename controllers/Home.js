var HomeController = require("./Base"),
	View = require("../views/Base"),
	Service = require("../domain/concrete/services/ContentService.js");
	
module.exports = HomeController.extend({
	name: "Home",
	run: function(req, res, next) {
		var self = this;
		var view = new View(res, 'home');
		var service = new Service();
		var result = null;
		
		service.getlist(function(err, contentViewModels) {
			if(!err) {
				view.render({
					title: 'Home',
					content: contentViewModels
				});
			}
		
		});
	}
});