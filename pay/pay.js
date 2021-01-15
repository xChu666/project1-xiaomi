$(function(){
	var d = location.search.slice(1);
	$(`
	<p>订单提交成功！去付款咯～</p>
	<span>请在2天内完成支付, 超时后将取消订单</span>
	<span>订单编号：5201113509302776</span>
	<span>订单价格：${arr[d].price}.00元</span>
	<span id="shouhuo">收货信息：哈啊176****1866吉林白山市临江市螯合物地阿杰我ID阿瓦就</span>
	<span>商品名称： ${arr[d].info}</span>
	<span>配送时间： 不限送货时间</span>
	<span>发票类型：电子普通发票</span>
	<span>发票信息：个人</span>
	
	`).appendTo($("#payInfo"));
	
	
	$('#shouhuo').text("收货信息：" + localStorage.inf);
	$("#WeChatPay").click(function(){
		location.assign("../paySuccess/paySuccess.html")
	});
	$("#payByAliPay").click(function(){
		location.assign("../paySuccess/paySuccess.html")
	})
	
})