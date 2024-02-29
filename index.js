var i=0, j=0;
function reset(){
    location.reload();
}
function chal(){
    var random1 = Math.floor(Math.random()*6+1);
var randomImg1 = "images/dice"+random1 +".png";

var firstImg = document.querySelectorAll("img")[0];
firstImg.setAttribute("src", randomImg1 );

var random2 = Math.floor(Math.random()*6+1);
var randomImg2 = "images/dice"+random2 +".png";

var secondImg = document.querySelectorAll("img")[1];
secondImg.setAttribute("src", randomImg2 );

if(random1>random2){
    i++
    document.querySelector(".score1").textContent=i;
}
else if (random1<random2){
    j++
    document.querySelector(".score2").textContent=j;

}
}
document.querySelectorAll("button")[1].addEventListener("click", chal);
//to reset
document.querySelectorAll("button")[0].addEventListener("click", reset);
