const counterDisplayed = document.querySelector("#value");
const incrementValue = document.querySelector('[data-action="increment"]');
const decrementValue = document.querySelector('[data-action="decrement"]');

let counterValue = parseInt(counterDisplayed.innerText);

incrementValue.addEventListener("click", () => {
  counterValue++;
  counterValueUpdate();
});
decrementValue.addEventListener("click", () => {
  counterValue--;
  counterValueUpdate();
});

function counterValueUpdate() {
  counterDisplayed.innerHTML = counterValue;
}
