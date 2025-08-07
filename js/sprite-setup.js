
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
  platform1 = createSprite(100, 350, 100, 10);
  platform1.addAnimation('plate', platformAnimation1);
  platform1.velocityY = -3;
  platform1.scale = 0.18;

  platform2 = createSprite(300, 350, 100, 10);
  platform2.addAnimation('couch', platformAnimation2);
  platform2.velocityY = -3;
  platform2.scale = 0.3;
  
  platform3 = createSprite(200, 250, 100, 10);
  platform3.addAnimation()
  platform3.velocityY = -3;
}