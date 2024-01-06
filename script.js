console.log("hii");

const p = document.querySelector("p");
const slider = document.querySelector(".silder");
const body = document.querySelector("body")
const btn = document.querySelector("button");
const img = document.querySelector('img')

btn.addEventListener("click", () => {

    if (p.innerHTML == "ON") {
        p.innerHTML = "OFF"
        p.style.color = "white"
        p.style.transform = "translateX(80px)"
        p.style.transition = "1s ease-in-out"
        body.style.backgroundColor = "white"
        slider.style.transform = "translateX(-50px)"
        slider.innerHTML = `<img src="daymode.jpg" alt="" />`

    }
    else {
        p.innerHTML = "ON"
        p.style.color = "white"
        p.style.transform = "translateX(0px)"
        body.style.backgroundColor = "black"
        slider.style.transform = "translateX(0px)"
        slider.innerHTML = `<img src="nightmode.jpg" alt="" />`

    }


})