$(document).ready(function(){
	
	$("#answer").click(function(){
		var input = $("#input").val();
		if (input.toLowerCase() == "yes"){
			//$(document.body).css("background-color", "blue");
			$("#bgvid").show();
			$("#bgvid").get(0).play();
			$("#holder").animate({
				opacity: 0,
				left: "+=50",
				height: "toggle"
			}, 2000, function() {
			// Animation complete.
			});
		}
	});
});