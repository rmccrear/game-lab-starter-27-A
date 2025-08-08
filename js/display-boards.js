
function showBoards() {
  showScore();
}

function showScore() {
    fill(255, 255, 255);
    textSize(16);
    text("Score: " + score, 10, 20);
    text("Health: " + health, 300, 20);
}