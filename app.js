var http = require("http")

var app = http.createServer(cb)

function cb(req,res){
    res.write('Hello World')
    res.end()
}


app.listen(8080)