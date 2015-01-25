var map = require("through2-map").obj;
var get_prop = require("get-prop");

module.exports = function(prop) {
	return map(function(data){
		return get_prop(data, prop);
	});
}
