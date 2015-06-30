
const space = "&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;";

var contents = [];
var pages = [];
pages[0] = [];

var pageNow = 0;

var pageindexNow = 0;

for(i=0;i<30;i++){
	contents[i] = [];
	contents[i].number = "";
	contents[i].cname = "cname"+i;
	contents[i].writer = "writer"+i;
	contents[i].date = "2014.5.21";
}


$(document).ready(function(){
	var zerocount = contents.length.toString().length - 1;

	for(i=0,pg=0;i<contents.length;i++){
		var i_zcount = (i+1).toString().length - 1;
		var zeros = "";
		for(j=0;j<zerocount - i_zcount;j++) zeros += "0";
		contents[i].number = zeros + (i+1);
		pages[pg].push(contents[i]);
		if(i%15==14) { pg++; pages[pg] = []; }
	}

	for(i=0;i<15;i++){
			$("#noticebox ul").append("<li><div class='pcursor'>" + contents[i].number + space
			+ contents[i].cname + "</div><div><div>◀</div></div></li>");
	}


	var indexcount = Math.floor(contents.length/9);
	var lastindex = contents.length%9;
	console.log(indexcount);
	console.log(lastindex);
	$("#nboxindex ul li:first-child").click(function(){
		if(pageindexNow>0)pageindexNow--; else return;
		for(i=1;i<=10;i++) $("#nboxindex ul li:nth-child("+(i+1)+")").text(pageindexNow*10+i); 
		if(pageindexNow%10==0)$("#nboxindex ul").css("width",$("#nboxindex ul").width() - 100 + "px");
	});
	$("#nboxindex ul li:last-child").click(function(){
		if(pageindexNow<indexcount-1)pageindexNow++; else return;
		for(i=1;i<=10;i++) $("#nboxindex ul li:nth-child("+(i+1)+")").text(pageindexNow*10+i); 
		if(pageindexNow%10==1)$("#nboxindex ul").css("width",$("#nboxindex ul").width() + 100 +"px");
	});
	for(i=1;i<=indexcount;i++){
		var nloop = (i==indexcount)?lastindex:10;
		for(j=1;j<=nloop;j++){
			if(i==1) $("<li class='pcursor'>"+ j +"</li>").insertBefore("#nboxindex ul li:last-child");
			if(j>1&&j<nloop){
				$("#nboxindex ul li:nth-child("+j+")").click(function(){
					pageNow = $(this).text() - 1;
					for(k=1;k<=15;k++){
						var txt = pages[pageNow][k-1].number + space + pages[pageNow][k-1].cname;
						$("#noticebox ul > li:nth-child(" + (k+1) + ") .pcursor").html(txt);
						//$("<div class='pcursor'>"+txt+"</div>").insertBefore($("#noticebox ul > li:nth-child(" + (j+2) + ") > div:first-child"));
					}
				});
			}
		}
	 }

	for(i=1;i<=$("#noticebox ul").children().length;i++){
		$("#noticebox ul li:nth-child("+i+")").mouseenter(function(){
			var text = contents[pageNow*15 + $(this).index()-1].writer + "  -  " + contents[pageNow*15 + $(this).index()-1].date;

			$(this).children("div:last-child").children("div").css("padding-left", "16px" );
			$(this).children("div:last-child").children("div").css("color","black");
			$(this).children("div:last-child").children("div").css("width",(text.length*8) + "px");
			$(this).children("div:last-child").children("div").text(text);
		});

		$("#noticebox ul li:nth-child("+i+")").mouseleave(function(){
			if(($(this).index()-1)%2==0) $(this).children("div:last-child").children("div").css("color","lightgray");
			else $(this).children("div:last-child").children("div").css("color","white");
			$(this).children("div:last-child").children("div").css("padding-left","5px");
			$(this).children("div:last-child").children("div").css("width","30px");
			$(this).children("div:last-child").children("div").text("◀");
		});
	}
});

