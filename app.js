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
canvas.width = innerWidth-100;
canvas.height = 1100;
console.log(canvas.height)

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
