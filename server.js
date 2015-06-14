express = require('express');
var app = express();


app.get('/', function (req, res) {
	res.sendfile( __dirname + '/front/index.html');
});


app.get('/intro', function (req, res) {
	res.sendfile( __dirname + '/front/intro.html');
});

app.get('/notice', function (req, res){
	res.sendfile( __dirname + '/front/notice.html');
});

app.get(/\/.*.css/, function(req, res){
	res.sendFile(__dirname + "/front"+req.path);
});

app.get(/\/.*.js/, function(req, res){
	res.sendFile(__dirname + "/front"+req.path);
});

app.get(/\/.*.png/, function(req, res){
	res.sendFile(__dirname + "/front"+req.path);
});

app.get('/jquery', function (req, res){
	res.sendfile( __dirname + '/front/jquery-1.11.1.js');
});


var server = app.listen(process.env.PORT||3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});
