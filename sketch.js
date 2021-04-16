const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var platform;
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5;
var roof1;
var chain1,chain2,chain3,chain4,chain5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

	platform = new Ground(400,height,800,20);

	bobObject1 = new Bob(200,600,40,40);
	bobObject2 = new Bob(300,600,40,40);
	bobObject3 = new Bob(400,600,40,40);
	bobObject4 = new Bob(500,600,40,40);
	bobObject5 = new Bob(600,600,40,40);

	chain1 = new Chain(bobObject1.body,{x:200,y:150});
	chain2 = new Chain(bobObject2.body,{x:300,y:150});
	chain3 = new Chain(bobObject3.body,{x:400,y:150});
	chain4 = new Chain(bobObject4.body,{x:500,y:150});
	chain5 = new Chain(bobObject5.body,{x:600,y:150});

	roof1 = new Roof(415,150,480,20);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine);

  platform.display();
  roof1.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  chain1.display();
  chain2.display();
  chain3.display();
  chain4.display();
  chain5.display();

  drawSprites();
 
}

function mouseDragged(){
	Matter.Body.setPosition(bobObject1.body,{x:mouseX,y:mouseY});
}