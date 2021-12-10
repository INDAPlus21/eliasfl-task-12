let width = window.innerWidth;
let height = window.innerHeight;

let player;
let bullets = [];

function setup() {
  createCanvas(width, height);
  player = new Player(200, 200);
}

function draw() {
  if (keyIsDown(LEFT_ARROW)) {
    player.x -= 10;
  }
  if (keyIsDown(RIGHT_ARROW)) {
    player.x += 10;
  }
  if (keyIsDown(UP_ARROW)) {
    if (player.accY == 0) player.accY = -10;
  }
  background(230);

  player.gravity();
  player.move();
  player.clamp(width, height);
  player.draw();

  line(player.x, player.y - player.height, mouseX, mouseY);

  
  for (const bullet of bullets) {
    bullet.gravity();
    bullet.move();
    bullet.clamp(width, height);
  }
  for (const bullet of bullets) {
    bullet.draw();
  }
}

function keyPressed() {
  if (key == " ") {
    bullets.push(
      new Bullet(player.x, player.y - player.height, mouseX, mouseY, 30)
    );
  }
}