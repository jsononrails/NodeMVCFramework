var HomeController = require("./Base"),
	View = require("../views/Base");

module.exports = HomeController.extend({
	name: "Home",
	run: function(req, res, next) {
		var view = new View(res, 'home');
		view.render({
			title: 'Home',
			content: 'Welcome to Character Tracker'
		});
	}
});