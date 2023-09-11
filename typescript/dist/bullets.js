function runBullets() {
    try {
        // console.log("shoots fired");
        bulletInterval++;
        if (bulletInterval % 100 == 0) {
            var y1 = Math.floor(Math.random() * (500 - 0)) + 0;
            var y2 = Math.floor(Math.random() * (500 - 0)) + 0;
            var x1 = Math.floor(Math.random() * (500 - 0)) + 0;
            var x2 = Math.floor(Math.random() * (500 - 0)) + 0;
            bullets.push(new Bullet(-10, y1, 2, 0));
            bullets.push(new Bullet(500, y2, -2, 0));
            bullets.push(new Bullet(x1, -10, 0, 2));
            bullets.push(new Bullet(x2, 500, 0, -2));
        }
        for (var i = 0; i < bullets.length; i++) {
            bullets[i].update();
            bullets[i].draw();
            if (bullets[i] &&
                (bullets[i].x < -10 || bullets[i].x > 500 || bullets[i].y > 500)) {
                bullets.splice(i, 1);
                i--;
            }
            if (bullets[i] && collision(playerInstance, bullets[i])) {
                playerInstance.lives -= 1;
                bullets.splice(i, 1);
                i--;
            }
        }
    }
    catch (error) {
        if (!bulletInterval) {
            throw new Error("bullets are not firing");
        }
        console.error(error);
    }
}
