class Player extends Obj {
  constructor(x, y, width = 200, height = 100) {
    super()
    this.x = x
    this.y = y
    this.accX = 0
    this.accY = 0
    this.width = width
    this.height = height
  }
  
  clamp(width, height) {
    if (this.x - this.width / 2 < 0) {
      this.x = this.width / 2
      this.accX = 0
    }
    if (this.y - this.height < 0) {
      this.y = this.height
      this.accY = 0
    }
    if (this.x + this.width / 2 > width) {
      this.x = width - this.width / 2
      this.accX = 0
    }
    if (this.y > height) {
      this.y = height
      this.accY = 0
    }
  }
  
  draw() {
    push()
    strokeWeight(3)
    rect(this.x - this.width / 2, this.y - this.height, this.width, this.height)
    pop()
  }
}