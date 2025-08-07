
function respondToUser() {

    if (player.y >=300){
        player.velocityY=1
    }

    if(keyWentDown("UP")){
        player.velocityY=-2
    }
}

