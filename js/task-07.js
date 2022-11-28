const slideValue = document.getElementById("font-size-control");
const textSize = document.getElementById("text");

slideValue.addEventListener("input", () => {
    textSize.style.fontSize = slideValue.value + "px";
})