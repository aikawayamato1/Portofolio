import { PlayerRenderer } from "./Player.js";

export class Renderer {
    constructor(canvas) {
        this.canvas = canvas;
        this.ctx = canvas.getContext("2d");
    }

    clear() {
        this.ctx.clearRect(
            0,
            0,
            this.canvas.width,
            this.canvas.height
        );
    }

    render(player) {
        this.clear();

        PlayerRenderer.render(this.ctx, player);
    }
}