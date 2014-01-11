module.exports = function() {

};

module.exports.prototype = {
	
	extend: function(properties) {
		var Child = module.exports;
	    
		Child.prototype = module.exports.prototype;
        for(var key in properties) {
            Child.prototype[key] = properties[key];
        }
        
		return Child;
	}
}