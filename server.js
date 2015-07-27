express = require('express');
var app = express();
var bodyParser = require('body-parser');

var mysql = require('mysql');

app.use(bodyParser.urlencoded({extended: false}));

var connection = mysql.createConnection({
	host: 'localhost',
	port: 8080,
	user: 'root',
	password: 'qwerty',
	database: 'games_page'
});

connection.connect(function(err) {
    if (err) {
        console.error('mysql connection error');
        console.error(err);
        throw err;
    }
});


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

app.get('/index.css', function (req, res){
	res.sendfile( __dirname + '/front/index.css');
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

app.get('/jquery-ui.css', function (req, res){
	re.sendfile( __dirname + '/font/jquery-ui.min.css');
});

app.get('/jquery-ui.js', function (req, res){
	res.sendfile( __dirname + '/front/jquery-ui.min.js');
});

app.post('/login', function (req, res){
	var user = { 
		id: req.body.id,
		password: req.body.password
	};
	var query = connection.query('insert into user set ?',user,function (err, result){
		if(err) {
			console.log(err);
			throw err;
		}
		console.log(query);
		res.send(200,'success');
	})
	res.end('ok');
});

var server = app.listen(80, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});



