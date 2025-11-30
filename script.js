t =0

function a() {
    t += 1
    if(t % 20 == 0 && t <= 800) {
        let h = document.createElement("div")
        h.style.aspectRatio = '1/1'
        h.style.height = `${(Math.random()*60+50)}px`
        h.style.position = "fixed"
        h.className = "h"
        h.style.filter = `brightness(${0.8+Math.random()*0.2})`
        h.style.left = `${Math.random() * window.innerWidth}px`
        h.style.top = `${Math.random() * window.innerHeight}px`
        h.style.backgroundColor = "cornflowerblue"
        h.style.borderRadius = "100%"
        h.style.boxShadow = "0 0 25px cornflowerblue"
        document.body.appendChild(h) 
    }
}

setInterval(a,24)