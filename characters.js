// Different version of game depending on what character you pick!

let marioimg = document.querySelector(".characters.mario");
let luigiimg = document.querySelector(".characters.luigi");

//Mario
marioimg.onclick = function(){
  window.location = "/game-two-mario.html";
};

//Luigi
luigiimg.onclick = function(){
  window.location = "/game-two-luigi.html";
}; 
