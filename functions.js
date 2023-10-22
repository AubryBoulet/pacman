function initGame(){
    gameStep = 0;
    score = 0;
    scoreSP.textContent = score;
    initMap();
    initEntities();
    console.log(mapPellets)
}
function drawMap(){
    map.forEach((row, i) => {
        row.forEach((symbol, j) =>{
            switch (symbol){
                case "_":
                    c.fillStyle = "blue";
                    if (j == 10 && i == 11) c.fillStyle = "orange";
                    c.fillRect(j*Boundary.width, i*Boundary.height, Boundary.width, Boundary.height);
                    break;
                case ".":
                    c.fillStyle = "white";
                    c.beginPath();
                    c.arc(j*Boundary.width+Boundary.width/2,i*Boundary.height+Boundary.height/2, 3, 0, Math.PI*2);
                    c.fill();
                    c.closePath();
                    break;
                case "G":
                    c.fillStyle = "yellow";
                    c.beginPath();
                    c.arc(j*Boundary.width+Boundary.width/2,i*Boundary.height+Boundary.height/2, 10, 0, Math.PI*2);
                    c.fill();
                    c.closePath();
                    break;
            }
        })
    })
}

function checkColision(){
    for (const ghost in ghosts) {
        if (Math.hypot(ghosts[ghost].position.x - player.position.x, ghosts[ghost].position.y - player.position.y) < ghosts[ghost].radius + player.radius){
            if (ghosts[ghost].status == 0){ //En chasse
                gameStep = 2;
            }else if (ghosts[ghost].status == 1){ //Chassé
                ghosts[ghost].status = 2 //Mort
            }
        }
    }
}

function checkPelletColision(){
    const rndPlayerY = Math.round((player.position.y-Boundary.height)/40)
    const rndPlayerX = Math.round((player.position.x-Boundary.width)/40)
    if(map[rndPlayerY][rndPlayerX]==="."){
        map[rndPlayerY][rndPlayerX]=" ";
        score +=10;
        player.pellets++
        if (player.pellets == mapPellets){
            let tempScore = score;
            initGame();
            score = tempScore;
            scoreSP.textContent = score
        }
    }
    scoreSP.textContent = score
}

function animate(){
    requestAnimationFrame(animate);
    //draw background
    c.fillStyle = "black";
    c.fillRect(0,0,canvas.width,canvas.height);
    //draw the map
    drawMap();

    switch (gameStep){
        case 0: //game is waiting to start
            //Display player & ghost and wait for game start
            player.draw()
            ghosts.blinky.draw()
            ghosts.pinky.draw()
            ghosts.clyde.draw()
            ghosts.inky.draw()
            break;
        case 1: //game is playing
            //check if player can move
            checkDirection(player,lastKey)
            //check for colision between player and ghost
            checkColision()
            //update player position and draw
            player.update();
            //update blinky poristion and draw
            ghosts.blinky.update();
            //update pinky poristion and draw
            ghosts.pinky.update();
            //update clyde poristion and draw
            ghosts.clyde.update();
            //update inky poristion and draw
            ghosts.inky.update();
            //Check pellets colision
            checkPelletColision();
            break;
        case 2: //game over !
            //Display player & ghost and wait for game start
            player.draw()
            ghosts.blinky.draw()
            ghosts.pinky.draw()
            ghosts.clyde.draw()
            ghosts.inky.draw()
            break;
    }
}