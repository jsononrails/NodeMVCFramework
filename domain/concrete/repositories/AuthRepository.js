var IAuthRepository = require('../../abstract/repositories/IAuthRepository'),
    userModel = new(require("../../../models/UserModel")),
    redisClient = require("../../../data/redis"),
    self;


var AuthRepository  = function() {
	self = this;
	self.dbc = redisClient;
	self.model = userModel;
};

AuthRepository.prototype = Object.create(IAuthRepository);

AuthRepository.prototype.get_current_user = function(auth_cookie, callback) {
  var user,
      username;
  
  self.dbc.get("gtw:auth:" + auth_cookie, function(err, result) {
    var user_id = result;
    
    if(!user_id) {
      err.push("No user_id for cookie found");
      this.closeConnection();
      
      console.log("ERROR! File: AuthRepository.js, Method: get_current_user, Error Message: " + err[0]);
      return callback(err, null);
    }
    
    self.dbc.get("gtw:uid:" + user_id + ":username", function(err, result) {
      username = result;
      this.closeConnection();
      
      // create user model and assign values
      user = self.model.fromString([user_id, username].join("|"));
      
      return callback(err, user);
    });
  });
};	

AuthRepository.prototype.closeConnection = function() {
	self.dbc.end();
};

AuthRepository.prototype.callback = function(cb) {
	self.dbContext.db(cb);
};

module.exports = AuthRepository;