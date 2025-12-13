const images = [
    "sam_porter.png",
    "fragile.jpg",
    "dead-man.jpg",
    "die-hardman.jpg",
    "bb-28.jpg",
    "amelie-.jpg",
    "higgs.jpg",
    "cliff-unger.jpg",
    "heartman.webp",
    "mama.webp",
    "mules.webp",
    "bts.avif"
];

const names = [
    "Sam Porter Bridges",
    "Fragile",
    "Deadman",
    "Die Hardman",
    "BB-28",
    "Amelie",
    "Higgs Monaghan",
    "Clifford Unger",
    "Heartman",
    "Malingen 'Mama'",
    "MULEs",
    "Beached Things 'BT's'"
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
    "•	Strength: 10 | BB Compatibility: 100 | Survival Skill: 40 | Stealth: 20 | Chiral Resistance: 85 | BT Detection: 100",
    //Amelie
    "Strength: 65|BB Compatibility: 50|Survival Skill: 55|Stealth: 70|Chiral Resistance:100 |	Extinction Power: 100",
    //Higgs
    "Strength: 80 | BB Compatibility: 30 | Survival Skill: 75 | Stealth: 90 | Chiral Resistance: 95 |	Apex BT Control: 100",
    //Cliff
    "Strength: 95 | BB Compatibility: 100 | Survival Skill: 90 | Stealth: 85 | Chiral Resistance: 100 | Combat Skill: 100",
    //Heartman
    "Strength: 35 | BB Compatibility: 40 | Survival Skill: 50 | Stealth: 40 | Chiral Resistance: 85 | Scientific Knowledge: 100 | Time-Out Ability: 90",
    //Mama
    "Strength: 40 | BB Compatibility: 90 | Survival Skill: 50 | Stealth: 40 | Chiral Resistance: 90 | Chiral Engineering: 95",
    //Mules
    "Strength: 75 | BB Compatibility: 0 | Survival Skill: 60 | Stealth: 70 | Chiral Resistance: 55 | Cargo Obsession: 100",
    //BTs
    "Strength: 90 |BB Compatibility: 0 | Survival Skill: 100 | Stealth: 95 | Chiral Resistance: 100 | Detection Sensitivity: 90"    
]

const viewer = document.getElementById("viewer");
const characterImages = document.getElementById("character-images");
const characterNames = document.getElementById("character-list-name");
const revealFactsBtn = document.getElementById("reveal-facts");
const cardPanel = document.getElementById("card-panel");
const cardImg = document.getElementById("card-image");
const cardName = document.getElementById("card-name");
const cardFacts = document.getElementById("card-facts");
const hideCardBtn = document.getElementById("hide-card");
const theirStoryBtn = document.getElementById("get-to-know");

let index = 0;
let cardVisible = false;

function storyName (){
    const name = names[index].replace(/'/g, "'");
    theirStoryBtn.textContent = (`${names[index]}'s story`)
}

// function storyName (){
//     let name = names[index];
//     if (name.endsWith("'s")){
//         name = name.slice(0,-2);
//     } else if (name.endsWith ("s")) {
//         name = name.slice (0,-1);
//     }
//     theirStoryBtn.textContent = `${names}'s story`;
// }

function showImage(){
    viewer.src = images[index];
    viewer.style.display = "block";
    characterNames.textContent = names [index];
    cardPanel.style.display = "none";
    cardVisible = false;
    revealFactsBtn.textContent = "Top Facts";
    storyName();
}

showImage();

function nextImage(){
    index = (index + 1) % images.length;
    showImage();
}
function previousImage(){
    index = (index - 1 + images.length) % images.length;
    showImage();
}

revealFactsBtn.addEventListener("click", () => {
    if (!cardVisible){
        cardImg.src = images[index];
        cardName.textContent = names[index];
        
        const factsArray = characterFacts[index].split("|").map (f => f.trim());
        cardFacts.innerHTML = "";
        const ul = document.createElement("ul");
        factsArray.forEach(fact => {
            const li = document.createElement("li");
            li.textContent = fact;
            ul.appendChild(li);
        });
        cardFacts.appendChild(ul);

        viewer.style.display = "none";
        cardPanel.style.display ="flex";
        cardVisible = true;
    } else {
        showImage();
    }
});

hideCardBtn.addEventListener("click", () => {
    cardPanel.style.display = "none";
    viewer.style.display = "block";
    cardVisible = false;
})


theirStoryBtn.addEventListener("click", () =>{

});

