var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var box1,box2,box3
var packageBody,ground
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
}

function setup() {
	createCanvas(800, 700);
	engine = Engine.create();
    world = engine.world;
	rectMode(CENTER);
	
	var options = {
		isStatic: true
	}
	bottomedge = Bodies.rectangle(400,654,width,height,options);

	World.add(world,bottomedge)

	packageSprite=createSprite(width/2, 80, 10,10);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	box1=createSprite(400, 654, 300,20)
	box1.shapeColor="red"

	box2=createSprite(240,620,20,100)
	box2.shapeColor="red"

	box3=createSprite(540,620,20,100)
	box3.shapeColor="red"

	

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0, isStatic:true});
	World.add(world, packageBody);
	

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  drawSprites();
 
}

function keyPressed() {
 if (keyCode === DOWN_ARROW) {
	// Look at the hints in the document and understand how to make the package body fall only on
	//packageSprite.x=packageBody.position.x
	//packageSprite.y=packageBody.position.y
	Matter.Body.setStatic(packageBody,false);
    
  }
}



