const http= require('http');
const server= http.createServer((request,response)=>{
    console.log("Hello Satyam");
})

server.listen(4000)

