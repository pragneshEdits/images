

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var dustbin1, paperObject,paperImg,groundObject;
var world;

function preload()
{

    
}


	


function setup() {
	createCanvas(1250, 650);
	rectMode(CENTER);


	engine = Engine.create();
	world = engine.world;
	
	paperObject=new Paper(200,450,70);


	groundObject=new Ground(width/2,640,width,20);
	dustbin1=new Dustbin(1200,540,20,200);
	dustbin2=new Dustbin(1000,540,20,200);
	dustbin3=new Dustbin(1100,630,200,20);
	dustbin4=new Dustbin(1100,540,300,200);
	//Create a Ground


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
 
  
  paperObject.display();
  groundObject.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  dustbin4.display();
}

function keyPressed() {
	if (keyCode === UP_ARROW) {
      if(paperObject.body.position.x<210){
		Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:130,y:-145});

	  }

  
	}
}


