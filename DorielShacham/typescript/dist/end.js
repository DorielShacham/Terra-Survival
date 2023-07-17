// add ending message
function endingMessage() {
    try {
        var endGameMessage = document.createElement("dialog");
        endGameMessage.innerHTML = "\n      <h3>Earth exploded!</h3>\n      <h3>You saved " + score + " humans</h3>\n      <form method=\"dialog\">\n        <button id=\"retryButton\">Retry</button>\n      </form>\n      <footer>\n        <p>\n          Terra Survival was created by Doriel.\n        </p>\n      </footer>\n    ";
        var popMessage = document.querySelector("#popup");
        popMessage.appendChild(endGameMessage);
        endGameMessage.showModal();
        var retryButton = document.querySelector("#retryButton");
        retryButton.addEventListener("click", function () {
            location.reload();
        });
        if (endGameMessage.style.display !== "none") {
            var canvasElement = document.querySelector("#canvas");
            if (canvasElement) {
                canvasElement.remove();
            }
        }
    }
    catch (error) {
        if (!endingMessage) {
            throw new Error("There seems to be an issue rendering the message");
        }
        console.error(error);
    }
}
