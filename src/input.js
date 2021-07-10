import Player from "../src/player.js"

export default class InputHandler {

  constructor(player) {
    document.addEventListener('keydown', e => {
      switch(e.keyCode) {
        case 65:
          player.moveLeft();
          break;

          case 68:
            player.moveRight();
            break;

          case 87:
            player.moveUp();
            break;
          
          case 83:
            player.moveDown();
            break;
      }
    })
    document.addEventListener('keyup', e => {
      switch(e.keyCode) {
        case 65:
           if (player.speedX < 0) player.stopX();
          break;

          case 68:
            if (player.speedX > 0) player.stopX();
            break;

          case 87:
            if (player.speedY < 0) player.stopY();
            break;
          
          case 83:
            if (player.speedY > 0) player.stopY();
            break;
      }
    })
  }
}