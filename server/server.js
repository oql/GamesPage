var app = require('express')();
var http = require('http').Server(app);

app.get('/', function (req, res) {
	res.sendfile( __dirname + '');
});

app.get('/intro', function (req, res)) {
	res.sendfile( __dirname + '');
});

var server = http.listen(3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});

