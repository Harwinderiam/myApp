const http = require('http')

http.createServer( (request, response) => {
    console.log("Hello World")
    response.write("Hello World")
    response.end()
}).listen(4000)