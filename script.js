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

const characterFacts = [
    //Sam
    "Strength: 85 | BB Compatibility: 95 | Survival Skill: 90 | Stealth: 80 | Chiral Resistance: 95 | Cargo Handling: 100",
    //Fragile
    "Strength: 70 | BB Compatibility: 30 | Survival Skill: 75 |Stealth: 85 |Chiral Resistance: 80 | Special Ability: Timefall Jump (95)",
    //Deadman
    "Strength: 40 | BB Compatibility: 60 | Survival Skill: 55 | Stealth: 30 | Chiral Resistance: 65 | Science/Medical Expertise: 100",
    //Die hardman
    "Strength: 75 |BB Compatibility: 20 | Survival Skill: 70 | Stealth: 60 | Chiral Resistance: 70 | Leadership: 95",
    //BB-28
    "•	Strength: 10 | BB Compatibility: 100 | Survival Skill: 40 | Stealth: 20 | Chiral Resistance: 85 | BT Detection: 100"
]

const viewer = document.getElementById("viewer");
const characterImages = document.getElementById("character-images");
const characterNames = document.getElementById("character-list-name");
const factsBox = document.getElementById("character-facts");
const revealFactsBtn = document.getElementById("reveal-facts");

let index = 0;
let factsVisible = false;

function showImage(){
    viewer.src = images[index];
    viewer.style.display = "block";
    characterNames.textContent = names [index];

    factsBox.style.display = "none";
    factsVisible = false;
    revealFactsBtn.textContent = "Top Facts";
}

function nextImage(){
    index = (index + 1) % images.length;
    showImage();
}
function previousImage(){
    index = (index - 1 + images.length) % images.length;
    showImage();
}

revealFactsBtn.addEventListener("click", () => {
    if (!factsVisible){
        factsBox.textContent = characterFacts[index];
        viewer.style.display = "none";
        factsVisible = true;
        revealFactsBtn.textContent = "Hide facts";
        factsBox.style.display ="block";
    } else {
        factsBox.style.display = "none";
        viewer.style.display = "block";
        factsVisible = false;
        revealFactsBtn.textContent = "Top Facts";
    }
});



showImage();


