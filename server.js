var express = require('express');
var app=express();
var path = require('path');

//viewed at http://localhost:8080
app.get('/',function(req,res){
  res.sendFile(path.join(__dirname+'/home.html'));
});
app.use('/',express.static(__dirname+'/css'));
app.use('/',express.static(__dirname+'/images'));

app.listen(process.env.PORT||8080);
