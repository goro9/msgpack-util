const msgpack = require('msgpack');
const fs = require('fs');

const inputModule = process.argv[2];
console.log(inputModule);

const data = require(inputModule);

console.log(data.data);

var msgpackObject = msgpack.pack(data.data);
console.log(msgpackObject);

// console.log(msgpackObject);

const outputPath = process.argv[3];
fs.writeFileSync(outputPath, msgpackObject);
