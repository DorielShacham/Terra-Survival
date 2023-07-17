const pointer = document.querySelector("#pointer") as HTMLSpanElement;

window.addEventListener("mousemove", (event: MouseEvent) => {
  pointer.style.transform = `translate(${event.clientX - 50}px, ${event.clientY - 50}px)`;
});

window.addEventListener("load", (event) => {
  pointer.style.transform = "translate(-50px, -50px)";
  pointer.style.top = "0%";
  pointer.style.left = "0%";
});
