var IAccountRepository = require('../../abstract/repositories/IAccountRepository'),
    userModel = new(require("../../../models/UserModel")),
  	DB = require("../../../data/db"),
    self;

var AccountRepository  = function() {
	self = this;
	DB.db(function(something, connection) {
		self.dbc = connection;
		self.model = userModel;
	});
};

AccountRepository.prototype = Object.create(IAccountRepository);

AccountRepository.prototype.signup = function(user, callback) {
  console.log('Account repository: methond signup');
};	

AccountRepository.prototype.closeConnection = function() {
	self.dbc.end();
};

AccountRepository.prototype.callback = function(cb) {
	self.dbContext.db(cb);
};

module.exports = AccountRepository;