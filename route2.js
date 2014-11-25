var http = require("http")
var url = require("url")

var server = http.createServer(cb)

function cb(req,res){
    var pathname = url.parse(req.url).pathname
    switch(pathname){
        case '/':
            res.end('<h1>This is index page</h1>')
        break;
        case '/list':
            res.end('<h1>This is list page</h1>')
        break;
        case '/post':
            res.end('<h1>This is post page</h1>')
        break;
        default:
            res.end('<h1> This is default page</h1>')
        break;
    }
}

server.listen(8082)