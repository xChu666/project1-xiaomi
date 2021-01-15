$(function() {
	// 接收数据
	var d = location.search.slice(1) - 1  || 1;
	// console.log(d);
	//图片区域
	$(
		`
		<div class="imgs-big">
			<img src="../${arr[d].img}" style="display: block;">
			<img src="../img/shop-img5.jpg" >
			<img src="../img/shop-img10.jpg" >
			<img src="../img/shop-img13.jpg" >
		</div>
		<div class="imgs-small">
			<div id="previous"><i class="fa fa-angle-up" aria-hidden="true"></i></div>
			<div id="next"><i class="fa fa-angle-down" aria-hidden="true"></i></div>
			
			<!-- 小图 -->
			<div class="small-1 smpic">
				<img src="../${arr[d].img}" >
			</div>
			<div class="small-2 smpic">
				<img src="../img/shop-img5.jpg" >
			</div>
			<div class="small-3 smpic">
				<img src="../img/shop-img10.jpg" >
			</div>
			<div class="small-4 smpic">
				<img src="../img/shop-img13.jpg" >
			</div>
		</div>
	`
	).appendTo($("#shop-imgs"));
	//信息区域
	$(
		`
	<div class="shop-name"><img src="../img/xiaomi-ziying.png" ><span>${arr[d].info}</span></div>
	<div class="introduction">高性能游戏芯；1080P全高清大屏；5020mAh大电量</div>
	<div class="gray-frame">
		<div class="shop-price">
			<span class="price-1">售价</span>
			<span class="price-2">￥</span><span class="price-3">${arr[d].price}</span>
		</div>
		<div class="shop-service">
			<span class="service-1">服务 <i class="fa fa-exclamation-circle" aria-hidden="true"></i></span>
			<span class="service-2"><i class="fa fa-check-circle-o" aria-hidden="true"></i>满99包邮</span>
			<span class="service-2"><i class="fa fa-check-circle-o" aria-hidden="true"></i>小米自营</span>
		</div>
	</div>
	<div class="shop-address"><span class="add-1">配送区域</span> <span>山东 青岛市 高新区（城阳区）</span> <span class="add-2">有货</span>
		<span class="add-3">修改</span></div>
	<div class="shop-kind">
		<div class="shop-color">
			<span>颜色</span>
			<div>碳素黑</div>
			<div>墨黛青</div>
			<div>霓虹蓝</div>
			<div>藕荷粉</div>
		</div>
		<div class="shop-version">
			<span>版本</span>
			<div>4GB+64GB</div>
			<div>4GB+128GB</div>
			<div>6GB+128GB</div>
		</div>
	</div>
	<div class="count">
		<span>数量</span>
		<div class="jishu">
			<span id="num-less">-</span>
			<input type="text" id="shop-count" value="1" />
			<span id="num-add">+</span>
		</div>
	</div>
	<div class="btn-buy">
		<div class="button b1" id="addCart">加入购物车</div>
		<div class="button b2" id="lijiBuy">立即购买</div>
		<div class="favorite">
			<div class="icon"><i class="fa fa-star-o" aria-hidden="true"></i></div>
			<p>收藏</p>
		</div>
		<div class="favorite">
			<div class="icon"><i class="fa fa-headphones" aria-hidden="true"></i></div>
			<p>客服</p>
		</div>
	</div>
	`
	).appendTo($("#shop-detail"));
	//添加推荐图片
	for (var i = 0; i < other_arr.length; i++) {
		$(
			`
		<div class="other-sbox">
			<div class="sbox-img">
				<img src="../img/${other_arr[i].img}.png" >
			</div>
			<p>${other_arr[i].p1}</p>
			<div class="sbox-bot">
				<p>${other_arr[i].p2}</p>
				<p class="other-price"><span>￥</span>${other_arr[i].p3}</p>
			</div>
		</div>
		`
		).appendTo("#other-box");
	}

















})
