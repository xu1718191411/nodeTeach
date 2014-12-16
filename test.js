var connect = require("connect")
var url = require("url")
var http = require("http")

var app = connect()
app.use(fun1)
app.use(fun2)


function fun1(req,res,next){
    var pathname = url.parse(req.url).pathname
    if(pathname == "/"){
        res.write("This is fun1")
        res.end()
    }else{
        console.log("fun1 step next")
       return next()
    }
}

function fun2(req,res,next){
    var pathname = url.parse(req.url).pathname
    console.log("fun2 step in")
    if(pathname == "/list"){
        res.write("This is fun2")
        res.end()
    }else{
        return next()
    }
}

app.listen(8080)
