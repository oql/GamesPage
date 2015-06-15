
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

/*
	var indexcount = contents.length/9;
	var lastindex = contents.length%9;

	for(i=0;i<=indexcount;i++){
		for(j=1;j<=(i==indexcount)?lastindex:9;j++){
			$("<li class='pcursor'>"+ j +"</li>").insertBefore("#nboxindex ul li:last-child");
			if(j>1&&j<=(i==indexcount)?lastindex:9){
				$("#nboxindex ul li:nth-child("+j+")").click(function(){
					pageNow = $(this).text() - 1;

					for(k=0;k<15;k++){
						var txt = pages[pageNow][j].number + space + pages[pageNow][j].cname;
						$("#noticebox ul > li:nth-child(" + (k+2) + ")").text(txt);
						//$("<div class='pcursor'>"+txt+"</div>").insertBefore($("#noticebox ul > li:nth-child(" + (j+2) + ") > div:first-child"));
					}
				});
			}
		}
	}*/

	for(i=1;i<=$("#noticebox ul").children().length;i++){
		$("#noticebox ul li:nth-child("+i+")").mouseenter(function(){
			var text = contents[$(this).index()-1].writer + "  -  " + contents[$(this).index()-1].date;

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

