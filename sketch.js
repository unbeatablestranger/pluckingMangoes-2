
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObj;
var mango1;
var world,boy;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new mango(1100,100,30);
	mango2 = new mango(1180,150,28);
	mango3 = new mango(1050,130,25);
	mango4 = new mango(950,250,30);
	mango5 = new mango(900,200,28);
	mango6 = new mango(1000,200,28);
	mango7 = new mango(1200,230,25);
	mango8 = new mango(1080,50,30);

	stoneObj = new Stone(150,350,25);

	launcherObj = new Chain(stoneObj,{x:230,y:450});

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);
	
	Engine.run(engine);

}

function draw() {
  Engine.update(engine);
  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();
  mango8.display();

  stoneObj.display();

  groundObject.display();

  if(keyPressed("space"))
  {
    launcherObj.attach(stoneObj);
  }

}

function mouseDragged()
{
  Matter.Body.setPosition(stoneObj.body,{x:mouseX,y:mouseY});
}

function mouseReleased()
{
  launcherObj.fly();
}
