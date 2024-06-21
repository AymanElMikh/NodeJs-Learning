const path = require('path')

console.log(path.sep)

const filePath = path.join('\content','sub-folder','test.txt')
console.log('Relative : ',filePath)

const base = path.basename(filePath)
console.log('Base : ',base)

const absolutePath = path.resolve(__dirname, 'content', 'sub-folder', 'test.txt')
console.log('Absolute : ' ,absolutePath)
