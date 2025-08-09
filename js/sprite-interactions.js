
function doSpriteInteraction() {
    //Player Interactions
    if(player.y >= 450) {
        player.y = 200;
        player.velocityY = 0;
        health = health - 25;
    }
    if(player.y <= -50) {
        player.y = 200;
        player.velocityY = 0;
        health = health - 25;
    }
    if(player.x >= 380) {
        player.x = 380;
    }
    if(player.x <= 20) {
        player.x = 20;
    }
    player.collide(platform1);
    player.collide(platform2);

    //Good Foods
    if(player.isTouching(apple)){
        apple.x = randomNumber(50, 350);
        apple.y = -20;
        score = score + 1;
    }

    if(player.isTouching(broccoli)){
        broccoli.x = randomNumber(50, 350);
        broccoli.y = -20;
        score = score + 1;
    }

    //Bad Foods
    if(player.isTouching(cake)){
        cake.x = randomNumber(50, 350);
        cake.y = -20;
        score = score - 1;
    }

    if(player.isTouching(pizza)){
        pizza.x = randomNumber(50, 350);
        pizza.y = -20;
        score = score - 1;
    }

    // Game Over
    if(health <= 0){ 
    background("black");
    sun.visible = false;
    friend.visible = false;
    platform1.visible = false;
    platform2.visible = false;
    outside.visible = false;
    apple.visible = false;
    broccoli.visible = false;
    cake.visible = false;
    pizza.visible = false;
    cloud.visible = false;
    cake.x = 500;
    broccoli.x = 500;
    apple.x = 500;
    pizza.x = 500;
    player.x = 200;
    player.y = 200;
    player.scale = 0.7;
    fill("red");
    textSize(20);
    text("GAME OVER", 144, 40);
    text("Score :" + score, 150, 370);
    isGameOver = true;
  }

  // Reset the Game
  if(isGameOver == true) {
    if(keyWentDown('SPACE')) {
        isGameOver = false;
        health = 100;
        score = 0;
        sun.visible = true;
        friend.visible = true;
        platform1.visible = true;
        platform2.visible = true;
        outside.visible = true;
        apple.visible = true;
        broccoli.visible = true;
        cake.visible = true;
        pizza.visible = true;
        cloud.visible = true;
        player.scale = 0.2;
        player.velocityY = 0;
        apple.y = -20;
        apple.x = randomNumber(50, 350);
        apple.velocityY = randomNumber(1, 3);
        broccoli.y = -20;
        broccoli.x = randomNumber(50, 350);
        broccoli.velocityY = randomNumber(1, 3);
        pizza.y = -20;
        pizza.x = randomNumber(50, 350);
        pizza.velocityY = randomNumber(1, 3);
        cake.y = -20;
        cake.x = randomNumber(50, 350);
        cake.velocityY = randomNumber(1, 3);
    }
  }
}