"use strict";

const dino = document.getElementById("dino");
const cactus = document.getElementById("cactus");

function jump() {
    if(dispatchEvent.classList != "jump") {
        dino.classList.add("jump");
        setTimeout(function () {
            dino.classList.remove("jump")
        }, 500)
    }
}

const checkAlive = setInterval(function() {
    const dinoTop = parseInt(
        window.getComputedStyle(dino).getPropertyValue("top")
    )
    const cactusLeft = parseInt(
        window.getComputedStyle(cactus).getPropertyValue("left")
    )

    if (cactusLeft > 0 && cactusLeft < 100 && dinoTop >= 150) {
        dino.style.animationPlayState = "paused";
        cactus.style.animationPlayState = "paused";
        alert("Ooops, you lost!");
        window.location.reload();
    }
}, 10)

document.addEventListener("keydown", function() {
    jump();
})