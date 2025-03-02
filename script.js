const cat = document.getElementById("cat");
const fish = document.getElementById("fish");
const message = document.getElementById("message");

// Load saved mood or default to "neutral"
let mood = localStorage.getItem("catMood") || "neutral";

// Load sounds
const meowSound = new Audio("meow.mp3");
const purrSound = new Audio("purr.mp3");
const hissSound = new Audio("hiss.mp3");

const hackerPhrases = [
    "DataKitten is brute-forcing the treat jar...",
    "Firewall breached. Deploying purr attack...",
    "Scanning for vulnerabilities... in your lap!",
    "DataKitten is analyzing network traffic.",
    "Hackers leave no trace... neither do cats.",
    "403 Forbidden: You may not pet DataKitten right now."
];

// Function to update CyberCat’s mood text
function updateMoodText() {
    if (mood === "neutral") {
        message.innerText = "🐱 The cat is watching...";
    } else if (mood === "happy") {
        message.innerText = "😻 The cat purrs and loves you.";
    } else {
        message.innerText = "😾 The cat is angry!";
    }
}

// Apply saved mood on page load
updateMoodText();

// Function to play mood-based sounds
function playSound() {
    if (mood === "happy") {
        purrSound.play();
    } else if (mood === "angry") {
        hissSound.play();
    } else {
        meowSound.play();
    }
}

// Click event to change mood and play sound
cat.addEventListener("click", function() {
    if (mood === "neutral") {
        mood = "happy";
        cat.style.transform = "translate(-50%, -50%) scale(1.1)";
    } else if (mood === "happy") {
        mood = "angry";
        cat.style.transform = "translate(-50%, -50%) scale(0.9)";
    } else {
        mood = "neutral";
        cat.style.transform = "translate(-50%, -50%)";
    }
    
    // Save mood & play sound
    localStorage.setItem("catMood", mood);
    updateMoodText();
    playSound();
});

// Function to randomly move CyberCat
function moveCat() {
    let x = Math.random() * (window.innerWidth - 150);
    let y = Math.random() * (window.innerHeight - 150);
    cat.style.left = `${x}px`;
    cat.style.top = `${y}px`;
}

// Move CyberCat every 5 seconds
setInterval(moveCat, 5000);

// CyberCat speaks random hacker phrases every 10 sec
setInterval(() => {
    let randomPhrase = hackerPhrases[Math.floor(Math.random() * hackerPhrases.length)];
    message.innerText = randomPhrase;
}, 10000);

// Allow dragging the fish
fish.addEventListener("dragstart", function(event) {
    event.dataTransfer.setData("text", "fish");
});

// Allow dropping fish onto the cat
cat.addEventListener("dragover", function(event) {
    event.preventDefault();
});

cat.addEventListener("drop", function(event) {
    event.preventDefault();
    let data = event.dataTransfer.getData("text");
    if (data === "fish") {
        mood = "happy";
        localStorage.setItem("catMood", mood);
        updateMoodText();
        playSound();
        fish.style.display = "none"; // Hide fish after feeding
    }
});

// Make CyberCat follow the user's cursor (laser pointer effect)
document.addEventListener("mousemove", (event) => {
    let catX = event.clientX;
    let catY = event.clientY;

    cat.style.transition = "top 0.3s linear, left 0.3s linear";
    cat.style.left = `${catX}px`;
    cat.style.top = `${catY}px`;
});
