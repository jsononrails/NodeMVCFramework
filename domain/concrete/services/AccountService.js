var IAccountService = require('../../abstract/services/IAccountService'),
    AccountRepository = require("../repositories/AccountRepository"),
    self;

var AccountService = function() {
	self = this;
	self.repository = new AccountRepository();
};

AccountService.prototype = Object.create(IAccountService);

AccountService.prototype.sign_up = function(user, callback) {
    self.repository.sign_up(user, function(err, user) {
      if(!err) {
        callback(err, user);
      } else {
        console.log("ERROR! File: AccountService.js, Method: sign_up, Error Message: " + err[0]);
			  callback(err, null);
      }
    });
};


module.exports = AccountService;