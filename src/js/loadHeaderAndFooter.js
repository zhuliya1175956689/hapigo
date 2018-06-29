/* 加载头部、尾部 */
define(["jquery"], function($){
	$(function(){
	$(".header").load("/html/include/header.html",function(){
	$(".search :text").on("keyup", function(){
				const txt = $(this).val(); 
				const url = `https://suggest.taobao.com/sug?code=utf-8&q=${txt}&callback=?`;
				$.getJSON(url, function(data){
					let html = "";
					data.result.forEach(function(curr){
						html += `<div>${curr[0]}</div>`
					});
					$(".gest").show().html(html);
				});
		});
			$(".gest").delegate("div", "click", function(){
				const txt = $(this).text(); // <==> this.innerText
				$(".search :text").val(txt); // xxx.value = txt;
				$(".gest").hide();
			});
		});

		// 动态异步加载尾部文件
	});
	$(".footer").load("/html/include/footer.html");
});