const helloWorld=require('./hello')

console.log("hello world")
//creating a module
helloWorld.hello('NAME')

const http=require('http')

const server=http.createServer((req,res) => {
    if(req.url==='/'){
        res.write('You are on the home directory')
        res.end()
    }
    if(req.url==='/posts'){
        res.write('Hello form post')
        res.end()
    }
})

server.listen(3000)

