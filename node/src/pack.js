const msgpack = require('msgpack');
const fs = require('fs');

const inputPath = process.argv[2];
const outputPath = process.argv[3];

const jsonObject = JSON.parse(fs.readFileSync(inputPath, 'utf8'));

var msgpackObject = msgpack.pack(jsonObject);

// console.log(msgpackObject);

fs.writeFileSync(outputPath, msgpackObject);