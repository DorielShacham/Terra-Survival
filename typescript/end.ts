
// add ending message
function endingMessage() {
  try {
    const endGameMessage = document.createElement("dialog") as HTMLDialogElement;
    endGameMessage.innerHTML = `
      <h3>Earth exploded!</h3>
      <h3>You saved ${score} humans</h3>
      <form method="dialog">
        <button id="retryButton">Retry</button>
      </form>
      <footer>
        <p>
          Terra Survival was created by Doriel.
        </p>
      </footer>
    `;

    const popMessage = document.querySelector("#popup") as HTMLElement;
    popMessage.appendChild(endGameMessage);
    endGameMessage.showModal();
    const retryButton = document.querySelector(
      "#retryButton"
    ) as HTMLButtonElement;
    retryButton.addEventListener("click", function () {
      location.reload();
    });

    if (endGameMessage.style.display !== "none") {
      const canvasElement = document.querySelector("#canvas");
      if (canvasElement) {
        canvasElement.remove();
      }
    }
  } catch (error) {
    if (!endingMessage) {
      throw new Error("There seems to be an issue rendering the message");
    }
    console.error(error);
  }
}
