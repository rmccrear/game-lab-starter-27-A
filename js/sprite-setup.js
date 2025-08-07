
function setupSprites() {
  // Example Code follows.
  // Please delete and replace with your own code.
  player = createSprite(200, 200, 50, 50);
  player.addAnimation('fly', alienAnimation);
  player.height = 50;
  player.width = 50;

  // Star is to be replaced with food once the sprites come in
  star = createSprite(100, 100, 50, 50);
  star.shapeColor = "aqua";
  // star.addAnimation('twinkle', starAnimation);
  // star.velocityX = -1;
  // star.velocityY = -2;
  // star.height = 30;
  // star.width = 30;

  // Platform Sprites
  platformAnimation1 = createSprite(100, 350, 100, 10);
  // platformAnimation1.addAnimation()
  platformAnimation1.velocityY = -3;
  platformAnimation2 = createSprite(300, 350, 100, 10);
  // platformAnimation2.addAnimation()
  platformAnimation2.velocityY = -3;
  platformAnimation3 = createSprite(200, 250, 100, 10);
  // platformAnimation3.addAnimation()
  platformAnimation3.velocityY = -3;

  //Initialize score
  score=0

}