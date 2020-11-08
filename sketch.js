var car, wall, speed, weight
function setup() {
  
  createCanvas(1600,400);
  car = createSprite(50, 200, 70, 10)
  thickness  = random(22,83 )
  wall = createSprite(1200, 200, thickness, height/2)
  
  speed = random(55, 90)
  weight = random(400, 1500)
  car.shapeColor=("white")
  car.velocityX=speed
  deformation=speed*speed*weight/45000
}

function draw() {
  collide()
  if (wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0
    //car.x=50
      
      if (deformation<100){
        car.shapeColor=("green")
      }
      if (deformation>100&&deformation<180){
        car.shapeColor=("yellow")
      }
      if (deformation>180){
        car.shapeColor=("red")
      }
    }
  background("black");  
  drawSprites();
}
function collide(){
 
}