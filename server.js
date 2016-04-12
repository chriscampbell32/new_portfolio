//serve it up serve it up
var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var PORT = process.env.PORT || 8080;


//PORT listening
app.listen(PORT, function(req,res){
    console.log('server is listening on port %s', PORT)
});
