
  window.onload = function() {
   var Div = document.getElementsByClassName("div1")[0];
   var pro = document.getElementsByClassName("container_center")[0];
   var proT = pro.offsetTop;
   var proL = pro.offsetLfet;
   window.onscroll = function() {
    // 获取当前页面的滚动条纵坐标位置
    var scrollT = document.documentElement.scrollTop ;
   // var scrollL = document.documentElement.scrollLeft ||document.body.scrollscrollLeft;
    if (scrollT >= proT) {
      Div.style.position = "fixed";
      Div.style.top = 0;
      Div.style.left = 0;
      Div.style.display = "block";
    } else if(scrollT<= proT){
    	Div.style.display = "none";
    }
    console.log(proT);
    
}
   }