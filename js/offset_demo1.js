/*div{
    width:100px ;height:100px;padding: 10px ; border :10px solid red;
    margin :100px ;
    background-color: pink;
}
<div class="box"></div>
*/
var div = document.getElementByTagBname(""div)[0];
/*
offsetHeight/Width= height+border+padding
* */
console.log(div.offsetHeight);//140
console.log(typeof div.offsetHeight);//number
