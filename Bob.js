class Bob{
    constructor(x, y,radius) {
        var options = {
            restitution:0.3,
            frictionAir:0.001,
            density:0.8
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.body = Bodies.circle(x, y,radius, options);
        World.add(world, this.body);
      }
      display(){
        var pos =this.body.position;
        var angle = this.body.angle;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("green");
        fill(255);
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}