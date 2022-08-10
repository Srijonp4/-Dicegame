var randomNo1=Math.floor(Math.random()*(6 - 1 + 1) + 1);
var diceSelector1= "dice" + randomNo1 + ".png"; 
document.querySelector(".img1").setAttribute("src",diceSelector1);

var randomNo2=Math.floor(Math.random()*(6 - 1 + 1) + 1);
var diceSelector2 = "dice" + randomNo2 + ".png"; 
document.querySelector(".img2").setAttribute("src",diceSelector2);
function h1Decider()
{if(diceSelector1>diceSelector2){
    document.querySelector("h1").innerText = "Player 1 wins";
}
else if(diceSelector2>diceSelector1){
    document.querySelector("h1").innerText ="Player 2 Wins";

}
else{
    document.querySelector("h1").innerText ="Draw Mf";
}
}
h1Decider();

function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode"); }