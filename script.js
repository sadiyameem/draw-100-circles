// keeps track of how many times the function ran
let counter = 0;

function createCircle() {
    counter++; // increment (increase) the counter each time the function runs

    // only create a circle every 20 intervals (repeated time gap), stop after 800 intervals
    if(counter % 20 == 0 && counter <= 800) {
        const container = document.getElementById("circle");
        const rect = container.getBoundingClientRect();

        const circle = document.createElement("div");
        circle.style.aspectRatio = '1/1'; // square div
        circle.style.height = `${50 + Math.random() * 60}px`; // random height
        circle.style.position = "absolute";
        circle.className = "circle";

        // random position inside the bowl
        circle.style.left = `${Math.random() * rect.width}px`;
        circle.style.top = `${Math.random() * rect.height}px`;

        // base color for brightness
        circle.style.filter = `brightness(${0.8+Math.random()*0.2})`
        circle.style.backgroundColor = "cornflowerblue"

        // make the div circular
        circle.style.borderRadius = "100%"

        // add a glow/shade using the same color
        circle.style.boxShadow = "0 0 25px cornflowerblue";

        // add the circles to the page
        container.appendChild(circle)
    }
}

// call the function every 24 milliseconds
setInterval(createCircle,24)