
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
}