const os = require('os')

// info about current user
const user = os.userInfo()

// method returns the system uptime in seconds
console.log(`The system Uptime is ${os.uptime()} seconds`)

// Information about the local operation system
const currentOS = {
   name: os.type(),
   release: os.release(), 
   totalMem: os.totalmem(),
   freeMemory: os.freemem()
} 
console.log(currentOS);
