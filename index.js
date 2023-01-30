function startDice() {
  var audio = new Audio("DICE.wav");
  audio.play();
  var random1 = Math.floor(Math.random() * 6) + 1;
  var random2 = Math.floor(Math.random() * 6) + 1;
  var randomimage1 = "dice" + random1 + ".png";
  var randomimage2 = "dice" + random2 + ".png";
  var randomdice1 = "images/" + randomimage1;
  var randomdice2 = "images/" + randomimage2;
  var image1 = document.querySelectorAll("img")[0];
  image1.setAttribute("src", randomdice1);
  var image2 = document.querySelectorAll("img")[1];
  image2.setAttribute("src", randomdice2);

  if (random1 > random2) {
    document.querySelector("h1").innerHTML = "Player 1 Win!";
  } else if (random1 == random2) {
    document.querySelector("h1").innerHTML = "Draw ! ";
  } else {
    document.querySelector("h1").innerHTML = "Player 2 win!";
  }
}
 