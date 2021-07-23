var player,playerImage;
var  bgImage;
var bg;
var thanos ,thanosImage;
var lazer ,lazerImage


function preload(){
  playerImage=loadAnimation("iron.png");
  playerStop=loadImage("ironman.png");
  bgImage=loadImage("bg.png");
  thanosImage=loadImage("thanos.png");
  lazerImage=loadImage("lazer.png");

  

}
function setup(){
  createCanvas(windowWidth,windowHeight);

  bg=createSprite(windowWidth/2 ,windowHeight/2,width,height);
  bg.addImage(bgImage);
  player=createSprite(width/2-500,height/2+100);
  
  player.addImage("stop",playerStop);
  player.scale=0.3
  

 
  thanos=createSprite(width/2+400 ,height/2+90);
  thanos.addImage(thanosImage);
  thanos.scale=0.5


 lazer=createSprite(width/2-500,height/2+100);
 lazer.addImage(lazerImage);
 lazer.visible=false;


  
}
function draw(){
  background("blue");
  //bg.velocityX=3;
  console.log(bg.x);

  //if(bg.x>800){
   // bg.x=bg.width/3+100;
  //}
if(keyWentDown("f")){
      
      
}

if(keyWentUp("g")){
  //player.addAnimation("move",playerImage);
  
}

if(keyWentDown("space")){
  lazer.visible=true;
  player.addAnimation("move",playerImage);
  player.changeAnimation("move",playerImage);
}
if(keyWentUp("space")){
  player.changeAnimation("stop",playerStop);
  lazer.visible=false;
}

  if(keyDown("a")){
    
    player.x=player.x-2
   // player.velocityX=-2
  }
  if(keyDown("s")){
    player.y=player.y+2
   // player.velocityX=-2
  }
  if(keyDown("d")){
    player.x=player.x+2
   // player.velocityX=-2
  }
  if(keyDown("w")){
    player.y=player.y-2
   // player.velocityX=-2
  }
  drawSprites();
}