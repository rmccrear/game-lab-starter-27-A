
function doSpriteMovement() {
    //Platform Movement
    if(platform1.y <= -10) {
        platform1.y = 400;
        platform1.x = randomNumber(55, 160);
        platform1.velocityY = randomNumber (-3,-2);
    }
    if(platform2.y <= -20) {
        platform2.y = 400;
        platform2.x = randomNumber(280, 340);
        platform2.velocityY = randomNumber (-3,-2);
    }

    // Food Movement
    if(apple.y >= 410) {
        apple.y = -20;
        apple.x = randomNumber(50, 350);
        apple.velocityY = randomNumber(1, 3);
    }

    if(broccoli.y >= 410) {
        broccoli.y = -20;
        broccoli.x = randomNumber(50, 350);
        broccoli.velocityY = randomNumber(1, 3);
    }

    if(pizza.y >= 410) {
        pizza.y = -20;
        pizza.x = randomNumber(50, 350);
        pizza.velocityY = randomNumber(1, 3);
    }

    if(cake.y >= 410) {
        cake.y = -20;
        cake.x = randomNumber(50, 350);
        cake.velocityY = randomNumber(1, 3);
    }
}