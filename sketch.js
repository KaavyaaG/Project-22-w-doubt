const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var rope1, rope2, rope3, rope4, rope5;
var ball1, ball2, ball3, ball4, ball5;

function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		restitution:0.08
	}
	
	ball1=Bodies.circle(400,300,20,ball_options)
	World.add(world,ball1)

	ball2=Bodies.circle(450,300,20,ball_options)
	World.add(world,ball2)

	ball3=Bodies.circle(500,300,20,ball_options)
	World.add(world,ball3)

	ball4=Bodies.circle(550,300,20,ball_options)
	World.add(world,ball4)

	ball5=Bodies.circle(600,300,20,ball_options)
	World.add(world,ball5)

	rope1= new rope(ball1,roof,-80,0);
	rope2= new rope(ball2,roof,-160,0);
	rope3= new rope(ball3,roof,-220,0);
	rope4= new rope(ball4,roof,-300,0);
	rope5= new rope(ball5,roof,-380,0);

	var roof_options={
		isStatic:true			
	}
	
	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");


  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
display();
  
ellipse(ball1.position.x,ball1.position.y,20)
ellipse(ball2.position.x,ball2.position.y,20)
ellipse(ball3.position.x,ball3.position.y,20)
ellipse(ball4.position.x,ball4.position.y,20)
ellipse(ball5.position.x,ball5.position.y,20)
 
}

function applyForce(){
	if(keyCode===RIGHT_ARROW){
	Matter.Body.applyForce(ball1,400,20)
	}
}
//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed(){
	if(keyDown==UP_ARROW){
		Matter.Body.applyForce(ball1,{x:0,y:0},{x:1,y:0})
	}
}
