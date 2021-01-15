$(function(){
	// $("#mySelect li").click(function(){
	// 	$("#mySelect li i").css("opacity","0");
	// 	$("#mySelect li i").eq($(this).index()).css("opacity","1");
	// })
	
	//订单页面
	function hasOrder(){
		$(".myOrder").css("display","none");
		$(".shopOrder").css("display","block")
	}
	function noOrder(){
		$(".myOrder").css("display","block");
		$(".shopOrder").css("display","none")
	}
	$("#myList ul li").click(function(){
		var pay = $("#myList ul li").eq($(this).index());
		if(pay.hasClass("pay1")){
			hasOrder();
		}else{
			noOrder();
		}
	});
	
	
	//登录跳转
	$("#bot-lft").click(function() {
		if ($("#log").attr("xxx") == 1) {
			location.assign('../../log/log.html');
		} else {
			location.assign('../../reg/reg.html');
		}
	});
	
	//退出登录
	$("#dropOut").click(function(){
		localStorage.removeItem('user');
		setTimeout(function(){
			location.assign('../../index/index.html');
		},500)
	})
	
	//点击logo
	$("#logo").click(function(){
		location.assign("../../index/index.html");
	});
	
	//资质协议
	$("#protocol2").click(function(){
		open("../../protocol/protocol.html");
	});
	//证照
	$("#license2").click(function(){
		open("../../license/license.html");
	});
	//跳转购物车
	$("#cart2").click(function(){
		open("../../shoppingCart/shoppingCart.html");
	});
	
	// 个人中心转接
	$("#indexOrder").click(function(){
		location.assign("../../personalCenter/myOrder/myOrder.html")
	});
	$("#indexRefund").click(function(){
		location.assign("../../personalCenter/myOrder/myOrder.html")
	});
	$("#indexAssets").click(function(){
		location.assign("../../personalCenter/myAssets/myAssets.html")
	});
	$("#indexCollection").click(function(){
		location.assign("../../personalCenter/myCollection/myCollection.html")
	});
	$("#indexAddress").click(function(){
		location.assign("../../personalCenter/myAddress/myAddress.html")
	});
	
	//资产-优惠券
	//输入框焦点
	$("#coupon").focus(function(){
		$("#coupon").animate().css("border","1px solid #845F3F");
		$(".couponTitle").css("display","none");
	});
	$("#coupon").blur(function(){
		$("#coupon").css("border","1px solid #e7e7e7");
	})
	//判断输入框
	$(".getButton").click(function(){
		if($("#coupon").val() == ""){
			$(".couponTitle").css("display","block");
		}else if($("#coupon").val() != "vip666"){
			$(".couponTitle").css("display","block");
			$(".couponTitle").html("优惠码不可用,请正确输入");
		}else{
			$(".couponTitle").css("display","block");
			$(".couponTitle").html("恭喜你的账号升级为VIP12")
		}
	});
	//优惠券状态
	$(".couponLi li").click(function(){
		$(".couponLi li").removeClass("liCoupon");
		$(".couponLi li").eq($(this).index()).addClass("liCoupon");
	});
	//下载APP
	$("#downAPP2").click(function(){
		open("../../downloadAPP/downloadAPP.html");
	})





})