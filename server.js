express = require('express');
var app = express();


app.get('/', function (req, res) {
	res.sendfile( __dirname + '/front/index.html');
});

app.get('/form.css', function (req, res) {
	res.sendfile( __dirname + '/front/form.css');
});

app.get('/form.js', function (req, res) {
	res.sendfile( __dirname + '/front/form.js');
});

app.get('/intro', function (req, res) {
	res.sendfile( __dirname + '/front/intro.html');
});

app.get('/intro.js', function (req, res) {
	res.sendfile( __dirname + '/front/intro.js');
});

app.get('/notice', function (req, res){
	res.sendfile( __dirname + '/front/notice.html');
});

app.get('/notice.css', function (req, res){
	res.sendfile( __dirname + '/front/notice.css');
});

app.get('/notice.js', function (req, res){
	res.sendfile( __dirname + '/front/notice.js');
});

app.get('/jquery', function (req, res){
	res.sendfile( __dirname + '/front/jquery-1.11.1.js');
});


app.get('/res/logo.png', function (req, res){
	res.sendfile( __dirname + '/front/res/logo.png');
});

app.get('/res/login.png', function (req, res){
	res.sendfile( __dirname + '/front/res/login.png');
});

app.get('/res/banner.png', function (req, res){
	res.sendfile( __dirname + '/front/res/banner.png');
});

var server = app.listen(process.env.PORT||8080, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});



