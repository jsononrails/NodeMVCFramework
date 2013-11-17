var View = require("../views/Base");

describe("Base view", function() {

	it("create and render new view", function(next) {
		var responseMockup = {
			render: function(template, data) {
				expect(data.myProperty).toBe('value');
				expect(template).toBe('template-file');
				next();
			}
		}
		
		var view = new View(responseMockup, 'template-file');
		view.render({myProperty: 'value'});
		
	});
	
	if("should be extendable", function(next) {
		var view = new View();
		var OtherView = view.extend({
			render: function(data) {
				expect(data.prop).toBe('yes');
				next();
			},
		});
		
		var otherViewInstance = new OtherView();
		expect(otherViewInstance.render).toBeDefined();
		otherViewInstance.render({prop: 'yes'});
		
	});
	
});