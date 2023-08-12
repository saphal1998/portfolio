const gameDialog = document.getElementsByTagName("dialog")[0]

window.addEventListener("load", handleLoad)
function handleLoad() {
    const navBar = document.querySelector("nav")
    const navList = navBar.querySelector("ul")

    const playListElement = document.createElement("li")
    const playButton = document.createElement("button")

    playButton.classList.add("fa-solid")
    playButton.classList.add("fa-rocket")
    playButton.setAttribute("aria-hidden", "true")

    playButton.addEventListener("click", handleGameDialog)

    const closeGameButton = document.getElementById("close-game")
    closeGameButton.addEventListener("click", handleCloseGameDialog)

    const screenReader = document.createElement("span")
    screenReader.classList.add("sr-only")
    screenReader.textContent = "Play a game"

    playListElement.appendChild(playButton)
    playListElement.appendChild(screenReader)
    navList.appendChild(playListElement)

    gameDialog.addEventListener("click", lightDismiss)
    gameDialog.showModal()
}

function handleGameDialog() {
    if (!gameDialog.open) {
        gameDialog.showModal()
        document.querySelector("body").classList.add("overflow-hidden");
    }
}

function handleCloseGameDialog() {
    if (gameDialog.open) {
        gameDialog.close("Closed the game")
        document.querySelector("body").classList.remove("overflow-hidden");
    }
}

function lightDismiss({ target: dialog }) {
    if (dialog.nodeName === 'DIALOG')
        dialog.close('dismiss')
}
