//Global Variables

var bananaImage, obstacleImage
var obstaclegroup
var background, score
var player_running
var backImg




  function preload(){
  backImg = loadImage("jungle.jpg");
    
  player_running = 
loadAnimation("Monkey_01.png", "Monkey_02.png","Monkey_03.png", "Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png" ,"Monkey_08.png","Monkey_09.png","Monkey_10.png");
    
  bananaImage = loadImage("Banana.png");
    
  obstacleImage = loadImage("stone.png");
    

  
}


function setup() {
  createCanvas(600,200);
  
  background = createSprite(200,180,400,20);
  background.addImage("background",backImg);
  background.x = background.width /2;
  background.velocityX = -4  
  
}


function draw(){
 //background(255); 
  
drawSprites();
}