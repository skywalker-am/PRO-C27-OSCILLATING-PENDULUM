const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg, ground;
var pendulum, string, suspencer;

function preload() {
  backgroundImg = loadImage("sprites/world-map.jpg");
}

function setup() {
  srcWidth = window.innerWidth;
  srcHeight = window.innerHeight;
  createCanvas(srcWidth, srcHeight);

  engine = Engine.create();
  world = engine.world;

  engine.world.gravity.y = 10;

  pendulum = new Pendulum(srcWidth/2, 400, 30);
  suspencer = new Suspencer(srcWidth/2, 25, 200, 20);
  string = new String(pendulum.bodyP,{x:srcWidth/2,y:25});
}

function draw() {
  background(backgroundImg);  
  Engine.update(engine);

  suspencer.display();
  pendulum.display();
  string.display();
}

function mouseDragged(){
  Matter.Body.setPosition(pendulum.bodyP,{x:mouseX,y:mouseY});
}

function mouseReleased() {
  //slingShot.fly();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.setPosition(pendulum.bodyP,{x:srcWidth/2,y:425}); 
    Matter.Body.setVelocity(pendulum.bodyP, {x:0,y:0});
  }else{
    Matter.Body.setPosition(pendulum.bodyP,{x:(srcWidth/2)-200,y:375});
  }
}