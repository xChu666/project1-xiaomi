$(function() {
	
	//自动轮播图
	var t = 0;
	var timer;

	function jishi() {
		timer = setInterval(function() {
			$("#img").animate({
				"scrollLeft": t * 859
			});
			$("#num").find('span').removeClass("hou");
			$("#num").find('span').eq(t).addClass("hou");
			t++;
			if (t == 6) {
				t = 0;
			}
		}, 3000);
	}

	//鼠标移入清除计时器
	$("#img").mouseover(function() {
		clearInterval(timer);
	})

	$("#img").mouseout(function() {
		jishi();
	})


	// 轮播图小点
	$("#num span").click(an);

	function an() {
		// 按键
		// console.log(this);
		$("#num").find('span').removeClass("hou");
		$("#num").find('span').eq($(this).index()).addClass("hou");

		//图片
		// console.log($(this).index());
		$("#img").animate({
			"scrollLeft": $(this).index() * 859
		});
		t = $(this).index();
	};

	//轮播图箭头
	//左
	var l = t;
	$("#anniu-left").click(function() {
		$("#img").animate({
			"scrollLeft": l * -859
		});
		$("#num").find('span').removeClass("hou");
		$("#num").find('span').eq(l).addClass("hou");
		l = l - 1;
		if (l == -6) {
			l++;
		} else {
			t = l;
		};
		// console.log(l);
	})
	//右
	var r = t
	$("#anniu-right").click(function() {

		$("#img").animate({
			"scrollLeft": r * 859
		});
		$("#num").find('span').removeClass("hou");
		$("#num").find('span').eq(r).addClass("hou");
		r = r + 1;
		if (r == 6) {
			r = 0;
		} else {
			t = r;
		};
	})

	//倒计时
	function num(n) {
		n >= 10 ? n = n : n = "0" + n;
		return n;
	}

	function time(myhour, mymin, mysec) {
		var a = myhour;
		var b = mymin;
		var c = mysec;
		setInterval(function() {
			c--;
			if (c == 0) {
				b--;
				c = 59;
				if (b == 0) {
					a--;
					b = 59;
					if (a == 0) {
						c = 0;
						b = 0;
						a = 0;
					}
				}
			};
			$("#hours").html(num(a));
			$("#mins").html(num(b));
			$("#secs").html(num(c));
		}, 1000);
		return a, b, c;
	}
	time(23, 59, 59);

	
	//点击进入列表
	$("#allshop-1 li .smlist .reco .goods .smallgoods span").click(function() {
		open("../shoplist/shoplist.html");
	});
	$("#allshop-2 li .smlist .reco .goods .smallgoods span").click(function() {
		open("../shoplist/shoplist.html");
	});
});
