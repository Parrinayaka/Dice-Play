var player1 = Math.floor(Math.random()*6)+1;
var ranImg = "images/dice" + player1 + ".png";
var img = document.querySelectorAll("img")[0].setAttribute("src",ranImg);


var player2 = Math.floor(Math.random()*6)+1;
var ranImg2 = "images/dice" + player2 + ".png";
var img2 = document.querySelectorAll("img")[1].setAttribute("src",ranImg2);


 if(player1 > player2){
    document.querySelector("h1").innerHTML = ("player1 wins");
 }else if (player2 > player1){
    document.querySelector("h1").innerHTML = ("player2 wins");
 }else{
    document.querySelector("h1").innerHTML = ("Draw");
 }

 