var assert = require('assert');
var msgpack = require('msgpack');

var o = {"a" : 1, "b" : 2, "c" : [1, 2, 3]};
var b = msgpack.pack(o);
var oo = msgpack.unpack(b);

console.log(o);
console.log(b);
assert.deepEqual(oo, o);
