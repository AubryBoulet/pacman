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
        this.radiant = 0.75;
        this.animationSpeed = 0.1;
        this.animationOrientation = 0;
        this.pellets = 0;
    }
    draw() {
        c.fillStyle = this.color;
        c.beginPath();
        c.arc(this.position.x,this.position.y, this.radius, this.radiant - this.animationOrientation, Math.PI*2 - (this.radiant + this.animationOrientation),false); // -0.75 -2.25
        c.lineTo(this.position.x, this.position.y)
        c.fill();
        c.closePath();
    }

    update(){
        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.radiant < 0 || this.radiant > 0.75) this.animationSpeed = -this.animationSpeed
        this.radiant += this.animationSpeed
        switch (this.lastDirection){
            case "up": //1.5
                this.animationOrientation = 1.5
                break;
            case "down": //4.75
                this.animationOrientation = 4.75
                break;
            case "left": //3.25
                this.animationOrientation = 3.25
                break;
            case "right": //0
                this.animationOrientation = 0
                break;
        }
        this.draw()
    }
}

class ghost {
    constructor({position, velocity, color, path}) {
        this.position = position;
        this.velocity = velocity;
        this.speed = 4
        this.path = path;
        this.radius = 15;
        this.color = color;
        this.lastDirection = "";
        this.pathIndex = 0;
        this.status = 0;
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
                    this.velocity.y = -this.speed;
                    this.velocity.x = 0;
                    this.lastDirection = "up"
                    break;
                case "down":
                    this.velocity.y = this.speed;
                    this.velocity.x = 0;
                    this.lastDirection = "down"
                    break;
                case "left":
                    this.velocity.y = 0;
                    this.velocity.x = -this.speed;
                    this.lastDirection = "left"
                    break;
                case "right":
                    this.velocity.y = 0;
                    this.velocity.x = this.speed;
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


