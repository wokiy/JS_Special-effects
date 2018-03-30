//fenzhuan
var btnArr = document.getElementsByTagName("button");
var box2 = document.getElementsByClassName("box2")[0];
var timer = null;

btnArr[0].onclick = function () {
    //定义动画的封装
    animate(200);
}
btnArr[1].onclick = function () {
    animate(400);
}
function animate(target) {
    clearInterval(timer);
    var speed = target>box2.offsetLeft ? 10:-10;
    timer = setInterval(function () {
        var val = target - box2.offsetLeft;
        box2.style.left = box2.offsetLeft + speed + "px";
        //clear timer
        if(Math.abs(val) < Math.abs(speed)){
            box2.style.left = target + 'px';
            clearInterval(timer);
        }
    },30)
}