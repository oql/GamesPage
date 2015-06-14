
var contents = [];
for(i=0;i<101;i++){
	contents[i] = [];
	contents[i].number = "";
	contents[i].cname = "cname"+i;
	contents[i].writer = "writer"+i;
	contents[i].date = "2014.5.21";
}
$(window).load(function(){
	console.log($("#noticebox ul").children().length);
	for(i=1;i <= $("#noticebox ul").children().length;i++){
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
		console.log(i);
	}
});
