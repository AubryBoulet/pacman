class Boundary{
    static width = 40;
    static height = 40;
}


class sprite {
    constructor({position, velocity, color}) {
        this.position = position;
        this.velocity = velocity;
        this.radius = 15;
        this.color = color;
        this.lastDirection = "";
    }
    draw() {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.position.x,this.position.y, this.radius, 0, Math.PI*2,false);
        c.fill();
        c.closePath();
    }

    update(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.draw()
    }
}

class ghost {
    constructor({position, velocity, color, path}) {
        this.position = position;
        this.velocity = velocity;
        this.path = path;
        this.radius = 15;
        this.color = color;
        this.lastDirection = "";
        this.pathIndex = 0
    }
    draw() {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.position.x,this.position.y, this.radius, 0, Math.PI*2,false);
        c.fill();
        c.closePath();
    }

    update(){
        if ((this.position.x - Boundary.width/2) % 40 == 0 && (this.position.y - Boundary.height/2) % 40 == 0 ){
            if (this.velocity.x || this.velocity.y) this.pathIndex++
            if (this.pathIndex == this.path.length ) requestNewPath(this)
            switch(this.path[this.pathIndex]){
                case "up":
                    this.velocity.y = -4;
                    this.velocity.x = 0;
                    this.lastDirection = "up"
                    break;
                case "down":
                    this.velocity.y = 4;
                    this.velocity.x = 0;
                    this.lastDirection = "down"
                    break;
                case "left":
                    this.velocity.y = 0;
                    this.velocity.x = -4;
                    this.lastDirection = "left"
                    break;
                case "right":
                    this.velocity.y = 0;
                    this.velocity.x = 4;
                    this.lastDirection = "right"
                    break;
            }
            if (this.path.length == 0){
                this.velocity.x = 0;
                this.velocity.y = 0;
                requestNewPath(this)
            }
        }
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        this.draw()
    }
}


