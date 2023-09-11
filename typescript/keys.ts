//Event listeners
function addMovementToPlayer(playerInstance) {
  try {
    window.addEventListener("keydown", function (e) {
      if (e.code === "KeyW" && pressKeyY == "none") {
        playerInstance.movePlayer("W");
      } else if (e.code === "KeyS" && pressKeyY == "none") {
        playerInstance.movePlayer("S");
      } else if (e.code === "KeyA" && pressKeyX == "none") {
        playerInstance.movePlayer("A");
      } else if (e.code === "KeyD" && pressKeyX == "none") {
        playerInstance.movePlayer("D");
      } else {
        console.warn("This game uses AWSD for movement.");
      }
    });

    window.addEventListener("keyup", function (e) {
      if (e.code === "KeyW" && pressKeyY == "W") pressKeyY = "none";
      else if (e.code === "KeyS" && pressKeyY == "S") pressKeyY = "none";
      else if (e.code === "KeyA" && pressKeyX == "A") pressKeyX = "none";
      else if (e.code === "KeyD" && pressKeyX == "D") pressKeyX = "none";
    });
  } catch (error) {
    console.error(error);
  }
}