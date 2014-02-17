var AuthHelper = function() {

};

AuthHelper.prototype.get_current_user = function(req, res, callback) {
  var user,
      auth_cookie = req.cookies.auth;
  
  if(!auth_cookie) {
    console.log("no auth cookie; user not logged in");
    return callback(req, res, user);
  }
  
  // move get_client to a service and repo pattern? 
  var client = get_client();
  client.get("gtw:auth:" + auth_cookie, function(err, reply) {
    var user_id = reply;
    
    if(!user_id) {
      console.log("No user_id for cookie found in redis ");
      client.end();
      retrun callback(req, res, user);
    }
    
    client.get("gtw:uid:" + user_id + ":username", function(err, reply) {
      username = reply;
      client.end();
      user = { user_id: user_id, username: username };
      return callback(req, res, user);
    });
  });
};

module.exports = AuthHelper;