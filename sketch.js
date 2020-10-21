
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload () {
	 tree.loadImage(tree.png);
	 boy.loadImage(boy.png);
	 stone.loadImage(stone.png);
	 mango.loadImage(mango.png);
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	var tree = createSprite(700, 500, 100, 100);
	var boy = createSprite(200, 600, 100, 100);
	var stone = createSprite(120, 600, 10, 10);
	var mango = createSprite(700, 500, 100, 100);





	
}
  
		


function draw() 
{
  rectMode(CENTER);
  background(2);
  
  drawSprites();
}
