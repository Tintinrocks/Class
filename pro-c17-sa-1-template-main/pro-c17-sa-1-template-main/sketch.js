var box1;
var box2
function setup() 
{
  createCanvas(400, 400);
  box1 = new Box(200,200,50,50,3,"lightgreen");
  box2 = new Box(395, 50,60,10,-2,"skyblue");
}

function draw() 
{
  background(220);
  box1.show();
  box2.show();
  box1.move();
  box2.move();
}

