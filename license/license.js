$(function(){
	// var info1 = [
	// 	{info:"平台运营主体资质证照"},
	// 	{info:"自营主体资质证照"}
	// ];
	// info1.map(function(item){
	// 	$(`
	// 	<div class="conter">
	// 		<p>${item.info}<i class="fa fa-angle-right" aria-hidden="true"></i></p>
	// 	</div>
	// 	`).appendTo(".body")
	// });
	$("#lic_1").click(function(){
		location.assign("../business/business.html");
	});
	$("#lic_2").click(function(){
		location.assign("../selfEmployed/selfEmployed.html");
	});
})