require(["config"], function(){
	require(["jquery", "template", "cookie", "xm_carousel", "load"], function($, template){
				$(function(){
			// 轮播图
			$(".banner2").carousel({
					duration: 1500, 
					imgs: [
						{href:"#", src:"/img/web-101-101-1-1529630129.jpg"},
						{href:"#", src:"/img/web-101-101-2-1529630156.jpg"},
						{href:"#", src:"/img/web-101-101-4-1529630087.jpg"},
						{href:"#", src:"/img/web-101-101-5-1529639360.jpg"},
						{href:"#", src:"/img/web-101-101-3-1529630112.jpg"}
					], 
					width:"100%", 
					height:380,
					showBtn: false
				});
		});
	});


});