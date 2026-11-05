export const PlayerMovement = {
    update(player, input, deltaTime) {
        player.velocityX = 0;

        if (input.left) player.velocityX = -player.speed;
        if (input.right) player.velocityX = player.speed;

        player.x += player.velocityX * deltaTime;
    }
};