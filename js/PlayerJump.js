export const PlayerJump = {
    update(player, input) {
        if (input.jump && player.isGrounded) {
            player.velocityY = -600;
            player.isGrounded = false;
        }
    }
};