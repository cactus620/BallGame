var gamejs = require('gamejs');

function main() {
    var display = gamejs.display.setMode([600, 400]);

    var ball = gamejs.image.load('images/ball.png');
    var unitPosition = [20, 20];
 
    gamejs.onEvent(function() {
        // event handling
    });

    gamejs.onTick(function() {
        // game loop
      display.clear();
      display.blit(ball, unitPosition);
    });
}

gamejs.preload([
   'images/ball.png',
]);

gamejs.ready(main);
