$(function() {
	// 接收数据
	var d = location.search.slice(1);
	// console.log(d);

	//传商品
	$(
		`
	<div class="goodsImage">
		<img src="../${arr[d].img}">
	</div>
	<div class="goodsName">${arr[d].info}</div>
	<div class="purchaseQuantity"><span>${arr[d].price}</span>元 × <span>1</span></div>
	<div class="goodsTotal">￥<span id="zong">${arr[d].price}</span>.00</div>
	
	`
	).appendTo($("#goodsInfo"));


	//更多收货地址
	$("#moreAddress").click(function() {
		$("#moreI").toggleClass("fa-angle-up");
		$("#moreI").toggleClass("fa-angle-down");
		if ($("#moreI").hasClass("fa-angle-down")) {
			$("#moreAddress p span").html("显示更多收货地址");
			$("#addressList").css("height", "212px")
		} else if ($("#moreI").hasClass("fa-angle-up")) {
			$("#moreAddress p span").html("收起更多收货地址");
			$("#addressList").css("height", "auto");
		}
	});

	//限制输入
	var maxChars = 45; //最多字符数
	$("#comments").keydown(function() {
		if ($("#comments").val().length > maxChars) {
			$("#comments").val($("#comments").val().substring(0, maxChars));
		}
	});
	$("#comments").focus(function() {
		$("#comments").css("border", "1px solid #845F3F")
	});
	$("#comments").blur(function() {
		$("#comments").css("border", "1px solid #E7E7E7")
	});
	//box_1焦点
	$("#invoiceTwoBox .box_1 input").focus(function() {
		$("#invoiceTwoBox div input").removeClass("inputBorder");
		$("#invoiceTwoBox div input").eq($(this).index()).addClass("inputBorder");
	});
	$("#invoiceTwoBox .box_1 input").blur(function() {
		$("#invoiceTwoBox div input").removeClass("inputBorder");
	});
	//box_2焦点
	$("#invoiceTwoBox .box_2 input").focus(function() {
		$("#invoiceTwoBox div input").removeClass("inputBorder");
		$("#invoiceTwoBox div input").eq($(this).index() + 3).addClass("inputBorder");
	});
	$("#invoiceTwoBox .box_2 input").blur(function() {
		$("#invoiceTwoBox div input").removeClass("inputBorder");
	});
	$("#private").click(function() {
		$("#invoiceTwoBox .box_1").css("display", "block");
		$("#invoiceTwoBox .box_2").css("display", "none");
		$("#private").css("border", "1px solid #845F3F");
		$("#enterprise").css("border", "1px solid #E7E7E7");
	});
	$("#enterprise").click(function() {
		$("#invoiceTwoBox .box_1").css("display", "none");
		$("#invoiceTwoBox .box_2").css("display", "block");
		$("#private").css("border", "1px solid #E7E7E7");
		$("#enterprise").css("border", "1px solid #845F3F");
		op.css("opacity", "0");
	});
	//发票抬头判断
	var taitou = $("#invoiceTwoBox div input").eq(0);
	var op = $("#invoiceTwoBox p");
	taitou.one("click", function() {
		taitou.val("个人");
	});
	taitou.keydown(function() {
		if (taitou.val() == "") {
			op.css("opacity", "1")
		} else if (taitou.val() != "") {
			op.css("opacity", "0")
		}
	});
	taitou.blur(function() {
		if (taitou.val() == "") {
			op.css("opacity", "1")
		} else if (taitou.val() != "") {
			op.css("opacity", "0")
		}
	})

	//结算
	$("#shop_zong").html($("#zong").html());
	$("#heji").html($("#zong").html());


	//去下单
	$("#goBuy").click(function() {
		location.assign("../pay/pay.html?" + d);
		var inf = $(".newsName").html() + " " + $(".phoneNum").html() + " " + $(".newAdd").html() + " " + $(".xiangxi").html();
		localStorage.inf = inf;

	})

	//地址弹框
	//打开
	$("#addressOne").click(function() {
		$("#newAddressBox").css("display", "block")
	});
	//关闭
	$(".newTitle span").click(function() {
		$("#newAddressBox").css("display", "none")
	});
	$("#quxiaoAdd").click(function() {
		$("#newAddressBox").css("display", "none")
	});
	var run = true;
	$(".newAddress").click(function(){
		run = false;
	});
	$(".newAddressBox").click(function(){
		if(run){
			$("#newAddressBox").css("display", "none")
		};
		run = true;
	})
	// 名字
	$("#nameTitle").blur(function() {
		if ($("#nameTitle").val() == "") {
			$(".nameTitle").css("opacity", "1");
			$("#nameTitle").css("border", "1px solid #D54843");
		} else {
			$(".nameTitle").css("opacity", "0");
			$("#nameTitle").css("border", "1px solid #EEEEEE")
		}
	});
	//电话号码
	var box3 = /^1\d{10}$/;
	$("#phoneTitle").blur(function() {
		if ($("#phoneTitle").val() == "") {
			$(".phoneTitle").css("opacity", "1");
			$("#phoneTitle").css("border", "1px solid #D54843");
		} else if (box3.test($("#phoneTitle").val()) == false) {
			$(".phoneTitle").html("手机号格式错误")
			$(".phoneTitle").css("opacity", "1");
			$("#phoneTitle").css("border", "1px solid #D54843");
		} else {
			$(".phoneTitle").css("opacity", "0");
			$("#phoneTitle").css("border", "1px solid #EEEEEE")
		}
	});
	//地址
	$("#addressTitle").blur(function() {
		if ($("#addressTitle").val() == "") {
			$(".addressTitle").css("opacity", "1");
			$("#addressTitle").css("border", "1px solid #D54843");
			$(".postalNum").attr('placeholder', "邮政编号")
		} else {
			$(".addressTitle").css("opacity", "0");
			$("#addressTitle").css("border", "1px solid #EEEEEE");
			$(".postalNum").attr('placeholder', "066666")
		}
	});


	//点击保存
	$("#save").click(function() {
		if ($("#nameTitle").val() == "") {
			$(".nameTitle").css("opacity", "1");
			$("#nameTitle").css("border", "1px solid #D54843");
		} else if ($("#phoneTitle").val() == "") {
			$(".phoneTitle").css("opacity", "1");
			$("#phoneTitle").css("border", "1px solid #D54843");
		} else if ($("#addressTitle").val() == "") {
			$(".addressTitle").css("opacity", "1");
			$("#addressTitle").css("border", "1px solid #D54843");
			$(".postalNum").attr('placeholder', "邮政编号");
		}
		//地区未选提示
		// else if ($("#hcity").val() == "undefined") {
		// 	console.log($("#harea").val());
		// 	console.log($("#hproper").val());
		// 	console.log($("#hcity").val());
		// 	$("#city").css("border", "1px solid #D54843")
		// } 
		else {
			var pho = $("#phoneTitle").val().slice(0, 3) + "****" + $("#phoneTitle").val().slice(7);

			if ($("#harea").val() == undefined) {
				var addr = $("#hcity").val() + " " + $("#hproper").val()
			} else {
				var addr = $("#hcity").val() + " " + $("#hproper").val() + " " + $("#harea").val();
			};
			$("#newAddressBox").css("display", "none");
			$(
				`
				<div class="nweOne">
					<div class="newInfo">
						<div class="newsName">${$("#nameTitle").val()}</div>
						<div class="phoneNum">${pho}</div>
						<div class="newAdd">${addr}</div>
						<div class="xiangxi">${$("#addressTitle").val()}</div>
						<div class="youbian">066666</div>
					</div>
					<span class="deleteAddress">删除</span>
				</div>
			`
			).prependTo($("#addressList"));
		}
		$(".deleteAddress").click(function(){
			$(this).parent().remove();
		})
	})
	
})
