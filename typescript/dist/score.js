function addScore(username) {
    try {
        scoreInterval++;
        if (scoreInterval % 1 === 0) {
            ctx.font = "20px Arial";
            ctx.fillStyle = "blueviolet";
            ctx.fillText("Score: " + score, 5, 30);
            // Update the score in localStorage
            localStorage.setItem(username, score++);
        }
    }
    catch (error) {
        if (!addScore)
            throw new Error("Score has stopped working");
        console.error(error);
    }
}
//save score to user
function displayScoreboard() {
    var scoreboardDiv = document.getElementById("scoreboard");
    scoreboardDiv.innerHTML = ""; // <-- Clear previous scoreboard
    var scores = Object.entries(localStorage)
        .filter(function (_a) {
        var key = _a[0], value = _a[1];
        return key !== "username" && !isNaN(value);
    }) // <-- Filter out undesired entries
        .map(function (_a) {
        var key = _a[0], value = _a[1];
        return [key, Number(value)];
    })
        .sort(function (a, b) { return Number(b[1]) - Number(a[1]); }); //  <-- Sort scores in descending order
    scores.forEach(function (_a) {
        var user = _a[0], score = _a[1];
        var listItem = document.createElement("li");
        listItem.textContent = user + ": Saved " + score + " humans";
        scoreboardDiv.appendChild(listItem);
    });
}
