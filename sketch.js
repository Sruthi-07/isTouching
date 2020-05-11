var fixedRect, movingRect;
var gameObject1, gameObject2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(400, 100, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;

  gameObject1 = createSprite(200,200,20,80);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(500,300,50,50);
  gameObject2.shapeColor = "green";

  movingRect = createSprite(400, 400,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

  //movingRect.velocityY = -5;
  //fixedRect.velocityY = +5;
}

function draw() {
  background(0,0,0); 
  movingRect.x = mouseX;
  movingRect.y = mouseY; 

  if(isTouching(movingRect, gameObject2)){
    movingRect.shapeColor = "red";
    gameObject2.shapeColor = "red";
  }
  else{
    movingRect.shapeColor = "green";
    gameObject2.shapeColor = "green";
  }

  drawSprites();
}
