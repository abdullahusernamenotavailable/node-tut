const names = require('./1');
console.log(names)

const sayhi = require('./utils')

sayhi('susan')
sayhi(names.john)
sayhi(names.samuel)

const reps = require('./alternative')

console.log(reps)

require('./mind')