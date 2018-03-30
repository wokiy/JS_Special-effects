//offsetParent 父级有定位则返回最近那个，没有则返回body
var box3 = document.getElementsByClassName("box3")[0];
console.log(box3.offsetParent);