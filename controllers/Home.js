var HomeController = require("./Base"),
	View = require("../views/Base"),
	Service = require("../domain/concrete/services/ContentService.js");
	
module.exports = HomeController.extend({
	name: "Home",
	run: function(req, res, next) {
		var view = new View(res, 'home');
		var service = new Service();
		service.insert("", function() {});
		view.render({
			title: 'Home',
			content: 'Home'
		});
	}
});