var streamArray = require("stream-array");
var getProp = require("./");
var stdout = require("stdout");

var data = [{
	foo: {
		bar: "Baz"
	}
}, {
	foo: {
		bar: "Fizz"
	}
}];

streamArray(data).pipe(getProp("foo.bar")).pipe(stdout());
