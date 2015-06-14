express = require('express');
var bodyParser = require("body-parser");
var app = express();
app.use(bodyParser.urlencoded({ extended: false }));


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
	var query = connection.query('select * from doc',function(err,rows){
		var response = genDoc(rows);
		res.writeHead(200, {"Content-Type": "text/html"});
		res.end(response);
    });

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



var server = app.listen(process.env.PORT||3000, function () {

  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);

});


app.get('/edit', function (req, res) {
	res.sendfile( __dirname + '/front/edit.html');
});

var mysql = require("mysql");

// fix user, password and database to fit in your system
var connection = mysql.createConnection({
	host: "localhost",
	port: 3306,
	user: "root",
	password: "321654",
	database: "test"
});

connection.connect(function(err){
	if(err){
		console.log("mysql connection error");
		console.log(err);
		throw err;
	}
});

app.post('/saveArticle',function(req,res){
    var user = {
		nick:req.body.user,
		title:req.body.title,
        text:req.body.article
	};

    var query = connection.query('insert into doc set ?', user ,function(err,result){
        if (err) {
            console.error(err);
            throw err;
        }
		res.redirect('/');
    });
});

function genDoc(data){
	var response = '<!DOCTYPE html>' +
	'<html>' +
	'<head>' +
	'	<meta charset="utf-8">' +
	'	<link rel="stylesheet" type="text/css" href="/form.css"/>' +
	'	<link rel="stylesheet" type="text/css" href="/notice.css"/>' +
	'	<script src="/jquery"></script>' +
	'	<script src="/form.js"></script>' +
	'	<script src="/notice.js"></script>' +
	'	<title>게임즈 공지사항</title>' +
	'</head>' +
	'<body>' +
	'<div id="all">' +
	'	<div id="sidemenu">' +
	'		<ul id="sideback">' +
	'			<li><div class="nodrag, pcursor">이곳은</div></li>' +
	'			<li><div class="nodrag, pcursor">게임즈</div></li>' +
	'			<li><div class="nodrag, pcursor">공지사항</div></li>' +
	'			<li><div class="nodrag, pcursor">입니다.</div></li>' +
	'		</ul>' +
	'	</div>' +
	'	<header>' +
	'		<div id="login" class="pcursor"><div class="nodrag">로그이ㄴ</div></div>' +
	'		<div><a href="/"><img class="nodrag" src="/res/logo.png"></a></div>' +
	'	</header>' +
	'	<nav>' +
	'		<ul class="noselect">' +
	'			<a href="/intro"><li>소개</li></a>' +
	'			<a href="/notice"><li>공지사항</li></a>' +
	'			<a href="#"><li>일감</li></a>' +
	'			<a href="#"><li>게임</li></a>' +
	'			<a href="#"><li>게시판</li></a>' +
	'		</ul>' +
	'	</nav>' +
	'	<div id="contents">' +
	'		<section>' +
	'			<h1>공지사항</h1>' +
	'			<hr>' +
	'			<div id="noticebox">' +
	'				<ul>' +
	'					<li>&nbsp;번호&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제목</li>';
	for(i = 0; i < data.length; i++){
		response += 	'<li>' +
						'	<div class="pcursor">'
							+ data[i].did + '&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp' + data[i].title +
						'	</div>' +
						'	<div>' +
						'		<div>◀</div>' +
						'	</div>' +
						'</li>';
	}
	response += 	'</ul>' +
	'				<ul>' +
	'					<li>&nbsp;번호&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;제목</li>' +
	'				</ul>' +
	'			</div>' +
	'			<div id="nboxindex">' +
	'				<ul>' +
	'					<li class="pcursor">◀</li>' +
	'					<li class="pcursor">▶</li>' +
	'				</ul>' +
	'			</div>' +
	'			<hr>' +
	'		</section>' +
	'	</div>' +
	'	<footer>' +
	'		copyleft (c) 2015 for everyone in the world' +
	'	</footer>' +
	'	<div id="loginlayout">' +
	'		<div id="loginwindow">' +
	'			<a href="#"><div id="exit" class="nodrag"><div>X</div></div></a>' +
	'			<div id="loginimage"><img src="/res/login.png"></div>' +
	'			<div>' +
	'				*보안을 위해 아이디와 비밀번호를 10만 글자까지 입력가능하게 했습니다. <br>' +
	'				<form method="POST">' +
	'					<input type="text" name="id" size="70" maxlength="100000" placeholder="아이디"> <br>' +
	'					<input type="password" name="password" size="70" maxlength="100000" placeholder="비밀번호"> <br>' +
	'					<input type="submit" value="로그인/가입" style="width:523px;margin-right:5px;">' +
	'				</form>' +
	'			</div>' +
	'		</div>' +
	'	</div>' +
	'</div>' +
	'</body>' +
	// '<script>' +
	// '$(document).ready(function(){' +
	// '	console.log($("#noticebox ul").children().length);';
	// for(i=1;i <= data.length; i++){
	// 	response +=
	//
	// '		$("#noticebox ul li:nth-child("+i+")").mouseenter(function(){' +
	// '			var text = ' + data[i].nick + "  -  " + data[i].date + ';' +
	// '			$(this).children("div:last-child").children("div").css("padding-left", "16px" );' +
	// '			$(this).children("div:last-child").children("div").css("color","black");' +
	// '			$(this).children("div:last-child").children("div").css("width",(text.length*8) + "px");' +
	// '			$(this).children("div:last-child").children("div").text(' + data[i].nick + "  -  " + data[i].date + ');' +
	// '		});' +
	// '		$("#noticebox ul li:nth-child("+i+")").mouseleave(function(){' +
	// '			if(($(this).index()-1)%2==0) $(this).children("div:last-child").children("div").css("color","lightgray");' +
	// '			else $(this).children("div:last-child").children("div").css("color","white");' +
	// '			$(this).children("div:last-child").children("div").css("padding-left","5px");' +
	// '			$(this).children("div:last-child").children("div").css("width","30px");' +
	// '			$(this).children("div:last-child").children("div").text("◀");' +
	// '		});'
	// 	}
	// '});' +
	// '</script>'+
	'</html>';
	return response;
}
