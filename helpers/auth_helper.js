var Service = require("../domain/concrete/services/AuthService.js");

var AuthHelper = function() {
  var self = this,
      self.service = new Service();
};

AuthHelper.prototype.get_current_user = function(req, res, callback) {
  var auth_cookie = req.cookies.auth;
  
  if(!auth_cookie) {
    console.log("no auth cookie; user not logged in");
    return callback(req, res, null);
  }
  
  // call service
  self.service.get_current_user(auth_cookie, function(err, user) {
    if(!err) {
      return callback(req, res, user);
    } else {
      return callback(req, res, null);
    }
  });
};

module.exports = AuthHelper;