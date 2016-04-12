var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080;


app.use(express.static("public"));
app.use(express.static("views"));

//routes 
app.get('/', function(req,res){
    res.sendFile(process.cwd() + '/views/homepage.html');
});


//PORT listening
app.listen(PORT, function(req,res){
    console.log('server is listening on port %s', PORT)
});
