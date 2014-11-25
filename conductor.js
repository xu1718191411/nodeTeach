var http = require('http')
var url = require('url')
var fs = require('fs')
var server = http.createServer(cb)

function cb(req,res){
    var pathname = url.parse(req.url).pathname

    switch(pathname){
        case '/':
            var html = "<a href='/1'>1</a>|<a href='/2'>2</a>|<a href='/3'>3</a>"
            res.end(html);
            break;
        case '/1':
            fs.readFile('./app.js',function(err,data){
              cb2(err,data,res)
            })
            break;
        case '/2':
            fs.readFile('./route.js',function(err,data){
                cb2(err,data,res)
            })
            break;
        case '/3':
            fs.readFile('./route2.js',function(err,data){
                cb2(err,data,res)
            })
            break;
        default:
            fs.readFile('./app.js',function(err,data){
                cb2(err,data,res)
            })
            break;
    }
}

server.listen(8083)

function cb2(err,data,res){
    if(err) throw err

    res.end(data)
}