
function setupSprites() {
  // Example Code follows.
  // Please delete and replace with your own code.

  // Platform Sprites
  platform1 = createSprite(100, 350, 100, 10);
  platform1.addAnimation('plate', platformAnimation1);
  platform1.velocityY = -3;
  platform1.scale = 0.18;
  platform1.setCollider('rectangle', -70, -30, 410, 80);

  platform2 = createSprite(300, 350, 100, 10);
  platform2.addAnimation('couch', platformAnimation2);
  platform2.velocityY = -3;
  platform2.scale = 0.27;
  platform2.setCollider('rectangle', -10, 40, 480, 100)

  // Player Sprite
  player = createSprite(300, 100, 50, 50);
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

  
}