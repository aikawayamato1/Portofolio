const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

let lastTime = 0;

function GameLoop(timestamp) {

    const deltaTime = (timestamp - lastTime) / 1000;

    lastTime = timestamp;

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Update
    update(deltaTime);

    // Render
    render(ctx);

    requestAnimationFrame(GameLoop);
}

requestAnimationFrame(GameLoop);