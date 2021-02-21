var ground;
var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var FoodGroup, obstacleGroup;
var score;
var survivalTime = 0;


function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}

  function setup() {
  createCanvas(500, 400);
  //creating monkey
  monkey=createSprite(80,315,20,20);
  monkey.addAnimation("moving", monkey_running);
  monkey.scale=0.1
  
      
    
    
    
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  ground.x=ground.width/2;
  console.log(ground.x);
  
      obstacleGroup = createGroup();

      FoodGroup = createGroup();

  }


function draw() {
  background(255);
  
  
  stroke("white");
  textSize(20);
  fill("white");
  text("Score: " + score, 500,50);  
    
    
  stroke("black");
  textSize(20);
  fill("black");  
  survivalTime=Math.ceil(frameCount/frameRate())  
  text("Survival Time: "+ survivalTime, 100,50);
  
  
  if(ground.x<0) {
    ground.x=ground.width/2;
  }
  if(keyDown("space") ){
    monkey.velocityY = -12;
  }
  monkey.velocityY = monkey.velocityY +0.8;
  
  monkey.collide(ground);
      
  drawSprites();
    
  
     //spawn obstacles on the ground
    spawnObstacles();
    
    if(obstacleGroup.isTouching(monkey)){
        monkey.velocityX = 0;
      
    }
  
  spawnFood();

  
}

  function spawnFood(){
  
  //write code here to spawn the bananas
  if (frameCount % 80 === 0) {
    var banana = createSprite(600,120,40,10);
    banana.y = Math.round(random(80,120));
    banana.addImage(bananaImage);
    banana.scale = 0.1;
    banana.velocityX = -3;
    banana.lifetime = 300;
    
    
   //add each food to the group
    FoodGroup.add(banana);
  }
 
   }

function spawnObstacles(){
  
  if (frameCount % 10 === 0){
   var obstacle = createSprite(250,330,20,20);
   obstacle.velocityX = -5;
   
    //generate random obstacles
    var rand = Math.round(random(1,6));
    switch(rand) {
      case 1: obstacle.addImage(obstaceImage);
              break;
      default: break;
    }
   
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.1;
    obstacle.lifetime = 100;
   
   //add each obstacle to the group
    obstacleGroup.add(obstacle);
 }
  
  
}