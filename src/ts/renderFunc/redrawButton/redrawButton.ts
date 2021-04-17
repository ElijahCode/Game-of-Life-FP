export function redrawButton(isRunning: boolean): void {
  const newButton: HTMLButtonElement = document.querySelector(".button");

  if (isRunning) {
    newButton.innerHTML = "Stop";
    newButton.classList.remove("button-stopped");
    newButton.classList.add("button-running");
  } else {
    newButton.innerHTML = "Play";
    newButton.classList.remove("button-running");
    newButton.classList.add("button-stopped");
  }
}
