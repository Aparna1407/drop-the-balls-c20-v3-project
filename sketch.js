
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var plane, block1,block2;

var rotate1,rotate2,rotate3;

var angle1,angle2, angle3;

var particle1,particle2,particle3,particle4,particle5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
var options={
	isStatic:true
}
plane=Bodies.rectangle(400,650,800,20,options)
World.add(world,plane);

block1=Bodies.rectangle(200,400,100,10,options)
World.add(world,block1)

block2=Bodies.rectangle(600,400,100,10,options)
World.add(world,block2)

rotate1=Bodies.rectangle(400,200,100,10,options)
World.add(world,rotate1)

rotate2=Bodies.rectangle(400,200,100,10,options)
World.add(world,rotate2)

rotate3=Bodies.rectangle(400,200,100,10,options)
World.add(world,rotate3)

angle1=0;
angle2=45;
angle3=90;

var particle={
	friction:0.4,
	restitution:0.02
}
particle1=Bodies.circle(300,10,5,particle);
World.add(world,particle1)

particle2=Bodies.circle(200,20,5,particle);
World.add(world,particle2)

particle3=Bodies.circle(400,30,5,particle);
World.add(world,particle3)

particle4=Bodies.circle(500,40,5,particle);
World.add(world,particle4)

particle5=Bodies.circle(600,50,5,particle);
World.add(world,particle5)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  ellipseMode(CENTER);
  background("cyan");

  fill("brown")
  rect(plane.position.x, plane.position.y, 800,20)

  rect(block1.position.x, block1.position.y, 100,10)

  rect(block2.position.x, block2.position.y, 100,10)

Matter.Body.rotate(rotate1,angle1)
push()
translate(rotate1.position.x,rotate1.position.y);
rotate(angle1);
rect(0,0,100,10)

pop()
angle1+=0.6;

Matter.Body.rotate(rotate2,angle2)
push()
translate(rotate2.position.x,rotate2.position.y);
rotate(angle2);
rect(0,0,100,10)

pop()
angle2+=0.6;

Matter.Body.rotate(rotate3,angle3)
push()
translate(rotate3.position.x,rotate3.position.y);
rotate(angle3);
rect(0,0,100,10)

pop()
angle3+=0.6;

ellipse(particle1.position.x,particle1.position.y,10,10);
ellipse(particle2.position.x,particle2.position.y,10,10);
ellipse(particle3.position.x,particle3.position.y,10,10);
ellipse(particle4.position.x,particle4.position.y,10,10);
ellipse(particle5.position.x,particle5.position.y,10,10);
  drawSprites();
 
}



