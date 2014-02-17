// /models/PostModel.js

var Model = require("./Base"),
	model = new Model();
	
var PostModel = model.extend({
  
	 Post: function(pid,uid,username,status,time,version, validate_function) {
     this.id       = pid;
     this.uid      = uid;
     this.username = username;
     this.status     = status;
     this.time     = time;
     this.version  = version;
     this.validate = validate_function;
  },
	
  Post: function(status, validate_function) {
    this.status = status;
    this.validate = validate_function;
  },
  
  new_post: function(status) {
    return new this.Post(status, this.Validate);
  },
  
  from_deliminited_string: function(string) {
      var pieces = string.split('|');
      return new this.Post(pieces[0],pieces[1],pieces[2],pieces[3],pieces[4],pieces[5]);
  },
 
  from_string: function(string) {
     return this.fromDelimitedString(string);
  },
	
  Validate: function(callback) {
    errors = [];
    
    // post cannot be empty
    if(this.status.length == 0) {
      errors.push("empty status");
    }
    
    // post cannot exceed 150 characters
    if(this.status.length > 150) {
      errors.push("status exceeds 150 character limit");
    }
    
    if(errors.length == 0)
       errors = null;
       
    callback(errors);
  },
  
  elapsed: function (t) {
    var d = Date.now() -t;
    
    if(d < 60000) {
      return parseInt(d/1000) + " seconds";
    } else if(d < 120000) {
      return "1 minute";
    } else if(d < 3600000) {
      return parseInt(d/60000) + " minutes";
    } else if(d < 7200000) {
      return "1 hour";
    } else if (d < 3600000 * 24) {
      return parseInt(d/3600000) + " hours";
    } else if(d < 3600000 * 48) {
      return "1 day";
    } else {
      return parseInt(d/3600000/24) + " days";
    }
  },
  
  currentVersion: 1
});

module.exports = PostModel;