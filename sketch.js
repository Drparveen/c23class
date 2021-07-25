const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;
var canvas, angle, tower, ground, cannon;
var background


function preload() {
  towerImage = loadImage("./assets/tower.png");
  backgroundImage= loadImage("./assets/background.gif")
}

function setup() {
  canvas = createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;
  cannon= new Cannon(150,100,100,50,PI/4)
  var options={
    isStatic:true
  }

  ground = Bodies.rectangle(0,590,0,0,options)
  World.add(world,ground)

  tower = Bodies.rectangle(80,270,0,0,options)
  World.add(world,tower)
}



function draw() {
  background(189);
image(backgroundImage,0,0,width,height)
  Engine.update(engine);
  rect(ground.position.x,ground.position.y,1200,1);

  image(towerImage,tower.position.x,tower.position.y,160,320)
  cannon.display() 

}
