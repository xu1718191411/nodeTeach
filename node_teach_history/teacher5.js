var http = require("http")

var server = http.createServer(cb)

function cb(req,res){
    res.write("hello World")
    res.end()
    console.log("hello World")
}


server.listen(5000)
console.log("server is listening at 5000")