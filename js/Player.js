import { PlayerMovement } from "./PlayerMovement.js";
import { PlayerJump } from "./PlayerJump.js";
import { PlayerPhysics } from "./PlayerPhysics.js";

export class Player {
    constructor() {
        this.x = 100;
        this.y = 100;

        this.velocityX = 0;
        this.velocityY = 0;

        this.width = 40;
        this.height = 50;

        this.speed = 250;
        this.isGrounded = false;
    }

    update(deltaTime, input, world) {
        PlayerMovement.update(this, input, deltaTime);

        PlayerJump.update(this, input);

        PlayerPhysics.update(this, world, deltaTime);
    }
}

export class PlayerRenderer {
    static render(ctx, player) {
        ctx.fillStyle = "red";

        ctx.fillRect(
            player.x,
            player.y,
            player.width,
            player.height
        );
    }
}