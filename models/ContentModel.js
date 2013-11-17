// /models/ContentModel.js

var Model = require("./Base"),
	model = new Model();
	
var ContentModel = model.extend{
	
	// view model
	viewModel: {
		title: null,
		text: null,
		type: null
	},
	
	// crud methods
	insert: function(data, callback) {

	},
	
	update: function(data, callback) {
		
	},
	
	getlist: function(data, callback) {
		
	},
	
	remove: function(ID, callback) {
		
	}
	
});

module.exports = ContentModel;