function moveRandomEl(elm) {
    elm.style.position = "absolute";
    elm.style.top = Math.floor(Math.random() * 90 + 5) + "%";
    elm.style.left = Math.floor(Math.random() * 90 + 5) + "%";
}

const moveRandom = document.querySelector("#move-random");

// Move on hover (desktop)
moveRandom.addEventListener("mouseenter", function(e) {
    moveRandomEl(e.target);
});

// Move on touch (mobile)
moveRandom.addEventListener("touchstart", function(e) {
    e.preventDefault(); // prevent mobile default tap
    moveRandomEl(e.target);
});