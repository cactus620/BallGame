var gamejs = require('gamejs');

function main() {
    var display = gamejs.display.setMode([400, 400]);

    var ball = gamejs.image.load('images/ball.png');
    var bg = gamejs.image.load('images/bg.png');
    var bgPosition = [0, 0];
    var unitPosition = [90, 90];
 
    gamejs.onEvent(function() {
        // event handling
    });

    gamejs.onTick(function() {
        // game loop
      display.clear();
      display.blit(bg, bgPosition);
      display.blit(ball, unitPosition);
      
    });
}

gamejs.preload([
   'images/ball.png',
   'images/bg.png'
]);

gamejs.ready(main);
