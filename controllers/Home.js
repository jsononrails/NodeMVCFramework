var HomeController = require("./Base"),
	View = require("../views/Base"),
	Service = require("../domain/concrete/services/ContentService.js");
	
module.exports = HomeController.extend({
	name: "Home",
  
  // index action for home
	index: function(req, res, next) {
		var self = this;
		var view = new View(res, 'home');
		var service = new Service();
		var result = null;
		
    view.render({
      title: 'Home Sweet Home'});
    
    // modify below after for handling data
		/*service.getlist(function(err, contentViewModels) {
			if(!err) {
				view.render({
					title: 'Home',
					content: contentViewModels
				});
			}
      else {
        view.render({
          title: 'Home - Error',
          error: err,
          content: null
        });
      }
		
		});*/
	}
});