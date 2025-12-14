// keeps track of how many times the function ran
let bubbleCounter = 0;

// create bubbles
function makeBubble() {
        let container = document.getElementById("circle");
        let rect = container.getBoundingClientRect();

        let bubble = document.createElement("div");
        bubble.className = "bubble";

        // random left position inside the circle container
        let randomX = Math.random() * (rect.width - 20);
        bubble.style.left = randomX + "px";

        // start near the bottom of the water
        bubble.style.top = rect.height * 0.75 + "px";
        container.appendChild(bubble);

        // remove after animation finishes
        setTimeout(function() {
            bubble.remove();
        }, 4000);
    }

// create circles
function createCircle() {
    bubbleCounter++; // increment (increase) the counter

    // only create a circle every 20 intervals (repeated time gap), stop after 800 intervals
    if(bubbleCounter % 20 == 0 && updateCount() < 100) {
        const container = document.getElementById("circle");
        const rect = container.getBoundingClientRect();

        const circle = document.createElement("div");
        circle.style.aspectRatio = '1/1'; // square div
        circle.style.height = `${50 + Math.random() * 60}px`; // random height
        circle.style.position = "absolute";
        circle.className = "circle";
        circle.style.zIndex = "2";

        // horizontal position anywhere in container
        const size = 50 + Math.random() * 60;
        circle.style.left = `${Math.random() * (rect.width - size)}px`;

        // vertical position only in water
        const waterStart = rect.height * 0.5; // start of water
        const waterHeight = rect.height * 0.5; //water thickness
        circle.style.top = `${waterStart + Math.random() * (waterHeight - size)}px`;

        // base color for brightness and style
        circle.style.filter = `brightness(${0.8+Math.random()*0.2})`

        // make a random shade of blue
        let blueShade = 180 + Math.floor(Math.random() * 50);
        circle.style.backgroundColor = "rgb(100, 149, " + blueShade + ")";

        circle.style.borderRadius = "50%"; // make the div circular
        circle.style.boxShadow = "0 0 25px cornflowerblue"; // add a glow/shade using the same color

        container.appendChild(circle)
        updateCount();
    }
}

// reset all circles
let resetButton = document.getElementById("resetBtn");

resetButton.addEventListener("click", function() {
    // remove all circles
    let allCircles = document.querySelectorAll(".circle");
    allCircles.forEach(function(c) {
        c.remove();
    });

    // reset the counter so circles will start appearing again
    bubbleCounter = 0;
});

// glow button
let glowButton = document.getElementById("glowBtn");

glowButton.addEventListener("click", function() {
    document.body.classList.toggle("glow-mode");

    if (document.body.classList.contains("glow-mode")) {
        glowButton.textContent = "Light";
    } else {
        glowButton.textContent = "Glow";
    }
});

// slider control
let speedControl = document.getElementById("speedSlider");
let circleInterval = setInterval(createCircle, 24);

speedControl.addEventListener("input", function() {
    clearInterval(circleInterval);

    // flip so left = slow and right = fast
    let flipped = (100 - speedControl.value) * 0.2;

    circleInterval = setInterval(createCircle, flipped);
});

// counter
function updateCount() {
    let count = document.querySelectorAll(".circle").length;
    document.getElementById("circleCount").textContent = "Circles: " + count;
    return count;
}

// call the function 
setInterval(makeBubble, 1200);