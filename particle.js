
class Particle extends p5.Vector {
  constructor(x, y) {
    super(x, y);
    this.vel = p5.Vector.random2D();
    this.vel.mult(random(-5, -5));
    this.acc = createVector(0, -10);
    this.r = 4;
    this.lifetime = 255;
  }

  finished() {
    return this.lifetime < 0;
  }

  applyForce(force) {
    this.acc.add(force);
  }

  update() {
    this.vel.add(this.acc);
    this.add(this.vel);
    this.acc.set(0, 0);
    this.lifetime -= 5;
  }

  show() {
    //stroke(255, this.lifetime);
    noStroke();
    fill(255, this.lifetime);
    ellipse(this.x, this.y, this.r * 2);
  }
}
