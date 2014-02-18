var IAuthService = require('../../abstract/services/IAuthService'),
    AuthRepository = require("../repositories/AuthRepository"),
    self;

var AuthService = function() {
	self = this;
	self.repository = new AuthRepository();
};

AuthService.prototype = Object.create(IAuthService);

AuthService.prototype.get_current_user = function(auth_cookie, callback) {
    self.repository.get_current_user(auth_cookie, function(err, user) {
      if(!err) {
        callback(err, user);
      } else {
        console.log("ERROR! File: AuthService.js, Method: get_current_user, Error Message: " + err[0]);
			  callback(err, null);
      }
    });
};


module.exports = AuthService;