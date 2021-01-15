$(function(){
	//判断浏览器是否存数据
	if(localStorage.getItem("user") == null){
		$("#mycontent").css("display","block");
		$("#logged").css("display","none");
	}else{
		$("#mycontent").css("display","none");
		$("#logged").css("display","block");
		console.log();
	}
	// 点击logo
	$("#logo").click(function(){
		location.assign("../index/index.html");
	});
	//下载APP
	$("#downAPP").click(function(){
		open("../downloadAPP/downloadAPP.html");
	});
	//资质协议
	$("#protocol").click(function(){
		open("../protocol/protocol.html");
	});
	//证照
	$("#license").click(function(){
		open("../license/license.html");
	});
	//跳转购物车
	$("#cart").click(function(){
		open("../shoppingCart/shoppingCart.html");
	});
	// 下滑高度
	window.onscroll = function() {
		var tall = document.documentElement.scrollTop;
		// console.log(document.documentElement.scrollTop);
		if (tall > 485) {
			// $("#menu-nav").slideDown(500);
			$("#menu-nav").css({
				position: "fixed",
				borderBottom: "1px solid #E3E1E2",
			});
			$("#fenlei").css("display", "block");
		} else {
			$("#menu-nav").css({
				position: "relative",
				borderBottom: "none"
			});
			$("#fenlei").css("display", "none");
		}
	};
	//划过
	$("#fenlei").hover(function() {
		$("#aside").css("display", "block");
	}, function() {
		$("#aside").css("display", "none");
	});
	
	//搜索框变化
	$("#sousuo").focus(function() {
		// console.log($('#sousuo'));
		$("#search").css("border-bottom", "1px solid #9F8052");
		// console.log($('#search'));
	});
	$("#sousuo").blur(function() {
		$("#search").css("border-bottom", "1px solid #E7E7E7");
	});
	
	//登录弹框
	var denlgu = function() {
		$("#log").attr("xxx", 1);
		console.log($("#log").attr("xxx"));
		$("#tan-son").slideDown(500);
		$("#tankuang").css("display", "block");
	};
	// console.log(denlgu);
	$("#log").click(denlgu);
	//注册弹框
	var zhuce = function() {
		$("#tan-son").slideDown(500);
		$("#tankuang").css("display", "block");
	}
	$("#reg").click(zhuce)
	//点击/不同意 关闭
	$("#close").click(function() {
		$("#tankuang").css("display", "none");
		history.go(0);
	});
	$("#bot-rgt").click(function() {
		$("#tankuang").css("display", "none");
		history.go(0);
	});
	
	// 登录跳转
	
	
	$("#bot-lft").click(function() {
		if ($("#log").attr("xxx") == 1) {
			location.assign('../log/log.html');
		} else {
			location.assign('../reg/reg.html');
		}
	});
	
	//回到顶部
	$("#goTop").click(function() {
		$("html,body").animate({
			"scrollTop": 0
		});
	});
	
	//退出登录
	$("#dropOut").click(function(){
		localStorage.removeItem('user');
		setTimeout(function(){
			location.assign("../index/index.html")
		},500)
	})
	
	
	// 个人中心转接
	$("#indexOrder").click(function(){
		location.assign("../personalCenter/myOrder/myOrder.html")
	});
	$("#indexRefund").click(function(){
		location.assign("../personalCenter/myOrder/myOrder.html")
	});
	$("#indexAssets").click(function(){
		location.assign("../personalCenter/myAssets/myAssets.html")
	});
	$("#indexCollection").click(function(){
		location.assign("../personalCenter/myCollection/myCollection.html")
	});
	$("#indexAddress").click(function(){
		location.assign("../personalCenter/myAddress/myAddress.html")
	});
	
	
	
})