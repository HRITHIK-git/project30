class SlingShot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 50
        }
        this.pointB = pointB
        this.SlingShot= Constraint.create(options);
        World.add(world, this.SlingShot);
    }

    attach(body1)
    { 
    this.SlingShot.bodyA = body1;
    }

    display(){
        if(this.SlingShot.bodyA){
            var pointA = this.SlingShot.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            fill("green")
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
        }
    }
    
      fly()
      {
        
        this.SlingShot.bodyA=null;
      }


}



