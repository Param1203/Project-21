const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine, world, ball;
var ground;
var leftSide, rightSide;

function setup() {
	createCanvas(800, 400);
	engine = Engine.create();
	world = engine.world;

    var ball_options = {
		isStatic:false,
		restititution:0.3,
		friction:0,
		density:1.2
	}

	//Create the Bodies Here.	
	ball = Bodies.circle(100,300,40, ball_options);

	World.add(world, ball);

    ground=new Ground(width/2,670,width,20);
    //leftSide = new Ground(1100,600,20,120);
    //rightSide = new Ground(1350,600,20,120);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("green");

  Engine.update(engine);

  ellipse(ball.position.x , ball.position.y, 40);

  ground.display();
  leftSide.display();
  rightSide.display();
 
}

function keyPressed(){
	if (keyCode === UP_ARROW){

		Matter.Body.applyForce(ball,{x: 0, y: 0},{x: 0.05, y: -0.05});         
	}
}



