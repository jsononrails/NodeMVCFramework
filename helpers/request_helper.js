var RequestHelper = function() {

};

RequestHelper.prototype.get_argument = function(req, property, default_value) {
  if(req.query != undefined && req.query[property] != undefined) {
    return req.query[property];
  }
  
  if(req.body != undefined && req.body[property] != undefined) {
    return req.body[property];
  }
  
  return default_value;
};

module.exports = RequestHelper;