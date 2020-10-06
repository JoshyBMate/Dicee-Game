var playerOneNum = Math.floor(1+Math.random()*6);
document.querySelector(".img1").src = "images/dice"+playerOneNum+".png";
var playerTwoNum = Math.floor(1+Math.random()*6);
document.querySelector(".img2").src = "images/dice"+playerTwoNum+".png";

if(playerOneNum>playerTwoNum)
{
    document.querySelector("h1").innerHTML = "🦅 Player One Wins!!";
}
else if(playerTwoNum>playerOneNum)
{
  document.querySelector("h1").innerHTML = "Player Two Wins!! 🦅";
}
else
{
  document.querySelector("h1").innerHTML = "Draw!!";
}
