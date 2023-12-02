document.getElementsByTagName("body") [0]. onresize=function(){fun()};
var i= 0;
 function fun() {
    var res = "width =" + window.outerWidth + "<br>" + "height=" + window.outerHeight;
    document.getElementById("para").innerHTML=res;
    var res1=i+=1;
    document.getElementById("s1").innerHTML=res1;
 }