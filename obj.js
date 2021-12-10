class Obj {
  gravity() {
    this.accY += 0.2
  }
  
  move() {
    this.x += this.accX
    this.y += this.accY
  }
}