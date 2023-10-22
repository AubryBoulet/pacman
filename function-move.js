//deplacement related functions
function checkDirection(object,desiredDirection){
    if((object.position.y -Boundary.height/2)%Boundary.height || (object.position.x - Boundary.width/2)%Boundary.width){
        return true;
    } 
    let target = ""
    let col = 0;
    let row = 0;
    switch (desiredDirection){
        case "up":
            row = -1;
            break;
        case "down":
            row = 1;
            break;
        case "left":
            col = -1;
            break;
        case "right":
            col = 1;
            break;
    }
    if (desiredDirection === object.lastDirection){
        target = map[(object.position.y - Boundary.height/2)/40+row][(object.position.x - Boundary.width/2)/40+col]
        if (target == "_"){
            object.lastDirection = "";
            object.velocity.x = 0;
            object.velocity.y = 0;
            return false;
        }
    }else{
        target = map[(object.position.y - Boundary.height/2)/40+row][(object.position.x - Boundary.width/2)/40+col]
        if (target === " " || target === "." || target === "G"){
            object.lastDirection = desiredDirection;
            object.velocity.x = col*5;
            object.velocity.y = row*5;
            return true
        }
        row = 0; col = 0;
        switch (object.lastDirection){
            case "up":
                row = -1;
                break;
            case "down":
                row = 1;
                break;
            case "left":
                col = -1;
                break;
            case "right":
                col = 1;
                break;
        }
        target = map[(object.position.y - Boundary.height/2)/40+row][(object.position.x - Boundary.width/2)/40+col]
        if (target == "_"){
            object.lastDirection = "";
            object.velocity.x = 0;
            object.velocity.y = 0;
            return false;
        }  
    }
    return true;  
}

function canMove(x,y){
    if(map[y][x] == "_") return false
    return true
}

function nextMove(object,targetX,targetY,step = 4){
    let X = (object.position.x - Boundary.width/2)/40;
    let Y = (object.position.y - Boundary.height/2)/40;
    switch(step % 4){
        case 0: //aller vers la gauche
            if (object.lastDirection == "right") break;
            if (targetX >= X && step == 4) 
            {
                break;
            }
            if (canMove(X-1,Y)){
                return step;
            }
            else{
                break;
            }
        case 1: //aller vers le haut
            if (object.lastDirection == "down") break;
            if (targetY >= Y && step == 5) 
            {
                break;
            }
            if (canMove(X,Y-1)){
                return step;
            }
            else{
                break;
            }
        case 2: //aller vers la droite
            if (object.lastDirection == "left") break;
            if (targetX <= X && step == 6) 
            {
                break;
            }
            if (canMove(X+1,Y)){
                return step;
            }
            else{
                break;
            }
        case 3: //aller vers le bas
            if (object.lastDirection == "up") break;
            if (targetY <= Y && step == 7) 
            {
                break;
            }
            if (canMove(X,Y+1)){
                return step;
            }
            else{
                break;
            }
        }
    if (step == 12) return false
    return nextMove(object,targetX,targetY,step+1);
}

function makePath(object,targetX,targetY){
    targetX = (targetX - Boundary.width/2)/40;
    targetY = (targetY - Boundary.height/2)/40;
    let X = (object.position.x - Boundary.width/2)/40;
    let Y = (object.position.y - Boundary.height/2)/40;
    let firstLoop = 1; move = null
    while (X != targetX || Y != targetY){
        if (firstLoop){
            move = nextMove(object,targetX,targetY);
            nextPosition = pushNextMove(object,(object.position.x - Boundary.width/2)/40,(object.position.y - Boundary.height/2)/40,move);
            X = nextPosition.x;
            Y = nextPosition.y;
            firstLoop = 0;
        }else{
            if (isCrossRoad(nextPosition.x,nextPosition.y,nextPosition.direction)){
                break;
            }else{
                nextPosition = pushNextMove(object,nextPosition.x,nextPosition.y,move);
            }
        }
    }
}

function isCrossRoad(X,Y,direction){
    switch (direction){
        case "up":
            if(map[Y-1][X]=="_")return true
        case "down":
            if(map[Y+1][X]=="_")return true
            if (map[Y][X-1] != "_" || map[Y][X+1] != "_" ){
                return true
            }else{
                return false
            }
        case "left":
            if(map[Y][X-1]=="_")return true
        case "right":
            if(map[Y][X+1]=="_"){
                return true
            }
            if (map[Y-1][X] != "_" || map[Y+1][X] != "_" ){
                return true
            }else{
                return false
            }
    }
}

function pushNextMove(object,X,Y,move){
    let nextPosition = {
        x: X,
        y: Y,
        direction: ""
    }
    switch(move){
        case 4: //gauche
        case 8:
            object.path.push("left");
            nextPosition.x -=1;
            nextPosition.direction = "left";
            break;
        case 5: //haut
        case 9:
            object.path.push("up");
            nextPosition.y -=1;
            nextPosition.direction = "up";
            break;
        case 6: //droite
        case 10:
            object.path.push("right");
            nextPosition.x +=1;
            nextPosition.direction = "right";
            break;
        case 7: //bas
        case 11:
            object.path.push("down");
            nextPosition.y +=1;
            nextPosition.direction = "down";
            break;
    }    
    return nextPosition;
}
function requestNewPath(object){
    switch(object.status){
        case 0: //en chasse
            if (object == ghosts.blinky){
                object.path = [];
                object.pathIndex = 0;
                makePath(object,player.position.x,player.position.y);
            }
            if (object == ghosts.pinky || object == ghosts.inky){
                object.path = [];
                object.pathIndex = 0;
                if (Math.floor(object.position.x /40) == Math.floor(player.position.x /40) || Math.floor(object.position.y /40) == Math.floor(player.position.y /40)){
                    makePath(object,player.position.x,player.position.y);
                }else{
                    switch(player.lastDirection){
                        case "left":
                            makePath(object,40,player.position.y);
                            break;
                        case "right":
                            makePath(object,760,player.position.y);
                            break;
                        case "up":
                            makePath(object,player.position.x,40);
                            break;
                        case "down":
                            makePath(object,player.position.x,1040);
                            break
                        default:
                            makePath(object,player.position.x,player.position.y);
                    }
                }
            }
            if (object == ghosts.clyde){
                object.path = [];
                object.pathIndex = 0;
                let rndx = Math.random() *(760-40)+40
                let rndy = Math.random()*(1040-40)+40
                makePath(object,rndx,rndy)
            }
        break;
    case 1: //Chassé

            break;
    case 2: //Mort (retour à la base)

            break;
    }
}