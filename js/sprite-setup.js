
function setupSprites() {
  // Example Code follows.
  // Please delete and replace with your own code.

  // Background
  outside = createSprite(200, 200, 200, 200);
  outside.addAnimation('fence', fenceAnimation);

  sun = createSprite(340, 50, 10, 10);
  sun.addAnimation('sun', sunAnimation);
  sun.scale = 0.5;

  cloud = createSprite(130, 80, 20, 20);
  cloud.addAnimation('cloud', cloudAnimation);
  cloud.scale = 0.4;

  friend = createSprite(60, 330, 20, 20);
  friend.addAnimation('friend', friendAnimation);
  friend.scale = 0.2;

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
  player.scale = 0.2;
  player.setCollider('rectangle', 0, 0, 250, 340);

  // Good Food
  apple = createSprite(randomNumber(50, 350), randomNumber(50, 350), 50, 50);
  apple.addAnimation('apple', appleAnimation);
  apple.height = 30;
  apple.width = 30;
  apple.scale = 0.1;
  apple.setCollider('circle', 0, 0, 100);

  broccoli = createSprite(randomNumber(50, 350), randomNumber(50, 350), 50, 50);
  broccoli.addAnimation('Broccoli', broccoliAnimation);
  broccoli.scale = 0.09;
  broccoli.setCollider('rectangle', 0, -50, 400, 450);
  

  // Bad Food
  pizza = createSprite(randomNumber(50, 350), randomNumber(50, 350), 50, 50);
  pizza.addAnimation('pizza', pizzaAnimation);
  pizza.scale = 0.034;
  pizza.setCollider('circle', 0, 0, 400);

  cake = createSprite(randomNumber(50, 350), randomNumber(50, 350), 50, 50);
  cake.addAnimation('cake', cakeAnimation);
  cake.scale = 0.06;
  cake.setCollider('rectangle', 0, 50, 600, 600);

}