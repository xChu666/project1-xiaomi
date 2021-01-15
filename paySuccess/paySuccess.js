$(function(){
	
	//等待动态小点
	setInterval(function(){
		$(".payying").html("支付中.");
		setTimeout(function(){
			$(".payying").html("支付中..");
			setTimeout(function(){
				$(".payying").html("支付中...");
			},500)
		},500)
	},1500)
	
	
	
	//5秒后自动支付成功
	setTimeout(function(){
		$(".payWay").css("display","none");
		$(".container2").css("display","none");
		$(".container").css("display","block");
		setTimeout(function(){
			location.assign("../index/index.html")
		},6000)
	},5000)
	
	
})