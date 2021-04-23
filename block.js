class Block {
  constructor(x, y, width, height) {
    var options = {
        'isStatic':false,
        'restitution':0.5,
        'friction':0.8,
        'density':1.5
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visiblity=255;
    World.add(world, this.body);
  }
  display()
  {
    var pos =this.body.position;
    var angle = this.body.angle;
  if(this.body.speed>3)
  {
     World.remove(world,this.body)
     push();
    // this.visiblity = this.visiblity-180;
     tint(0,126)
     pop();
  }
  else
  {
    push();
    translate(pos.x, pos.y);
    rotate(angle);
    rectMode(CENTER);
    fill("skyblue");
    rect(0, 0, this.width, this.height);
    pop();

  }
  }
}
