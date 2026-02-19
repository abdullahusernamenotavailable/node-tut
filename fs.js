const {readFileSync, writeFileSync, read} = require('fs')

const first = readFileSync('./hello.txt', 'utf8')

console.log(first)