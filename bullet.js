class Bullet extends Obj {
  constructor(x, y, targetX, targetY, speed, radius = 10) {
    super();
    this.x = x;
    this.y = y;
    this.accX = (targetX - x) / speed;
    this.accY = (targetY - y) / speed;
    this.radius = radius;
  }

  clamp(width, height) {
    if (this.x - this.radius < 0) {
      this.x = this.radius;
      this.accX = 0;
      this.accY = 0;
    }
    if (this.y - this.radius < 0) {
      this.y = this.radius;
      this.accX = 0;
      this.accY = 0;
    }
    if (this.x + this.radius > width) {
      this.x = width - this.radius;
      this.accX = 0;
      this.accY = 0;
    }
    if (this.y + this.radius > height) {
      this.y = height - this.radius;
      this.accX = 0;
      this.accY = 0;
    }
  }
  
  draw() {
    push();
    strokeWeight(0);
    fill(255, 0, 0);
    circle(this.x, this.y, this.radius * 2);
    pop();
  }
}
