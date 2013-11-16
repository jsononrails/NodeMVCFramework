describe("Configuration setup", function(){
	// local configurations
	it("should load local configurations", function(next) {
		var config = require('../config')();
		expect(config.mode).toBe('local');
		next();
	});
	
	it("should load local database configurations", function(next) {
		var config = require('../config')();
		expect(config.db.dbType).toBe('MySQL');
		next();
	});
	
	// staging configurations
	it("should load staging configurations", function(next) {
		var config = require('../config')('staging');
		expect(config.mode).toBe('staging');
		next();
	});

	// production configurations
	it("should load production configurations", function(next) {
		var config = require('../config')('production');
		expect(config.mode).toBe('production');
		next();
	});
	
});