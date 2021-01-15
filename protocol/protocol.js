$(function(){
	var info1 = [
		{info:"平台协议"},
		{info:"用户协议"},
		{info:"隐私协议"},
		{info:"小米有品协议规则更新公告"},
		{info:"小米有品平台运营主体变更公告"},
		{info:"消费者风险告知书"},
		{info:"历史协议规则"},
		{info:"隐私设置"}
	];
	info1.map(function(item){
		$(`
		<div class="conter">
			<p>${item.info}<i class="fa fa-angle-right" aria-hidden="true"></i></p>
		</div>
		`).appendTo(".body")
	});
	
	
	
	
	
	
	
	
})