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
    
  } catch (error) {
    if (!addScore) throw new Error("Score has stopped working");
    console.error(error);
  }
}

//save score to user
function displayScoreboard() {
  const scoreboardDiv = document.getElementById("scoreboard") as HTMLDListElement;
  scoreboardDiv.innerHTML = ""; // <-- Clear previous scoreboard

  const scores = Object.entries(localStorage)
    .filter(([key, value]) => key !== "username" && !isNaN(value)) // <-- Filter out undesired entries
    .map(([key, value]) => [key, Number(value)])
    .sort((a, b) => Number(b[1]) - Number(a[1])); //  <-- Sort scores in descending order

  scores.forEach(([user, score]) => {
    const listItem = document.createElement("li");
    listItem.textContent = `${user}: Saved ${score} humans`;
    scoreboardDiv.appendChild(listItem);
  });
}
