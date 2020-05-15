class Pendulum extends BaseClass {
  constructor(x, y, r){
    super(x,y);
    var optionsP = {
      'restitution':1,
      'density':1.0,
      'friction': 0,
      'frictionAir': 0
    }
    this.bodyP = Bodies.circle(x, y, r, optionsP);
    this.r = r;
    //this.image = loadImage("sprites/enemy.png");
    World.add(world, this.bodyP);
  }

  display(){
    ellipseMode(CENTER);
    fill("black");
    push();
    translate(this.bodyP.position.x, this.bodyP.position.y);
    ellipse(0, 0, 2*this.r, 2*this.r);
    //imageMode(CENTER);
    //image(this.image, 0, 0, this.width, this.height);
    pop();
  }
};