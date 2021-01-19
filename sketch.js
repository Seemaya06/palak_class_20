var fixedRect, movingRect;


function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(600, 200, 80, 50);
  fixedRect.shapeColor = "red";
  movingRect = createSprite(400,200,100,40);
  movingRect.shapeColor = "red";
}

function draw() {
  background("lightblue");  

  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;


  if(movingRect.x - fixedRect.x < fixedRect.width/2 + movingRect.width/2  &&
    fixedRect.x - movingRect.x < fixedRect.width/2 + movingRect.width/2 &&
    movingRect.y - fixedRect.y < fixedRect.height/2 + movingRect.height/2 &&
    fixedRect.y - movingRect.y < fixedRect.height/2 + movingRect.height/2){
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
  else{
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
  }
  drawSprites();
}