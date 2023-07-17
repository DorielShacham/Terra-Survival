function addScore() {
    try {
        scoreInterval++;
        if (scoreInterval % 5 == 0) {
            score++;
        }
        ctx.font = "20px Ariel";
        ctx.fillStyle = "blueviolet";
        ctx.fillText("Score: " + score, 5, 30);
    }
    catch (error) {
        if (!addScore)
            throw new Error("score as stopped working");
        console.error(error);
    }
}
