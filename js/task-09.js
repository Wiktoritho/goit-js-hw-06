function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
const buttonColor = document.querySelector(".change-color");
const bodyColor = document.querySelector("body");
const spanColor = document.querySelector(".color");

function whatIsTheColorNow() {
  spanColor.textContent = buttonColor.style.color;
}

buttonColor.addEventListener("click", () => {
  const passingColorToSpan = (bodyColor.style.backgroundColor = getRandomHexColor());
  buttonColor.style.color = passingColorToSpan;
  whatIsTheColorNow();
});

whatIsTheColorNow();