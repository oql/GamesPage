
var contents = [];
var pages = [];
pages[0] = [];

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
	console.log(pages);

	for(i=0;i<15;i++){
			$("#noticebox ul:first-child").append("<li><div class='pcursor'>" + contents[i].number + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
			+ contents[i].cname + "</div><div><div>◀</div></div></li>");
	}

	for(i=1;i<=9;i++){
		$("<li class='pcursor'>"+ i +"</li>").insertBefore("#nboxindex ul li:last-child");
		if(i>1&&i<9){
			$("#nboxindex ul li:nth-child("+i+")").click(function(){
					//$("#noticebox").css("transform","rotateY(180deg)");
					//$("#noticebox2").css("transform","rotateY(360deg)");
					for(i=0;i<15;i++){
						$("#noticebox ul:last-child").append("<li><div class='pcursor'>" 
							+ pages[$(this).text()-1][i].number + "&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp"
							+ pages[$(this).text()-1][i].cname + "</div><div><div>◀</div></div></li>");		
					}
			});
		}
	}

	for(i=1;i<=$("#noticebox ul").children().length;i++){
		$("#noticebox ul li:nth-child("+i+")").mouseenter(function(){
			var text = contents[$(this).index()-1].writer + "  -  " + contents[$(this).index()-1].date;

			$(this).children("div:last-child").children("div").css("padding-left", "16px" );
			$(this).children("div:last-child").children("div").css("color","black");
			$(this).children("div:last-child").children("div").css("width",(text.length*8) + "px");
			$(this).children("div:last-child").children("div").text(
					contents[$(this).index()-1].writer + "  -  " + contents[$(this).index()-1].date);
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

