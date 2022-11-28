const writtenName = document.querySelector("#name-input");
const displayedName = document.querySelector("#name-output");

writtenName.addEventListener("input", () => {
  if (writtenName.value === "") {
    displayedName.innerHTML = "Anonymous";
  } else {
    displayedName.innerHTML = `${writtenName.value}`;
  }
});
