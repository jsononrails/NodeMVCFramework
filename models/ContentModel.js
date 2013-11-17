// /models/ContentModel.js

var Model = require("./Base"),
	model = new Model();
	
var ContentModel = model.extend({
	data: {
		title: null,
		description: null,
		dateCreated: new Date()
	},
	
	viewModel: {
		title: null,
		description: null,
		dateCreated: null
	},
});

module.exports = ContentModel;