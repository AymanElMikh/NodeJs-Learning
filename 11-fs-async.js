const {readFile, writeFile} = require('fs');

console.log('Start');

readFile('./content/sub-folder/first.txt' , 'utf8', (err, result) => {
    if(err){
        console.log(err)
        return
    } 
    const first = result
    readFile('./content/sub-folder/second.txt' , 'utf8', (err, result) => {
        if(err){
            console.log(err)
            return
        } 
        const second = result
        writeFile('./content/sub-folder/result-async.txt' ,
        `Here is the result : ${first}, ${second}`,
        {flag : 'a'}, (err) => {
            if(err) {
                console.log(err);
                return
            }
            console.log("Done with this task")
        })
    })
})

console.log("Starting new task");