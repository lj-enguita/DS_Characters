const images = [
    "sam_porter.png",
    "fragile.jpg",
    "dead-man.jpg",
    "die-hardman.jpg",
    "bb-28.jpg"
];

const names = [
    "Sam Porter Bridges",
    "Fragile",
    "Deadman",
    "Die Hardman",
    "BB-28"
];

const characterImages = document.getElementById("character-images");
const characterNames = document.getElementById("character-list-name");

let index = 0;

function showImage(){
    document.getElementById("viewer").src = images[index];
}

function nextImage(){
    index = (index + 1) % images.length;
    showImage();
}
function previousImage(){
    index = (index - 1 + images.length) % images.length;
    showImage();
}

showImage();

function showImage(){
    document.getElementById("viewer").src = images[index];
    characterNames.textContent = names [index];
}
