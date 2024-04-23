const http = require("http");
const server = http.createServer((request, response) => {
  const url = request.url;
    response.setHeader('Content-Type',"text/html")
  if(url==='/home'){
    response.write("Welcome to home page")
  }else if(url=='/about'){
    response.write("Welcome to about page")
  }
  else if(url==='/node'){
    response.write("Welcome to node page")
  }
  response.end();
});

server.listen(4000);
