var http = require("http")

var server = http.createServer(cb)

function cb(req,res){
    var html = "<h1>Hello World</h1>"
    res.writeHead(200,{"Content-type":"text/html"})
    res.write(html)
    res.end()
    console.log("hello World")
}


server.listen(5000)
console.log("server is listening at 5000")