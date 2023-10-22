const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
const scoreSP = document.querySelector("#score");
let map = []
let player; let blinky; let pinky; let clyde; let inky;
let gameStep = 0;
let lastKey = "";
let rndPlayerX = 0;
let rndPlayerY = 0;
let score = 0;
canvas.width = innerWidth-100;
canvas.height = innerHeight-100;

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
