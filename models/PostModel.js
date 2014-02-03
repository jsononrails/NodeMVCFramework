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