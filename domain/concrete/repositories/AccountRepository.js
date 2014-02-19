var IAccountRepository = require('../../abstract/repositories/IAccountRepository'),
    userModel = new(require("../../../models/UserModel")),
    redisClient = require("../../../data/redis"),
    self;


var AccountRepository  = function() {
	self = this;
	self.dbc = redisClient;
	self.model = userModel;
};

AccountRepository.prototype = Object.create(IAccountRepository);

AccountRepository.prototype.signup = function(user, callback) {
  var user,
      username;
  
  self.dbc.get("gtw:auth:" + auth_cookie, function(err, result) {
    var user_id = result;
    
    if(!user_id) {
      err.push("No user_id for cookie found");
      this.closeConnection();
      
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

AccountRepository.prototype.closeConnection = function() {
	self.dbc.end();
};

AccountRepository.prototype.callback = function(cb) {
	self.dbContext.db(cb);
};

module.exports = AccountRepository;