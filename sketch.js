var bow , arrow,  background, redB, pinkB, greenB ,blueB ,arrowGroup;
var bowImage, arrowImage, green_balloonImage, red_balloonImage, pink_balloonImage ,blue_balloonImage, backgroundImage;

var score =0;
var PLAYGAME = 1;
var ENDGAME = 0;
var gamestate = PLAYGAME

function preload(){
  
  backgroundImage = loadImage("background0.png");
  
  arrowImage = loadImage("arrow0.png");
  bowImage = loadImage("bow0.png");
  red_balloonImage = loadImage("red_balloon0.png");
  green_balloonImage = loadImage("green_balloon0.png");
  pink_balloonImage = loadImage("pink_balloon0.png");
  blue_balloonImage = loadImage("blue_balloon0.png");
  
}



function setup() {
  createCanvas(400, 400);
  
  scene = createSprite(0,0,400,400);
  scene.addImage(backgroundImage);
  scene.scale = 2.5

  bow = createSprite(380,220,20,50);
  bow.addImage(bowImage); 
  bow.scale = 1;
  
   score = 0  

 redG= new Group();
 blueG= new Group();
 greenG= new Group();
 pinkG= new Group();

 
  arrowGroup= new Group();

  
}

function draw() {
 background(0);
 gamestate = PLAYGAME;
  
    scene.velocityX = -3 

    if (scene.x < 0){
      scene.x = scene.width/2;
    }
  
   bow.y = World.mouseY
  
   if (keyDown("space")) {
    createArrow();
   }
  
  var select_balloon = Math.round(random(1,4));
  
  if (World.frameCount % 100 == 0) {
    switch(select_balloon ){
      case 1:redBalloon();
      break;
      case 2:blueBalloon();
      break;
      case 3:pinkBalloon();
      break;
      case 4:greenBalloon();
      break;
      default:break;
    }
  }

if (arrowGroup.isTouching(redG)) {
   redG.destroyEach();
    score = score + 1;
}

if (arrowGroup.isTouching(blueG)) {
  blueG.destroyEach();
  score = score + 1; 
}

if (arrowGroup.isTouching(greenG)) {
  greenG.destroyEach();
  score = score + 1;
}

if (arrowGroup.isTouching(pinkG)) {
  pinkG.destroyEach();
  score = score + 1;
}

if (gameState = ENDGAME) {
  scene.velocityX= 0;

  redG.setVelocityXEach(0);
  redG.setLifetimeEach(-1);

  blueG.setVelocityXEach(0);
  blueG.setLifetimeEach(-1);

  greenG.setVelocityXEach(0);
  greenG.setLifetimeEach(-1);

  pinkG.setVelocityXEach(0);
  pinkG.setLifetimeEach(-1);

  arrowGroup.setVelocityXEach(0);
  arrowGroup.setLifetimeEach(-1);
 
}


  drawSprites();
  text("score:" + score, 200, 15);
  if (score == 10 ) {
    gamestate = ENDGAME;
    textSize(30);
    text("you win", 120, 250);
  }
  
}


function redBalloon() {
  var red = createSprite(0,Math.round(random(20, 370)), 10, 10);
  red.addImage(red_balloonImage);
  red.velocityX = 3;
  red.lifetime = 150;
  red.scale = 0.1;
  redG.add(red);
}

function blueBalloon() {
  var blue = createSprite(0,Math.round(random(20, 370)), 10, 10);
  blue.addImage(blue_balloonImage);
  blue.velocityX = 3;
  blue.lifetime = 150;
  blue.scale = 0.1;
  blueG.add(blue);
}

function greenBalloon() {
  var green = createSprite(0,Math.round(random(20, 370)), 10, 10);
  green.addImage(green_balloonImage);
  green.velocityX = 3;
  green.lifetime = 150;
  green.scale = 0.1;
  greenG.add(green);
}

function pinkBalloon() {
  var pink = createSprite(0,Math.round(random(20, 370)), 10, 10);
  pink.addImage(pink_balloonImage);
  pink.velocityX = 3;
  pink.lifetime = 150;
  pink.scale = 1
  pinkG.add(pink);
}

 function createArrow() {
  var arrow= createSprite(100, 100, 60, 10);
  arrow.addImage(arrowImage);
  arrow.x = 360;
  arrow.y=bow.y;
  arrow.velocityX = -4;
  arrow.lifetime = 100;
  arrow.scale = 0.3;
  arrowGroup.add(arrow);

}
