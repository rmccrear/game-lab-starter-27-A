
function respondToUser() {

    if(keyWentDown("UP")){
        player.velocityY=-4
    }

    if(player.velocityY<4){
        player.velocityY = player.velocityY + 0.09;
    }

    if(keyWentDown("LEFT")){
        player.velocityX = -4; 
    }

    if(keyWentUp("LEFT")){
        player.velocityX = 0;
    }

    if(keyWentDown("RIGHT")){
        player.velocityX = 4;
    }

    if(keyWentUp("RIGHT")){
        player.velocityX = 0;
    }
}

