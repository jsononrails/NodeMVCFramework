var IPostRepository = require('../../abstract/repositories/IPostRepository'),
    postModel = new(require("../../../models/PostModel")),
    redisClient = require("../../../data/redis"),
    self;


var PostRepository  = function() {
	self = this;
	self.dbc = redisClient;
	self.model = model;
};

PostRepository .prototype = Object.create(IPostRepository);

PostRepository .prototype.insert = function(item, callback) {
  var userid = 1,
      status = item.replace(/\n/g, " "),
      post = [userid, Date.now(), status].join("|"),
      newPostId = null;
  
  self.dbc.incr("global:nextPostId", function(err, postid) {
    newPostId = postid;
    
    self.dbc.set("post:" + postid, post);
    self.dbc.smembers("uid:" + userid + ":followers", function(err, followers) {
      if(!followers) {
        followers = [];
      }
      followers.push(userid);
      followers.forEach(function(fid) {
        self.dbc.lpush("uid:" + fid + ":posts", postid);
      });
      self.dbc.lpush("global:timeline", postid);
      self.dbc.ltrim("global:timeline", 0, 1000);
    });
  }); 
  callback(err, newPostId);
};	

PostRepository .prototype.update = function(item, id, callback) {
	 //var postData = post.fromString("23|1|jsononrails|this is my first post|12:00:00:00pm|1");
  //console.log(postData);
};

// gets a list of all posts
PostRepository.prototype.getlist = function(callback) {
  var postData = post.fromString("23|1|jsononrails|this is my first post|12:00:00:00pm|1");
  console.log(postData);
};

PostRepository.prototype.closeConnection = function() {
	self.dbc.end();
};

PostRepository .prototype.get = function(id, callback) {
	
};

PostRepository .prototype.delete = function(id, callback) {
	
};


PostRepository.prototype.callback = function(cb) {
	self.dbContext.db(cb);
};