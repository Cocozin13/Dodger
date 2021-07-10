import Game from '../src/game.js';

let canvas = document.getElementById('screen');

let ctx = canvas.getContext('2d');

const game_width = 1350;
const game_height = 500;

let game = new Game(game_width, game_height);
game.start();

let lastTime = 0;

function gameLoop(timestamp) {
  let dt = timestamp - lastTime;
  lastTime = timestamp;

  ctx.clearRect(0,0, game_width, game_height);
  
  game.update(dt);
  game.draw(ctx);

  requestAnimationFrame(gameLoop);
}

gameLoop();




