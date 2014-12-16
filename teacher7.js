var http = require("http")
var url = require("url")  //tool for urlの分析

var server = http.createServer(cb)

function cb(req,res){
    console.log("Hello World")

    var urlAddress = req.url

    var result = url.parse(urlAddress)
    var pathname = result.pathname
    console.log(pathname)
    if(pathname=="/index"){
        res.writeHead(200,{"Content-type":"text/html"})
        res.write("This is index page")
    }

    if(pathname="/list"){
        res.writeHead(200,{"Content-type":"text/html"})
        res.write("This is list page")
    }

    if(pathname=="/post"){
        res.writeHead(200,{"Content-type":"text/html"})
        res.write("This is post page")
    }


    res.end()

}

server.listen(5000)
console.log("Server is listening at port 5000")

