var IAuthRepository = require('../../abstract/repositories/IAuthRepository'),
    userModel = new(require("../../../models/UserModel")),
	DB = require("../../../data/db_pg"),
    self;


var AuthRepository  = function() {
	self = this;
	DB.db(function(something, client) {
		self.dbc = client;
		self.model = userModel;
	});
};

AuthRepository.prototype = Object.create(IAuthRepository);

AuthRepository.prototype.get_current_user = function(auth_cookie, callback) {
  console.log("AuthRepository: get_current_user");
};	

AuthRepository.prototype.closeConnection = function() {
	self.dbc.end();
};

AuthRepository.prototype.callback = function(cb) {
	self.dbContext.db(cb);
};

module.exports = AuthRepository;