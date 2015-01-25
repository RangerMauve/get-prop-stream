get-prop-stream
===============

Takes in objects and outputs a certain property from them.

Basically a streaming wrapper over [get-prop](https://www.npmjs.com/package/get-prop).

`npm install --save get-prop-stream`

example
-------

This will output "Baz" and "Fizz" to stdout.

```javascript
var streamArray = require("stream-array");
var getProp = require("get-prop-stream");
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
```
