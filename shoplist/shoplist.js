function picClick(id){
		location.assign('../shop-detail/shop-detail.html?' + id);
	}
$(function(){
	for(var i = 0 ; i < arr.length ; i++){
		$(`<div class="sbox" onclick = 'picClick(${arr[i].id})'>
		<div class="shop-img"><img src="../${arr[i].img}" ></div>
		<div class="shop-info">${arr[i].info}</div>
		<div class="shop-price"><span style="font-size: 12px;">￥</span>${arr[i].price}</div>
		</div>`).appendTo($("#shop-box"));
	}
	
	// arr.forEach(function(item){
	// 	console.log(item.img);
	// 	$(`
	// 	<img src="../${item.img}" >
	// 	`).appendTo("#imgs-big");
	// })
	
	
	
	
	
	
	
})