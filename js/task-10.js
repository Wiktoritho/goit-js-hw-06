function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const typedAmountofBoxes = document.querySelector("#controls > input");
const createBoxButton = document.querySelector("[data-create]");
const destroyBoxButton = document.querySelector("[data-destroy]");
const parentBox = document.getElementById("boxes");

let size = 30;
const initialSize = 30;

let amount = typedAmountofBoxes.value;

function createBoxes(amount) {
  createBoxButton.addEventListener("click", () => {
    amount = typedAmountofBoxes.value;
    for (let i = 0; i < amount; i++) {
      const newBox = document.createElement("div");
      newBox.style.width = `${size}px`;
      newBox.style.height = `${size}px`;
      newBox.style.backgroundColor = getRandomHexColor();
      newBox.classList.add("to-remove");
      size += 10;
      parentBox.append(newBox);
    }
  });
}

function destroyBoxes() {
  destroyBoxButton.addEventListener("click", () => {
    parentBox.innerHTML = "";
    size = initialSize;
  });
}

createBoxes();
destroyBoxes();
