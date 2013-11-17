var BaseController = require("./Base"),
	View = require("../views/Base");

module.exports = BaseController.extend({

	name: "Admin",
	
	authorize: function(req) {
		return(
				req.session &&
				req.session.change_this_token &&
				req.session.change_this_token === true
				) ||
			(
				req.body &&
				req.body.username === this.username &&
				req.body.password === this.password
				);
	},
	
	run: function(req, res, next) {
		if(this.authorize(req)) {
			req.session.change_this_token = true;
			req.session.save(function(err) {
				var view = new View(res, 'admin');
				view.render({
					title: 'Administration',
					content: 'Welcome to the control panel'
				});
			});
		} else {
			var view = new View(res, 'admin-login');
			view.render({
				title: 'Please login'
			});
		}
	}
	
});