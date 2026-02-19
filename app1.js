const { log } = require('console')
const os = require('os')

const user = os.userInfo()


console.log(`the user uptime is ${os.uptime()} seconds`);

