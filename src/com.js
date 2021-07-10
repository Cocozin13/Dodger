export default class Com {

  constructor (game) {
    this.image = document.getElementById('com');

    this.gameWidth = game.gameWidth;
    this.gameHeight = game.gameHeight;

    this.size = 50;
    this.width = 50;
    this.height = 50;

    this.speed = {x: 0, y: 0.5};
    this.position = { x: 500, y: -50}
  }
  draw(ctx) {
      ctx.drawImage(
        this.image,
        this.position.x,
        this.position.y,
        this.size,
        this.size
      )
  }

  update(dt) {
    this.position.x += this.speed.x ;
    this.position.y += this.speed.y;
  }
}