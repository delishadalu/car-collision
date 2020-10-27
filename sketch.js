var car, wall
var speed=0;
var weight=0;
var def=0
function setup() {
  createCanvas(1600,400);
  car=createSprite(50, 200, 100, 50);
  wall=createSprite(1500, 200, 50, height/2);
  speed=random(55,90)
  weight=random(400,1500)
  car.velocityX=speed;

}

function draw()
 {
  background("black");  

  if(wall.x-car.x < wall.width/2 + car.width/2)
  {
    car.velocityX=0;
    
  }
  def=(0.5*weight*speed*speed)/22500

  if(def<100) 
  {car.shapeColor="green"; 
  }

    if(def<180 && def>100)
    { car.shapeColor="yellow";
    }
    if (def>180)
    { car.shapeColor="red"; 
    }


  
  console.log(def)
  drawSprites();

}