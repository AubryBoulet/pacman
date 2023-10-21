const canvas = document.querySelector("canvas");
const c = canvas.getContext("2d");
let lastKey = ""
let rndPlayerX = 0
let rndPlayerY = 0
canvas.width = innerWidth;
canvas.height = innerHeight;
canvas.style.overflow = "hidden";



animate();


addEventListener('keydown', (event)=>{
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
