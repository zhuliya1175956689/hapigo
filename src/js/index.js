require(["config"], function(){
	require(["load"],function(){
		 $(".por_left").on("click",function(){
		 	 $(".pro1").animate({left:-800},"1000")
		})
		
		$(".por_right").on("click",function(){
		 	 $(".pro1").animate({left:800},"3000/60")
		})
	});
});