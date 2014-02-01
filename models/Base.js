module.exports = function() {

};

module.exports.prototype = {
	
	extend: function(properties) {
    var Child = function(){};
	    
		Child.prototype = new module.exports();
        for(var key in properties) {
            Child.prototype[key] = properties[key];
        }
        
		return Child;
	}
}