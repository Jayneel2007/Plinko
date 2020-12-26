class Plinko{
    constructor(x, y) {
        var options = {
            isStatic : true,
            'restitution':0.8,
            'friction':0
            
        }
        this.body = Bodies.circle(x, y, 10, options);
        this.radius = 10;
       
        World.add(world, this.body);
        
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        fill("WHITE")
        ellipseMode(RADIUS);
        ellipse(0, 0, this.radius, this.radius);
        pop();
      }
}