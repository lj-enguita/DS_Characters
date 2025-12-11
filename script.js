const images = [
    "sam_porter.png",
    "fragile.jpg",
    "dead-man.jpg",
    "die-hardman.jpg",
    "bb-28.jpg"
];

const characterImages = document.getElementById("character-images");



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