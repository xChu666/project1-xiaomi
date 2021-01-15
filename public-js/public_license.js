$(function(){
	$(".close").click(function(){
		$(".header").css("display","none");
	});
	$(".applets div").click(function(){
		$(".applets").css("display","none");
	});
	$(".home").click(function(){
		location.assign("../index/index.html")
	});
	// 下滑高度
	window.onscroll = function() {
		var tall = document.documentElement.scrollTop;
		if (tall > 62) {
			$(".applets").animate({top:"0"},10);
		} else {
			$(".applets").animate({top:"62px"},1);
		}
	};
})