import { Player } from "./Player.js";
import { PlayerMovement } from "./PlayerMovement.js";
import { Renderer } from "./Render.js";

const canvas = document.getElementById("gameCanvas");

const player = new Player();
const renderer = new Renderer(canvas);

const input = {
    left: false,
    right: false
};

let lastTime = 0;

function gameLoop(timestamp) {

    const deltaTime = lastTime === 0
        ? 0
        : (timestamp - lastTime) / 1000;

    lastTime = timestamp;

    // Update
    PlayerMovement.update(player, input, deltaTime);

    // Render
    renderer.render(player);

    requestAnimationFrame(gameLoop);
}

requestAnimationFrame(gameLoop);