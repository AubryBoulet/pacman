const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const scoreSP = document.querySelector("#score");
let map = []
let player; 
const ghosts = {
    blinky: null,
    pinky: null,
    clyde: null,
    inky: null
}
let mapWidht = 0;
let mapHeight = 0;
let gameStep = 0;
let lastKey = "";
let score = 0;
let mapPellets = 0;
document.querySelector("body").style.overflow = "hidden";
canvas.width = innerWidth-100;
canvas.height = 1100;

console.log(canvas.height)
console.log(canvas.width)
console.log(innerWidth)
console.log(innerHeight)
const scaleX = innerWidth / canvas.width
const scaleY = innerHeight / canvas.height

if (scaleX < scaleY) {
    c.scale(scaleX,scaleX)
} else {
    c.scale(scaleY,scaleY)
}

initGame();
animate();


addEventListener('keydown', (event)=>{
    if (gameStep == 0 || gameStep == 2) gameStep++; if (gameStep == 3) initGame();
    switch(event.key){
        case "ArrowRight":
            lastKey = "right";
            break;
        case "ArrowLeft":
            lastKey = "left";
            break;
        case "ArrowDown":
            lastKey = "down";
            break;
        case "ArrowUp":
            lastKey = "up";
            break;
    }
})
