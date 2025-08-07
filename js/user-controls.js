
function respondToUser() {

    if (player.y <= 100){
        player.velocityY=1
    }

    if(keyWentDown("UP")){
        player.velocityY=-2
    }
}

