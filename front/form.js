$(document).ready(function(){

	for(i=1;i<=$("#sidemenu #sideback").children().length;i++){
		$("#sidemenu #sideback li:nth-of-type("+i+")").mouseenter(function(){
			$(this).children("div").css("visibility","visible");
		});
		
		$("#sidemenu #sideback li:nth-of-type("+i+")").click(function(){
			$(window).scrollTo($("#s"+($(this).index()+1)),800,{ duration: 'slow', easing:'easeOutQuart'});
		});
		
		$("#sidemenu #sideback li:nth-of-type("+i+")").mouseleave(function(){
			$(this).children("div").css("visibility","hidden");
		});
	}

 	$("#login > div").click(function(){
 		$("#loginlayout").fadeOut(0);
 		$("#loginlayout").css("visibility","visible");
 		$("#loginwindow").css("visibility","visible");
 		$("#loginwindow").addClass("bounceIn");
 		$("#loginlayout").fadeIn(500);
 		if($(window).height() > $("html").height())
 			$("#loginlayout").css("height",$(window).height());
 		else
 			$("#loginlayout").css("height",$("html").height());
 		$("#loginwindow").css("margin-top",$(window).height()/2 - $("#loginwindow").height()/2);
 	});

 	$("#exit div").click(function(){
 		$("#loginwindow").removeClass("bounceIn");
 		$("#loginlayout").fadeOut(500);
 	});

 	$.ajax({
 		type: 'POST',
 		url: '/login',
 		data: loginform,
 		success: function(data, textStatus, request){
 			alert('성공');
 		}
 	})
});

