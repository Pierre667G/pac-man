const centre = document.getElementById('play');
const pacman = document.createElement("div");
pacmanPos = {
    x: 0,
    y: 0,
}
pacman.style.width = "10px";
pacman.style.height = "10px";
pacman.style.backgroundColor = "yellow";
pacman.id = 'pak';
centre.appendChild(pacman);

const RIGHT = "RIGHT";
const BOTTOM = "BOTTOM";
const LEFT = "LEFT";
const TOP = "TOP";
let direction = RIGHT;

document.addEventListener('keypress', (e) => {

    if (e.code === "KeyW") {
        console.log("top");
        direction = "TOP"
        pacman.x + 10;
        pacman.style.top = pacman.x + "px";
    }

    if (e.code === "KeyA") {
        console.log("left");
        direction = "LEFT"
    }
    
    if (e.code === "KeyS") {
        console.log("bottom");
        direction = "BOTTOM"
    }

    if (e.code === "KeyD") {
        console.log("right");
        direction = "RIGHT";
    }
});

setInterval(() => {
    
}, 400);