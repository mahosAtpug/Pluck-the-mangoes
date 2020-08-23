
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var stoneObj, mango1, mango2, mango3, mango4, mango5,mango6;
var ground, slingShot, tree, boy, treeImg, boyImg;

 function preload(){
	treeImg = loadImage("tree.png");
	boyImg = loadImage("boy.png");
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	mango1= new Mango(600,200,50);
	mango2= new Mango(560,170,50);
	mango3= new Mango(640,170,50);
	mango4= new Mango(600,240,50);
	mango5= new Mango(560,230,50);
	mango6= new Mango(560,260,50);


	stoneObj = new Stone(160,490,25,25);
	Matter.Body.setStatic(stoneObj.body, true);

	ground = Bodies.rectangle(400, 650, 800, 20 , {isStatic:true} );
	 World.add(world, ground);
	 
	 // slingShot = new SlingShot(stoneObj.body,{x:160, y:490});

	 tree = Bodies.rectangle(600,200,20,20);
	 boy = Bodies.rectangle(230,400,20,20);

	Engine.run(engine);
  
}


function draw() {
  Engine.update(engine);
  rectMode(CENTER);
  background(200);
 
  image(treeImg,400,60,400,600);
  image(boyImg,100,390,350,350);


//   rectMode(CENTER);
//   rect(boy.position.x,boy.position.y,20,20);
 

  detectCollision(stoneObj,mango1);
  detectCollision(stoneObj,mango2);
  detectCollision(stoneObj,mango3);
  detectCollision(stoneObj,mango4);
  detectCollision(stoneObj,mango5);

  fill(255,0,0);
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,10);

  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();

  stoneObj.display();
//   slingShot.display();  
   
  drawSprites();
}

function detectCollision(object1, object2){
	mangoBodyPosition=object1.body.position
	stoneBodyPosition=object2.body.position

	var distance=dist(stoneBodyPosition.x, stoneBodyPosition.y, mangoBodyPosition.x, mangoBodyPosition.y)
	
	if(distance<=object2.radius + object1.width){
		Matter.Body.setStatic(object2.body,false);
	}
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setStatic(stoneObj.body, false);
		Matter.Body.applyForce(stoneObj.body, stoneObj.body.position, {x:90, y:-75})
	    // slingShot.attach(stoneObj.body);
	}

	 if(keyCode===UP_ARROW){
	 	Matter.Body.setPosition(stoneObj.body, {x:160,y:490})
		Matter.Body.setStatic(stoneObj.body, true);
	}
}


//  function mouseDragged(){
 
//     Matter.Body.setPosition(stoneObj.body,{x:mouseX, y:mouseY});
//  }

// function mouseReleased(){
//      slingShot.fly();
//  }




