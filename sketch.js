const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

function preload()
{
  polygon1=loadImage("sprites/pol.png")
}
function setup() {
  createCanvas(1200,400);


  engine = Engine.create();
  world = engine.world;

   b1=new Block(905,50,30,40);
   b2=new Block(890,90,30,40);
   b3=new Block(920,90,30,40);
   b4=new Block(935,130,30,40);
   b5=new Block(905,130,30,40);
   b6=new Block(875,130,30,40);
   b7=new Block(950,170,30,40);
   b8=new Block(920,170,30,40);
   b9=new Block(890,170,30,40);
   b10=new Block(860,170,30,40);
   
   b11=new Block(490,235,30,40)
   b12=new Block(460,235,30,40)
   b13=new Block(520,235,30,40) 
   b14=new Block(430,235,30,40);
   b15=new Block(550,235,30,40)
   b16=new Block(580,235,30,40)
   b17=new Block(560,195,30,40)
   b18=new Block(529,195,30,40)
   b19=new Block(500,195,30,40)
   b20=new Block(470,195,30,40)
   b21=new Block(440,195,30,40)
   
   b22=new Block(545,155,30,40)
   b23=new Block(515,155,30,40)
   b24=new Block(485,155,30,40)
   b25=new Block(455,155,30,40)
   b26=new Block(470,115,30,40)
   b27=new Block(500,115,30,40)
   b28=new Block(530,115,30,40)
   b29=new Block(520,75,30,40)
   b30=new Block(490,75,30,40)
   b31=new Block(505,35,30,40)

   g=new Ground(500,262,200,10);
   g12=new Ground(900,197,200,10);
   
   var opts = {
    'isStatic':false,
    'restitution':0.5,
    'friction':0.8,
    'density':0.5,
    length:15
}
   polygon=Bodies.circle(150,250,15,opts);
   World.add(world,polygon);

   sling=new SlingShot(polygon, {x:250,y:80})
   

}

function draw() {
  background(235); 
  Engine.update(engine);
  g.display();
  b1.display();
  b2.display();
  b3.display();
  b4.display();
  b5.display();
  b6.display();
  b7.display();
  b8.display();
  b9.display();
  b10.display();
  b11.display();
  b12.display();
  b13.display();
  b14.display();
  b15.display();
  b16.display();
  b17.display();
  b18.display();
  b19.display();
  b20.display();
  b21.display();

  b22.display();
  b23.display();
  b24.display();
  b25.display();
  b26.display();
  b27.display();
  b28.display();
  b29.display();
  b30.display();
  b31.display();

  sling.display();
  g12.display();
  imageMode(CENTER)
  image(polygon1,polygon.position.x,polygon.position.y,50,50)

  //bs.display();
  drawSprites();
  
}


function mouseDragged()
{
  Matter.Body.setPosition(polygon,{x:mouseX,y:mouseY})
}

function mouseReleased()
{
  sling.fly();
}

function keyPressed(){
  if(keyCode === 32){
    sling.attach(polygon);
  }
}