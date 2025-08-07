
function setupSprites() {
  // Example Code follows.
  // Please delete and replace with your own code.

  // Platform Sprites
  platform1 = createSprite(100, 350, 100, 10);
  platform1.addAnimation('plate', platformAnimation1);
  platform1.velocityY = -3;
  platform1.scale = 0.18;
  platform1.setCollider('rectangle', -70, -30, 410, 80);

  platform2 = createSprite(300, 300, 100, 10);
  platform2.addAnimation('couch', platformAnimation2);
  platform2.velocityY = -3;
  platform2.scale = 0.27;
  platform2.setCollider('rectangle', -10, 40, 350, 100)

  // Player Sprite
  player = createSprite(300, 100, 50, 50);
  player.addAnimation('fly', alienAnimation);
  player.height = 50;
  player.width = 50;

  // Good Food
  apple = createSprite(100, 100, 50, 50);
  apple.addAnimation('apple', appleAnimation);
  apple.height = 30;
  apple.width = 30;
  apple.scale = 0.1;
  apple.setCollider('circle', 0, 0, 100);

  // Bad Food
  pizza = createSprite(200, 100, 50, 50);
  pizza.addAnimation('pizza', pizzaAnimation);
  pizza.scale = 0.034;
  pizza.setCollider('circle', 0, 0, 400);

}