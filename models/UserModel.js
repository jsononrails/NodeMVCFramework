// /models/UserModel.js

var Model = require("./Base"),
	  model = new Model();
	
var UserModel = model.extend({
  
  User: function(user_id, name, gender, profile_url, validate_function) {
     this.user_id  		= user_id;
     this.name 	   		= name;
	 this.gender   		= gender;
	 this.profile_url 	= profile_url;
     this.status   		= status;
     this.validate 		= validate_function;
  },
	
  from_deliminited_string: function(string) {
      var pieces = string.split('|');
      return new this.User(pieces[0],pieces[1], this.Validate);
  },
 
  from_string: function(string) {
     return this.fromDelimitedString(string);
  },
	
  Validate: function(callback) {
    errors = [];
    
    // has valid user id?
    if(this.user_id.length == 0) {
      errors.push("User not found");
    }
    
    if(errors.length == 0)
       errors = null;
       
    callback(errors);
  },
 
  currentVersion: 1
});

module.exports = UserModel;