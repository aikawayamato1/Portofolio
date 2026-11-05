export const PlayerPhysics = {
    update(player, world, deltaTime) {
        player.velocityY += 1500 * deltaTime;

        player.y += player.velocityY * deltaTime;

        // Collision detection & resolution
        // Akan kita implementasikan berikutnya
    }
};