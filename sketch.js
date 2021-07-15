var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;

function preload() {
  trex_running = loadAnimation("trex1.png", "trex3.png", "trex4.png");
  trex_collided = loadImage("trex_collided.png");

  groundImage = loadImage("ground2.png")
}

function setup() {
  createCanvas(600, 200);

  //create a trex sprite
  trex = createSprite(60,170,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  invisibleGround=createSprite(200,190,600,10)
  //create a ground sprite
  ground = createSprite(200,185,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
}

function draw() {
  background(220);

  //jump when the space button is pressed
  if (keyDown("space") && trex.y>100) { 
    trex.velocityY = -10;
  }
  invisibleGround.visible=false;

  trex.velocityY = trex.velocityY + 0.8

  if (ground.x < 0) {
    ground.x = ground.width / 2;
  }
  console.log("welcome to the game")
  console.log("press the space to jump")
  

  trex.collide(invisibleGround);
  drawSprites();
}