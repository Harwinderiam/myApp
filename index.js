const http = require('http')
const express = require('express')
const app = express()

app.get("/", (req,res) => {
    res.sendFile("form.html", {root : "."})
})

http.createServer(app).listen(4000)

/*http.createServer( (request, response) => {
    console.log("Hello World")
    response.write("Hello World")
    response.end()
}).listen(4000)*/