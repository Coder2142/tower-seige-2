class Polygon{
    constructor(xPos, yPos,radius) {
        var options = {
          isStatic:false,
          restitution:0.3,
          friction:0.5,
          density:1.2
        }
        
        this.xPos=xPos;
        this.yPos=yPos;
        this.radius=radius;
        this.image = loadImage('polygon-60x60.png');
        this.body=Bodies.circle(this.xPos,this.yPos,this.radius/2,options);
        World.add(world,this.body);
    }
    

    display(){    
    var polygonPos=this.body.position;
    rectMode(CENTER);
    strokeWeight(3);
    fill(255,0,255)
    push();
    translate(polygonPos.x, polygonPos.y);
    circle(0,0,this.radius);
    imageMode(CENTER);
	image(this.image, 0,0,this.radius)
    pop();
    }
}  