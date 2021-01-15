$(function() {
	//小图轮播
	var nex = $(this).index() + 1;
	$(".imgs-small .smpic").click(function() {
		$(".imgs-small").find(".smpic").css("border", "1px solid #ECECEC");
		$(".imgs-small").find(".smpic").eq($(this).index() - 2).css("border", "1px solid #845F3F");
		$(".imgs-big").find("img").css("display", "none");
		$(".imgs-big").find("img").eq($(this).index() - 2).css("display", "block");
		nex = $(this).index() - 2;
	});
	//上箭头
	$("#previous").click(function() {
		nex--;
		if (nex == -4) {
			nex = 0;
		}
		$(".imgs-small").find(".smpic").css("border", "1px solid #ECECEC");
		$(".imgs-small").find(".smpic").eq(nex).css("border", "1px solid #845F3F");
		$(".imgs-big").find("img").css("display", "none");
		$(".imgs-big").find("img").eq(nex).css("display", "block");
		nex = nex;
	});
	//下箭头
	$("#next").click(function() {
		nex++;
		if (nex == 4) {
			nex = 0;
		}
		console.log(nex);
		$(".imgs-small").find(".smpic").css("border", "1px solid #ECECEC");
		$(".imgs-small").find(".smpic").eq(nex).css("border", "1px solid #845F3F");
		$(".imgs-big").find("img").css("display", "none");
		$(".imgs-big").find("img").eq(nex).css("display", "block");
		nex = nex;
	});

	//选择颜色
	$(".shop-color").find("div").click(function() {
		// if($(".shop-color").find("div").hasClass("border")){
		$(".shop-color").find("div").removeClass("border");
		// }else{
		$(".shop-color").find("div").eq($(this).index() - 1).addClass("border");
		// }

		if ($(".shop-version").find("div").hasClass("border")) {
			return;
		} else {
			$(".shop-version").find("div").eq(0).addClass("border");
		}
	})
	//选择版本
	$(".shop-version").find("div").click(function() {
		// if($(".shop-version").find("div").hasClass("border")){
		$(".shop-version").find("div").removeClass("border");
		// }else{
		$(".shop-version").find("div").eq($(this).index() - 1).addClass("border");
		// }

		if ($(".shop-color").find("div").hasClass("border")) {
			return;
		} else {
			$(".shop-color").find("div").eq(0).addClass("border");
		}
	})

	//记数量
	var num = $("#shop-count").val() * 1;
	//数量加
	$("#num-add").click(function() {
		num++;
		$("#shop-count").val(num);
		$("#num-less").css("color", "#805E3F");
		if (num > 1) {
			$("#num-less").css("cursor", "default");
		}
	})
	//数量减
	$("#num-less").click(function() {
		if (num > 1) {
			num--;
			$("#shop-count").val(num);
			$("#num-less").css("cursor", "default");
		} else if (num == 1) {
			$("#num-less").css("color", "#ccc");
			$("#num-less").css("cursor", "not-allowed");
		}
	});

	//鼠标样式
	$("#num-less").hover(function() {
		if (num == 1) {
			$("#num-less").css("cursor", "not-allowed");
		}
	}, function() {
		$("#num-less").css("cursor", "default");
	});

	//底部详情/评论切换
	$("#det-pl").click(function() {
		$("#det-xq").removeClass("det-1");
		$("#det-pl").addClass("det-1");
		$("#detail-img").css("display", "none");
		$("#detail-comment").css("display", "block");
	})
	$("#det-xq").click(function() {
		$("#det-pl").removeClass("det-1");
		$("#det-xq").addClass("det-1");
		$("#detail-img").css("display", "block");
		$("#detail-comment").css("display", "none");
	})

	//评论导航固定
	// 下滑高度
	window.onscroll = function() {
		var tall_detail = document.documentElement.scrollTop;
		if (tall_detail > 729) {
			$("#detail-top").css({
				position: "fixed",
				top: '52px',
			});
		} else {
			$("#detail-top").css({
				position: "relative",
				top: 0,
			});
		};
		//导航部分高度重新写了一遍
		var tall = document.documentElement.scrollTop;
		if (tall > 485) {
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
	//接收数据
	var d = location.search.slice(1) - 1 || 1;
	//加入购物车
	$("#addCart").click(function(){
		if($(".shop-color").find("div").hasClass("border")&&$(".shop-version").find("div").hasClass("border")){
			$("#shopTitle").removeClass("errorTitle");
			$("#shopTitle").addClass("correctTitle");
			$("#shopTitle").html("加入购物车成功");
			setTimeout(function(){
				location.assign("../shoppingCart/shoppingCart.html?" + d);
			},500);
		}else{
			$("#shopTitle").removeClass("correctTitle");
			$("#shopTitle").addClass("errorTitle");
			setTimeout(function(){
				$("#shopTitle").removeClass("errorTitle");
			},500);
		}
	})
	//立即购买
	$("#lijiBuy").click(function(){
		if($(".shop-color").find("div").hasClass("border")&&$(".shop-version").find("div").hasClass("border")){
			setTimeout(function(){
				location.assign("../settlement/settlement.html?" + d);
			},500);
		}else{
			$("#shopTitle").removeClass("correctTitle");
			$("#shopTitle").addClass("errorTitle");
			setTimeout(function(){
				$("#shopTitle").removeClass("errorTitle");
			},1000);
		}
	})






























})
