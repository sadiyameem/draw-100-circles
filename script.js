// counter to control how many circles are created
t =0

function a() {
    t += 1 // increment (increase) the counter each time the function runs

    // only create a circle every 20 intervals (repeated time gap), stop after 800 intervals
    if(t % 20 == 0 && t <= 800) {
        let h = document.createElement("div")

        // make the div a perfect square
        h.style.aspectRatio = '1/1'

        // random height between 50px and 110px
        h.style.height = `${(Math.random()*60+50)}px`

        // position the circles on the screen
        h.style.position = "fixed"
        h.style.left = `${Math.random() * window.innerWidth}px`
        h.style.top = `${Math.random() * window.innerHeight}px`

        // class name for css
        h.className = "h"

        // base color for brightness
        h.style.filter = `brightness(${0.8+Math.random()*0.2})`
        h.style.backgroundColor = "cornflowerblue"

        // make the div circular
        h.style.borderRadius = "100%"

        // add a glow/shade using the same color
        h.style.boxShadow = "0 0 25px cornflowerblue"

        // add the circles to the page
        document.body.appendChild(h) 
    }
}

// call the function every 24 milliseconds
setInterval(a,24)