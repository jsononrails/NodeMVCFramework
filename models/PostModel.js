// /models/PostModel.js

var Model = require("./Base"),
	model = new Model();
	
var PostModel = model.extend({
	Data: function() {
		return {
			title: null,
			body: null,
			dateCreated: new Date()
		};
	},
	
	ViewModel: function() {
		return {
			title: null,
			body: null,
			dateCreated: null
		}
	}
	
});

module.exports = PostModel;