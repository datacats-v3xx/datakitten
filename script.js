const cat = document.getElementById("cat");
const message = document.getElementById("message");

// Load saved mood or default to "neutral"
let mood = localStorage.getItem("catMood") || "neutral";

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

// Click event to change mood
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
    
    // Save mood to localStorage
    localStorage.setItem("catMood", mood);
    
    // Update UI
    updateMoodText();
});

// Function to randomly move CyberCat
function moveCat() {
    let x = Math.random() * (window.innerWidth - 150);
    let y = Math.random() * (window.innerHeight - 150);
    cat.style.left = `${x}px`;
    cat.style.top = `${y}px`;
}

// Move the cat every 5 seconds
setInterval(moveCat, 5000);
