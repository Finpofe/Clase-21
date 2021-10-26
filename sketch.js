var fixedRect, movingRect;
function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  movingRect = createSprite(400, 200, 80, 30);

  fixedRect.shapeColor = "green";
  movingRect.shapeColor = "green";

  gameObject1 = createSprite(100, 100, 50, 50);
  gameObject1.shapeColor = "green";

  gameObject2 = createSprite(200, 100, 50, 50);
  gameObject2.shapeColor = "green";
  
  gameObject3 = createSprite(300, 100, 50, 50);
  gameObject3.shapeColor = "blue";


  gameObject4 = createSprite(400, 100, 50, 50);
  gameObject4.shapeColor = "orange";

  gameObject3.velocityX = 5;
  gameObject4.velocityX = -5;

  fixedRect.debug = false;
  movingRect.debug = false;

}

function draw() {
  background(0,0,0);  
  //console.log(fixedRect.x - movingRect.x)

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

  if(isTouching(movingRect,gameObject1)){
    movingRect.shapeColor = "red"
    gameObject1.shapeColor = "red"
  }else{
    movingRect.shapeColor = "green"
    gameObject1.shapeColor = "green"
  }

  bounceOff(gameObject3,gameObject4);

  drawSprites();
}
