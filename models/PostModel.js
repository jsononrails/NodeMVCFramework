// /models/PostModel.js

var Model = require("./Base"),
	model = new Model();
	
var PostModel = model.extend({
  
	 Post: function(pid,uid,username,body,time,version) {
     this.id       = pid;
     this.uid      = uid;
     this.username = username;
     this.body     = body;
     this.time     = time;
     this.version  = version;
  },
	
  fromDelimitedString: function(string) {
      var pieces = string.split('|');
      return new Post(parts[1],parts[2],parts[3],parts[5],parts[4],parts[0]);
  },
 
  fromString: function(string) {
     return this.fromDelimitedString(string);
  },
	
  currentVersion: 1
});

module.exports = PostModel;