var BaseController = require("./Base"),
	View = require("../views/Base"),
	Model = require("../models/ContentModel");
	
	var ContentService = require("../domain/concrete/services/ContentService"),
		service = new ContentService();
	
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
		var viewModel = new Model().viewModel;
		viewModel.title = 'Test Title';
		console.log(viewModel);
		service.insert(viewModel, function() {
			console.log('complete');
		});
		
		var view = new View(res, 'admin');
		view.render({
			title: 'Administration',
			content: 'test'
		});
	},
	
});