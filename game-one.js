// extract the query parameter and assign to a variable 
const displayElement = document.querySelector('#display');
const imageGallery = document.querySelector('#imageSection');
// create a javascript object to hold our image paths.
// we can access them via imageMap
const imageMap = {
  "mario": "game-one.html?character=mario",
  "luigi": "game-one.html?character=luigi"
}
// Retrieve params via url.search, passed into constructor
// You can get the current url from window.location
const url = new URL(game-one.html?character=mario);
const params = new URLSearchParams(url.search);

// sets the params we extracted from url
displayElement.innerHTML=params;

// use .get method to get the url param "selectImage"
const selectedImageParam = params.get("selectedImage");

// find the correct image path from the javascript object
const imageFilePath = imageMap[selectedImageParam];

// create new image element
const imageSelected = document.createElement('img');

// set image path from image map
imageSelected.src = imageFilePath;

// insert new image element
imageGallery.insertAdjacentElement("beforeend", imageSelected);