
function doSpriteInteraction() {
    //Player Interactions
    if(player.y >= 450) {
        player.y = 200;
        player.velocityY = 0;
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
        apple.y = randomNumber(50, 350);
        score = score + 1;
    }

    if(player.isTouching(broccoli)){
        broccoli.x = randomNumber(50, 350);
        broccoli.y = randomNumber(50, 350);
        score = score + 1;
    }

    //Bad Foods
    if(player.isTouching(cake)){
        cake.x = randomNumber(50, 350);
        cake.y = randomNumber(50, 350);
        score = score - 1;
    }

    if(player.isTouching(pizza)){
        pizza.x = randomNumber(50, 350);
        pizza.y = randomNumber(50, 350);
        score = score - 1;
    }
}