// /models/ContentModel.js

var Model = require("./Base"),
	model = new Model();
	
var ContentModel = model.extend({
	Data: function() {
		return {
			title: null,
			description: null,
			dateCreated: new Date()
		};
	},
	
	ViewModel: function() {
		return {
			title: null,
			description: null,
			dateCreated: null
		}
	}
	
});

module.exports = ContentModel;