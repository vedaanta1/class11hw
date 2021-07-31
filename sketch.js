var road, roadpng;
var boy, boy_running;
var invisright;
var invisleft;


function preload(){
  //pre-load images
  roadpng = loadImage("path.png");
  boy_running = loadAnimation("Runner-1.png", "Runner-2.png");
}

function setup(){
  createCanvas(400,400);
  //create sprites here
  road = createSprite(200, 200);
  road.addImage(roadpng);
  
  road.scale = 1.2
  

  boy = createSprite(200, 350);
  boy.addAnimation("running",boy_running);
  boy.scale = 0.05;
  
  

  
   }


function draw() {
  background(0);
  road.velocityY = 4;
  if(road.y > 400){
    road.y = road.height/4;
  }


  boy.x = mouseX;
  if(boy.x > 365){
    boy.x = 365;
  }
  if(boy.x < 35){
    boy.x = 35;
  }
  
  drawSprites();
}
