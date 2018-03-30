//donghua
var btn  = document.getElementsByTagName("button")[0];
var div = document.getElementsByName("div")[0];

//move 定时器动画实现

btn.onclick = function () {
    setInterval(function () {
        console.log(parseInt(div.style.left));
        div.style.left = div.offsetLeft + 10 + "px";
    },300)
};
