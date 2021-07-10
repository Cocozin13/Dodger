export default class Player {

  constructor(game) {
    this.image = document.getElementById('player');

    this.gameHeight = game.gameHeight;
    this.gameWidth = game.gameWidth;

    this.size = 30;

    this.maxSpeed = 10;
    this.speedX = 0;
    this.speedY = 0;

    this.position = {
      x: game.gameWidth / 2 - this.size / 2,
      y: game.gameHeight / 2 - this.size / 2
    }
  }

  moveLeft() {
    this.speedX = -this.maxSpeed;
  }

  moveRight() {
    this.speedX = this.maxSpeed;
  }

  moveUp() {
    this.speedY = -this.maxSpeed;
  }

  moveDown() {
    this.speedY = this.maxSpeed;
  }

  stopX() {
    this.speedX = 0;
  }

  stopY() {
    this.speedY = 0;
  }

  draw(ctx) {
    ctx.drawImage(this.image, this.position.x, this.position.y, this.size, this.size);
  }

  update(dt) {
    if (!dt) return

    this.position.x += this.speedX;
    this.position.y += this.speedY;
    
    if (this.position.x + this.size > this.gameWidth || this.position.x < 0) {
      this.speedX = -this.speedX;
    }

    if (this.position.y + this.size > this.gameHeight ||this.position.y < 0) {
      this.speedY = -this.speedY;
    }
  }
}