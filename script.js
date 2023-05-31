// Home Page Marios
let marioOne = document.querySelector(".mario1");
let marioTwo = document.querySelector(".mario2");

// Home Page Button
let playButton = document.querySelector(".play-button");

//Mario Animation 
playButton.onclick = function() {
  marioOne.style.display = "none";
  playButton.style.display = "none";
  marioTwo.style.display = "block";
  setTimeout(function(){
  window.location = "/characters.html";
  }, 3000);
}

