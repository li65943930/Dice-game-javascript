document.querySelector("button").onclick = function getDiceResult() {
  var randomNumber1 = Math.floor(Math.random() * 6) + 1;
  var randomNumber2 = Math.floor(Math.random() * 6) + 1;

  var radmonDiceImageSource1 = "images/dice" + randomNumber1 + ".png";
  var radmonDiceImageSource2 = "images/dice" + randomNumber2 + ".png";

  document.querySelector(".img1").setAttribute("src", radmonDiceImageSource1);
  document.querySelector(".img2").setAttribute("src", radmonDiceImageSource2);

  if (randomNumber1 > randomNumber2) {
    document.querySelector("h1").innerHTML = "🚩 Play 1 Wins!";
  } else if (randomNumber1 == randomNumber2) {
    document.querySelector("h1").innerHTML = "Draw!";
  } else {
    document.querySelector("h1").innerHTML = "Play 2 Wins! 🚩";
  }

  console.log("clicked");
};

// document.querySelector(".img1").onclick = function () {
//   document.querySelector(".img1").setAttribute("src", radmonDiceImageSource1);
// };
//
// document.querySelector(".img2").onclick = function () {
//   document.querySelector(".img2").setAttribute("src", radmonDiceImageSource2);
// };
