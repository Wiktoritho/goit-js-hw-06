function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");

buttonColor.addEventListener("click", () => {
  const passingColorToSpan = (bodyColor.style.backgroundColor = getRandomHexColor());
  buttonColor.style.color = passingColorToSpan;
});
