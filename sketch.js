var iss, spacecraft;
var bg, issimg, spacecraftimg1, spacecraftimg2, spacecraftimg3, spacecraftimg4
var dockingComplete= false;

function preload(){
bg=loadImage("Docking-undocking/spacebg.jpg");
issimg=loadImage("Docking-undocking/iss.png");
spacecraftimg1=loadImage("Docking-undocking/spacecraft1.png");
spacecraftimg2=loadImage("Docking-undocking/spacecraft2.png");
spacecraftimg3=loadImage("Docking-undocking/spacecraft3.png");
spacecraftimg4=loadImage("Docking-undocking/spacecraft4.png");
}

function setup() {
  spacecraft=createSprite(300,500,50,50);
  spacecraft.addImage(spacecraftimg1);
  spacecraft.scale=0.25;

  createCanvas(1200,800);
  iss=createSprite(400, 200, 50, 50);
  iss.addImage(issimg);

}

function draw() {
  background(bg);
  spacecraft.addImage(spacecraftimg1)
;  
  if(dockingComplete===false){
    spacecraft.x=spacecraft.x+random(-1,1);
  }

  if(keyDown("UP_ARROW")){
    spacecraft.y=spacecraft.y-2;
  }

  if(keyDown("DOWN_ARROW")){
    spacecraft.addImage(spacecraftimg2);
  }

  if(keyDown("RIGHT_ARROW")){
    spacecraft.addImage(spacecraftimg4);
    spacecraft.x=spacecraft.x+1;
  }

  if(keyDown("LEFT_ARROW")){
    spacecraft.addImage(spacecraftimg3);
    spacecraft.x=spacecraft.x-1;
  }

  if(spacecraft.y<=(iss.y+70)&&spacecraft.x<=(iss.x-10)){
    dockingComplete=true;
    textSize(25);
    fill("white");
    text("Docking Successful", 500, 400);
  }

  drawSprites();
}