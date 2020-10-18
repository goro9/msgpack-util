const msgpack = require('msgpack');
const fs = require('fs');

const inputPath = process.argv[2];
const outputPath = process.argv[3];

const msgpackObject = fs.readFileSync(inputPath);

var jsonObject = msgpack.unpack(msgpackObject);

// console.log(jsonObject);

fs.writeFileSync(outputPath, JSON.stringify(jsonObject, null, "    "));