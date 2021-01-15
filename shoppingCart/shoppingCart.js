$(function() {
	//判断登录
	if(localStorage.getItem("user") == null){
		$("#cartNull").css("display","block");
		$("#cartBox").css("display","none");
	}else{
		$("#cartBox").css("display","block");
		$("#cartNull").css("display","none");
	}
	//去登陆
	$("#goLog").click(function() {
		$("#log").attr("xxx", 1);
		// console.log($("#log").attr("xxx"));
		$("#tan-son").slideDown(500);
		$("#tankuang").css("display", "block");
	});
	cartList.map(function(item) {
		$(`
	<div class="oneBox">
		<span class="info_chick">
			<input type="checkbox" class="singleChoice"/>
			
		</span>
		<div class="info_img" style="width: 120px;">
			<img src="../${item.img}" >
		</div>
		<div class="info_info"><span>${item.info}</span>
			<!-- <div class="selectService">选择服务<i class="fa fa-caret-down" aria-hidden="true"></i></div> -->
			<!-- <i class="fa fa-caret-up" aria-hidden="true"></i> -->
		</div>
		<div class="info_price" id = "info_price">￥${item.price}</div>
		<div class="info_count">
			<span class="num-less">-</span>
			<input type="text" class="shop-count" value="${item.count}" />
			<span class="num-add">+</span>
		</div>
		<div class="info_amount">￥<span class="singlePiece">${item.totalPrice}</span></div>
		<div class="info_operating" id="delete_shop">X</div>
	</div>
		`).appendTo("#cartInfo");
	});
	// 接收数据
	var d = location.search.slice(1) || 1;
	
	$(`
	<div class="oneBox">
		<span class="info_chick"><input type="checkbox" name="" class="singleChoice" value="" /></span>
		<div class="info_img" style="width: 120px;">
			<img src="../${arr[d].img}" >
		</div>
		<div class="info_info"><span class="goodInfo">${arr[d].info}</span>
			<!-- <div class="selectService">选择服务<i class="fa fa-caret-down" aria-hidden="true"></i></div> -->
			<!-- <i class="fa fa-caret-up" aria-hidden="true"></i> -->
		</div>
		<div class="info_price" id = "info_price">￥${arr[d].price}</div>
		<div class="info_count">
			<span class="num-less">-</span>
			<input type="text" class="shop-count" value="${arr[d].count}" />
			<span class="num-add">+</span>
		</div>
		<div class="info_amount">￥<span class="singlePiece">${arr[d].totalPrice}</span></div>
		<div class="info_operating" id="delete_shop">X</div>
	</div>
		`).prependTo("#cartInfo2");
		// {proId: 21,price:799,info:'Redmi 9',count:1,totalPrice:799,img:'./img/shop-img12.jpg'},
	
	// 传商品
	var newGoods = Object.assign({
		['proId']:20,
		["price"]:Number($(".info_price").html().slice(1)),
		["info"]:$(".goodInfo").html(),
		["count"]:1,
		["totalPrice"]:Number($(".singlePiece").html()),
		["img"]:"pic"
	});
	cartList.unshift(newGoods);
	// console.log(cartList);
	//存商品&记数量
	var goodsSelect = [];//选择的商品
	var count = 0;
	
	//单件商品总价
	function OneGoodsPrice(index) {
		cartList[index].totalPrice = cartList[index].count * cartList[index].price;
		$('.singlePiece').eq(index).html(cartList[index].totalPrice);
	};
	//购物车选中商品总价
	function changeTotalPrice() {
		var total = 0;
		for (var i = 0; i < goodsSelect.length; i++) {
			total += goodsSelect[i].totalPrice;
		};
		$('#totalPrice').html(total);
	};
	
	// 删除商品
	//点击删除按键
	$(".info_operating").click(function() {
		//找对应的删除键下标
		// console.log(goodsSelect);
		var index = $('.info_operating').index(this);
		//定义个新变量等于点击的删除，下面用
		var this1 = this;
		
		// console.log(cartList[index]);
		//cartList[index]
		var i = goodsSelect.indexOf(cartList[index]);
		// console.log(i);i=-1，splice(-1, 1)删除数组最后一位
		//确定删除
		$(".yes").click(function() {
			//移出商品
			// console.log(goodsSelect);
			// console.log(i);
			$(this1).parent().remove();
			//删除数组对应商品
			if(i>-1){//如果i=-1会删除数组最后一个
				goodsSelect.splice(i, 1);
				count = $('.singleChoice').length;
			}
			cartList.splice(index, 1);
			// 确认框消失
			$("#deleteShop").css("display", "none");
			// console.log(goodsSelect);
			// console.log(cartList);
			//计算结算总价格
			changeTotalPrice();
			//总计多少件
			count = goodsSelect.length;
			$("#shopCount").html(count);
			//再次判断是否全选
			if(count == cartList.length){
				allok();
			}else{
				allno();
			};
			// 如果数组空了就显示无商品
			if ($(".info_operating").length === 0) {
				$("#cartBox").css("display", "none");
				$("#cartNot").css("display", "block");
			}
		});
		$("#deleteShop").css("display", "block");
	});
	//取消按钮
	$("#quxiao").click(function() {
		$("#deleteShop").css("display", "none");
	});
	//取消按钮
	$(".no").click(function() {
		$("#deleteShop").css("display", "none");
	});
	
	//多选
	function allok(){
		for (var i = 0; i < $(".selectAll").length; i++) {
			$(".selectAll")[i].checked = true;
		}
	}
	function allno(){
		for (var i = 0; i < $(".selectAll").length; i++) {
			$(".selectAll")[i].checked = false;
		}
	}
	//单选
	$(".singleChoice").click(function(){
		var index = $(".singleChoice").index(this);
		if(this.checked){
			count++;
			// $(".singleChoice").eq($(this).index()).addClass("jishuliang");
			$("#shopCount").html(count);
			goodsSelect.push(cartList[index]);
		}else{
			count--;
			// $(".singleChoice").eq($(this).index()).removeClass("jishuliang");
			$("#shopCount").html(count);
			var i = goodsSelect.indexOf(cartList[index]);
			// console.log(cartList[index]);
			goodsSelect.splice(i, 1); 
			console.log(goodsSelect)
		};
		if(count == cartList.length){
			allok();
		}else{
			allno();
		};
		 changeTotalPrice();
	});
	//点击全选框
	$('.selectAll').click(function(){
		if( this.checked ){
			$('.singleChoice').prop('checked', true);
			$('.selectAll').prop('checked', true);
			goodsSelect = cartList.concat();
			count = $('.singleChoice').length;
			$("#shopCount").html(count);
		} else {
			$('.singleChoice').prop('checked', false);
			$('.selectAll').prop('checked', false);
			goodsSelect = [];
			count = 0;
			$("#shopCount").html(count);
		}
		changeTotalPrice();
	});
	// console.log(cartList[$('.singleChoice').index()]);
	
	// 数量减
	$('.num-less').click(function() {
		var index = $('.num-less').index(this);
		cartList[index].count--;
		if (cartList[index].count <= 1) {
			cartList[index].count = 1
		}
		$('.shop-count').eq(index).val(cartList[index].count);
		OneGoodsPrice(index);
		changeTotalPrice();
	})
	// //鼠标变化
	// $(".num-less").hover(function(){
	// 	if ($(".shop-count").val() > 1) {
	// 		$(".num-less").css("cursor", "default");
	// 	} else if ($(".shop-count").val() == 1) {
	// 		$(".num-less").css("cursor", "not-allowed");
	// 	}
	// },function(){
	// 	$(".num-less").css("cursor", "default");
	// })

	//数量加
	$('.num-add').click(function() {
		//通过index传this下标得到this为第几个class
		var index = $('.num-add').index(this);
		cartList[index].count++;
		//最大库存判断
		// if( cartList[index].count <= 0 ){
		// 	cartList[index].count = 0;
		// }
		$('.shop-count').eq(index).val(cartList[index].count);
		OneGoodsPrice(index);
			changeTotalPrice();
	});

	//失去焦点方法
	function outGoodsPrice(index, num) {
		cartList[index].totalPrice = "￥" + num * cartList[index].price;
		$('.info_amount').eq(index).html(cartList[index].totalPrice);
	};

	$(".shop-count").blur(function() {
		var out = $(this).val();
		var index = $(".shop-count").index(this);
		outGoodsPrice(index, out);
		changeTotalPrice();
	});
	
	//去买
	$("#goBuy").click(function(){
		location.assign("../settlement/settlement.html?" + d);
	})
	
	//去首页
	$("#goLook").click(function() {
		location.assign("../index/index.html");
	});
});
