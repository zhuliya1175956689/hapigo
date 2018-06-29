//require(["config"], function(){
	//require(["jquery", "template", "cookie", "xm_carousel", "load"], function($, template){
   var Div = document.getElementsByClassName("locen")[0];
   var Floor = document.getElementsByClassName("container_center2")[0];
   var Floor = Floor.offsetTop;
// var proL = pro.offsetLfet;
   window.onscroll = function() {
    // 获取当前页面的滚动条纵坐标位置
    var scrollT = document.documentElement.scrollTop ;
   // var scrollL = document.documentElement.scrollLeft ||document.body.scrollscrollLeft;
    if (scrollT >=Floor) {
      Div.style.position = "fixed";
      Div.style.top = 200 +"px";
      Div.style.left = 30 +"px";
      Div.style.display = "block";
    } else if(scrollT<= Floor){
    	Div.style.display = "none";
}
    console.log(Floor);
    
}
// $(".locen").Browser
//  });
// });