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
      return new this.Post(pieces[0],pieces[1],pieces[2],pieces[3],pieces[4],pieces[5]);
  },
 
  fromString: function(string) {
     return this.fromDelimitedString(string);
  },
	
  currentVersion: 1
});

module.exports = PostModel;