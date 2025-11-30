t =0

function a() {
    t += 1
    if(t % 20 == 0 && t <= 800) {
        h = document.createElement("div")
        h.style.width = "60px"
        h.style.height = "60px"
        h.style.position = "absolute"
        h.style.left = `${Math.random() * window.innerWidth}px`
        h.style.top = `${Math.random() * window.innerHeight}px`
        h.style.backgroundColor = "cornflowerblue"
        h.style.borderRadius = "100%"
        document.body.appendChild(h) 
    }
}

setInterval(a,24)