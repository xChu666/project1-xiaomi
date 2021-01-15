$(function() {
	//邮箱/手机号码/小米ID
	//登录事件
	var box1 = /\w/;
	$("#btn").click(function() {
		if ($("#account").val() == "") {
			$("#erroy").html("请输入帐号");
			$("#p-err").css("opacity", "1");
			$("#account").css("border", "1px solid #FF6700")
		} else if(box1.test($("#account").val()) == false ){
			$("#erroy").html("账号格式错误");
			$("#p-err").css("opacity", "1");
			$("#account").css("border", "1px solid #FF6700")
		}
		else if ($("#password").val() == "") {
			$("#erroy").html("请输入密码");
			$("#p-err").css("opacity", "1");
			$("#password").css("border", "1px solid #FF6700")
		}
		//判断账号
		else if ($("#account").val() == "191946986" && $("#password").val() == "19981225") {
			$("#erroy").html("登陆成功");
			$("#p-err").css("opacity", "1");
			localStorage.setItem("user","191946986");
			location.assign("../index/index.html");
		} else {
			$("#erroy").html("用户名或密码不正确");
			$("#p-err").css("opacity", "1");
			$("#account").css("border", "1px solid #FF6700")
		}

	})

	function css1() {
		$("#account").css("border", "1px solid #E0E0E0");
		$("#password").css("border", "1px solid #E0E0E0");
		$("#p-err").css("opacity", "0");
	}
	//输入框状态
	$("#account").keypress(function() {
		css1();
	})
	$("#password").keypress(function() {
		css1();
	})

	//手机号登录
	//登录事件
	var box2 = /^1\d{10}$/;
	$("#btn-phone").click(function() {
		console.log(22222);
		if ($("#phone").val() == "") {
			$("#erroy-phone").html("请输入手机号");
			$("#p-err-phone").css("opacity", "1");
			$("#phonelog .qu").addClass("upzuokuang");
			$("#phone").addClass("upyoukuang");
		} else if (box2.test($("#phone").val()) == false) {
			$("#erroy-phone").html("手机号格式不正确");
			$("#p-err-phone").css("opacity", "1");
			$("#phonelog .qu").addClass("upzuokuang");
			$("#phone").addClass("upyoukuang");
		} else if ($("#SMS").val() == "") {
			$("#erroy-phone").html("请输入短信验证码");
			$("#p-err-phone").css("opacity", "1");
			$("#SMS").addClass("dowzuokuang");
			$("#phonelog .get").addClass("dowyoukuang");
			$("#phonelog .qu").removeClass("upzuokuang");
			$("#phone").removeClass("upyoukuang");
		}
		//判断账号
		else if ($("#phone").val() == "17686431861" && $("#SMS").val() == "199812") {
			$("#erroy-phone").html("登陆成功");
			$("#p-err-phone").css("opacity", "1");
			localStorage.setItem("user","191946986");
			location.assign("../index/index.html");
		} else {
			$("#erroy-phone").html("短信验证码不正确");
			$("#p-err-phone").css("opacity", "1");
			$("#SMS").addClass("dowzuokuang");
			$("#phonelog .get").addClass("dowyoukuang");
		}
	})
	//输入框状态
	function css2() {
		$("#phonelog .qu").removeClass("upzuokuang");
		$("#phone").removeClass("upyoukuang");
		$("#SMS").removeClass("dowzuokuang");
		$("#phonelog .get").removeClass("dowyoukuang");
		$("#p-err-phone").css("opacity", "0");
	}
	$("#phone").keypress(function() {
		css2();
	})
	$("#SMS").keypress(function() {
		css2();
	})
	
	//卡片切换
	$("#way").click(function(){
		$("#otherlog").css("display","none");
		$("#phonelog").css("display","block");
	})
	$("#way-phone").click(function(){
		$("#otherlog").css("display","block");
		$("#phonelog").css("display","none");
	})
	//扫码登录切换
	$("#switch").click(function(){
		$("#number").css("display","none");
		$("#Scan").css("display","block");
	})
	$("#switch-s").click(function(){
		$("#number").css("display","block");
		$("#Scan").css("display","none");
	})
	//提示框
	$("#icon").click(function(){
		$("#tishi").css("display","block");
	})
	$("#colse").click(function(){
		$("#tishi").css("display","none");
	})
	//跳转注册
	$("#lijizc").click(function(){
		location.assign("../reg/reg.html")
	})

})
