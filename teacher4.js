var http = require("http")

var server = http.createServer(cb)

var cb = function(req,res){
    console.log("hello World")
}


server.listen(5000)
console.log("server is listening at 5000")