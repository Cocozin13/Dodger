import Player from '../src/player.js';
import InputHandler from '../src/input.js';
import Com from '../src/com.js';


export default class Game {

  constructor (gameWidth, gameHeight) {
    this.gameWidth = gameWidth;
    this.gameHeight = gameHeight;

    
  }

  start() {
    this.player = new Player(this);
    this.com = new Com(this);

    this.gameObjects = [this.player, this.com];

    new InputHandler(this.player);
  }

  update(dt) {
    this.gameObjects.forEach(object => object.update(dt));
  }

  draw(ctx) {
  this.gameObjects.forEach(object => object.draw(ctx))
  }
}