var wall,thickness,bullet,spped,weight

function setup() {
  createCanvas(1600, 400);
  thickness = random(22,83)
  wall = createSprite(1200,200,thickness,height/2)
  deformation = (0.5 * weight * speed * speed) / 22500
}

function draw() {
  background('black')
  drawSprites();
  if (wall.x - car.x < car.width  + wall.width / 2) {
    car.velocityX = 0
    if (deformation > 180) {
      car.shapeColor = color(255, 0, 0)
    }
     else if (deformation < 180 && deformation > 100) {
      car.shapeColor = color(230, 230, 0)
    }
     else if (deformation < 100) {
      car.shapeColor = color(0, 255, 0)
    }
  }

}