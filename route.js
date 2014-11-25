/**
 * Created by villa on 11/25/14.
 */

var http = require('http')
var url = require('url')

var server = http.createServer(cb)
function cb(req,res){
    var urls = url.parse(req.url)
    var pathname = urls.pathname

    switch(pathname){
        case '/':
            res.end('This is index page')
            break;
        case '/list':
            res.end('This is list page')
            break;
        case '/post':
            res.end('This is post page')
            break;
        default :
            res.end('This is default page')
            break;
    }

}

server.listen(8081)