const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

function GameLoop() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update game
    // Render game

    requestAnimationFrame(GameLoop);
}

GameLoop();