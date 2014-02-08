var Model = require ("../models/PostModel");

describe("Models", function() {
	
	it("should create a new model", function(next) {
		var model = new Model();
		expect(model).toBeDefined();
		expect(model.extend).toBeDefined();
		next();
	});
	
	it("should be extendable", function(next) {
		var model = new Model();
		var OtherTypeOfModel = model.extend({
			myCustomModelMethod: function() {}
		});
		
		var model2 = new OtherTypeOfModel();
		expect (model2).toBeDefined();
		expect(model2.myCustomModelMethod).toBeDefined();
		next();
	});
	
});