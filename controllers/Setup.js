var SetupController = require("./Base"),
	View = require("../views/Base"),
	DatabaseSetupService = require("../domain/concrete/services/DatabaseSetupService.js");
	
module.exports = SetupController.extend({
	name: "Setup",
	createTables: function(req, res, next) {
		var self = this;
		var view = new View(res, 'setup/createtables');
		var service = new DatabaseSetupService();
		var result = null;
		
		service.createTables(function(err, result) {
			if(!err) {
				view.render({
					title: 'Database Setup',
					result: result
				});
			}
      else {
        view.render({
          title: 'Database Setup - Error',
          error: err,
          result: null
        });
      }
		
		});
	}
});