$(function(){
	var box = /^1\d{10}$/;
	//显示提示
	function show(){
		$("#error").css("opacity","1");
		$("#phone-num").css("border","1px solid #FF6666")
	}
	//隐藏提示
	function hidden(){
		$("#error").css("opacity","0");
		$("#phone-num").css("border","1px solid #E8E8E8")
	}
	//失去焦点时
	$("#num-phone").blur(function(){
		if($("#num-phone").val() == ""){
			show();
		}else if(box.test($("#num-phone").val()) == false){
			$("#erroy-info").html("手机号格式错误");
			show();
		}
	})
	//输入  提示消失
	$("#num-phone").keypress(function(){
		hidden();
	});
	
	//点击注册事件
	$("#btn").click(function(){
		if($("#num-phone").val() == ""){
			show();
		}else if(box.test($("#num-phone").val()) == false){
			$("#erroy-info").html("手机号格式错误");
			show();
		}else{
			$("#approved").slideDown(200,function(){
				$("#approved").css("display","block")
			});
			setTimeout(function(){
				$("#input").css("display","none");
				$("#angry").css("display","none");
				$("#receiveCode").css("display","block")
			},500);
			// 获取发送手机号
			$("#getPhone").html("+86 " + $("#num-phone").val());
			
			
			// 验证码倒计时
			var timeDown = 120;
			var timeD = setInterval(function(){
				timeDown--;
				$("#countDown").html("（" + timeDown + "）");
				if(timeDown == 0){
					clearInterval(timeD);
					$("#countDown").css("opacity","0");
					$("#reg_yzm div").css("color","#000");
				}
			},1000);
			
			//重新获取
			// $("#reg_yzm div").click(function(){
			// 	timeDown = 120;
			// 	timeD;
			// 	$("#countDown").css("opacity","1");
			// 	$("#reg_yzm div").css("color","#9d9d9d");
			// })
			
			//倒计时划过
			$("#reg_yzm").hover(function(){
				if(timeDown > 0){
					$("#reg_yzm").css("cursor","not-allowed");
				}else{
					$("#reg_yzm div").css("color","#9d9d9d")
				};
			},function(){
				if(timeDown > 0){
					$("#reg_yzm").css("cursor","default");
				}else{
					$("#reg_yzm div").css("color","#000")
				};
			});
		}
	});
	//显示提示
	function show2(){
		$("#error2").css("opacity","1");
		$("#reg_yzm").css("border","1px solid #FF6666")
	}
	//隐藏提示
	function hidden2(){
		$("#error2").css("opacity","0");
		$("#reg_yzm").css("border","1px solid #E8E8E8")
	}
	//接收验证码部分
	$("#nextStep").click(function(){
		if($("#regYzm").val() == ""){
			show2();
		}else if($("#regYzm").val() == "199812"){
			$("#approved2").slideDown(200,function(){
				$("#approved2").css("display","block")
			});
			setTimeout(function(){
				$("#approved2").css("display","none");
				location.assign("../index/index.html");
			},500);
		}
	})
	
	//失去焦点时
	$("#regYzm").blur(function(){
		if($("#regYzm").val() == ""){
			show2();
			$("#erroy2-info").html("请输入验证码");
		}else if($("#regYzm").val() == "199812"){
			hidden2();
		}else{
			show2();
			$("#erroy2-info").html("验证码错误或过期");
		}
	})
	//输入  提示消失
	$("#reg_yzm").keypress(function(){
		hidden2();
	});
	//返回上一步
	$("#backtrack").click(function(){
		$("#input").css("display","block");
		$("#angry").css("display","block");
		$("#receiveCode").css("display","none");
		$("#approved").css("display","none");
	})
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
})