var express = require('express')
var app = express()
var path = require('path')
var port = 3000

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/views/index.html"))
})

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname+"/views/todo.json"))
})



app.use(express.static(__dirname+"/views"))

app.listen(port, function(){
    console.log("Connected at port: " + port)
})


/* Send the HTTP header
* HTTP Status: 301 : Moved Permanently
* Location:'http://' +  'The host of the requested location' + the path to the page that you want to be redirected to.
*/
app.use('/', function(req,res){
    res.redirect(301, 'http://localhost:3000/')
})


