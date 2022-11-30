const slideValue = document.getElementById("font-size-control");
const textSize = document.getElementById("text");

const changingSize = () => {
textSize.style.fontSize = slideValue.value + "px";
};

slideValue.addEventListener("input", () => {
    changingSize();
});

changingSize();