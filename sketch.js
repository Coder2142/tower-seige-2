const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var  ground;
var polygonPos;
var Baseclass;
var Matter;
var polygon1;
var angle;

function preload() {
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    

    ground = new Ground(600,height,1200,20);
    stand1 = new Ground(600, 300, 300, 20 );
    polygon = new Polygon(200, 200, 20, 20);
    sling = new SlingShot(polygon.body, {x:200, y:200});
    block1 = new Blocks(520, 270, 40, 40 );
    block2 = new Blocks(560, 270, 40, 40 );
    block3 = new Blocks(600, 270, 40, 40 );
    block4 = new Blocks(640, 270, 40, 40 );
    block5 = new Blocks(540, 230, 40, 40 );
    block6 = new Blocks(580, 230, 40, 40 );
    block7 = new Blocks(620, 230, 40, 40 );
    block8 = new Blocks(560, 190, 40, 40 );
    block9 = new Blocks(600, 190, 40, 40 );
    block10 = new Blocks(580, 150, 40, 40 );
   //image(this.image,polygon.position,60,60);
    
}

function draw(){
    background("white");
    Engine.update(engine);
    ground.display();
    stand1.display();
    polygon.display();
    sling.display();
    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();
    block6.display();
    block7.display();
    block8.display();
    block9.display();
    block10.display();
    drawSprites();
}
function mouseDragged(){
   
        Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
    
}
    function mouseReleased(){
        sling.fly();
        
    }

    function reload(){
        if(keyCode === 32){
            Matter.Body.setPosition(polygon.body,{x: 200 , y: 200});
            sling.attach(polygon.body);
        }
        
    }

