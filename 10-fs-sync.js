const {readFileSync, writeFileSync} = require('fs');

console.log('start')
const first = readFileSync('./content/sub-folder/first.txt', 'utf8')
const second = readFileSync('./content/sub-folder/second.txt', 'utf8')

writeFileSync('./content/sub-folder/result-sync.txt',
                `Here is my result : ${first}, ${second}`,
                {flag : 'a'})

console.log('done with this task')
console.log('starting with the next one')