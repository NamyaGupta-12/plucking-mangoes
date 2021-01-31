
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var Stone

function preload()
{
boyimg=loadImage("boy.png")	
treeimg=loadImage("tree.png")	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
 
	//Create the Bodies Here.
   Stone=new stone(50,400,100,200)

  Engine.run(engine);

  
}


function draw() {
  rectMode(CENTER);
  background(255);
  image(boyimg,100,450,100,300)
  image(treeimg,400,150,400,600)
  
  Stone.display();
  drawSprites();
 
}




