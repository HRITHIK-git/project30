class Ball
{
    constructor(x, y,radius) {
        var options = {
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.polygon = Bodies.rectangle(x, y, radius,options);
        this.radius=radius;
        World.add(world, this.polygon);
      }
      display(){
        push();
        translate(this.polygon.position.x, this.polygon.position.y);
        ellipseMode(CENTER);
        ellipse(this.polygon, 0, 0,this.radius);
        pop();
      }
}