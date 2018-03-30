window.onload = function () {
    //get DOM
    var all = document.getElementById("all");
    var screen = all.firstElementChild || all.firstChild;
    var imgWidth = screen.offsetWidth;
    var ul = screen.firstElementChild || screen.firstChild;
    var ol = screen.children[1];
    var div = screen.lastElementChild || screen.lastChild;
    var spanArr = div.children;
    //copy first img to last
    var ulNewLi = ul.children[0].cloneNode(true);
    ul.appendChild(ulNewLi);
    for(var i=0;i<ul.children.length; i++){
        var olNewLi = document.createElement("li");
        olNewLi.innerHTML = i+1;
        ol.appendChild(olNewLi);
    }
    var olLiArr = ol.children;
    olLiArr[0].className = "current";
    //to change img
    for(var i=0;i<olLiArr.length;i++){
        olLiArr[i].index = i;
        olLiArr[i].onmousemove = function () {
            for(var j =0;j<olLiArr.length;j++){
                olLiArr[j].className = "";
            }
            this.className = "current";
            key = square = this.index;
            animate(ul,-this.index*imgWidth);
        }
    }
    //setInterval
    var timer = setInterval(autoPlay,1000);
    var key = 0;
    var square = 0;
    function autoPlay() {
        key++;
        if(key>olLiArr.length){
            ul.style.left = 0;
            key = 1;
        }
        animate(ul,-key*imgWidth);
        square++;
        if(square>>olLiArr.length-1){
           square = 0;
        }
        for(var i = 0;i<olLiArr.length;i++){
            olLiArr[i].className = "";
        }
        olLiArr[square].className = "current";
    }
    all.onmousemove = function () {
        div.style.display = "block";
        clearInterval(timer);
    }
    all.onmouseout = function () {
        div.style.display = "none";
        timer = setInterval(autoPlay,1000);
    }
    //6左右切换图片（鼠标放上去显示，移开隐藏）
    spanArr[0].onclick = function () {
        key--;
        if(key<0){
            ul.style.left = -imgWidth*(olLiArr.length)+ "px";
            key = olLiArr.length-1;
        }
        animate(ul,-key*imgWidth);
        square--;
        if(square<0){
            square = olLiArr.length-1;
        }
        for(var i=0;olLiArr.length;i++){
            olLiArr[i].className = "";
        }
        olLiArr[square].className = "current";
    }
    spanArr[1].onclick = function () {
        autoPlay();
    }

    function animate(ele,target) {
        clearInterval(ele,timer);
        var speed = target>ele.offsetLeft?10:-10;
        ele.timer = setInterval(function () {
            var val = target - ele.offsetLeft;
            ele.style.left = ele.offsetLeft + speed + "px";
            if(Math.abs(val)< Math.abs(speed)){
                ele.style.left = target + "px";
                clearInterval(ele.timer);
            }
        },10)
    }
}