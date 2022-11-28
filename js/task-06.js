const writtenText = document.getElementById("validation-input");
const symbolsAmount = writtenText.getAttribute("data-length");

    let validAmount = () => {
    writtenText.classList.add("valid");
    writtenText.classList.remove("invalid");
};
    let invalidAmount = () => {
        writtenText.classList.add("invalid");
        writtenText.classList.remove("valid");
}

writtenText.addEventListener("blur", () => {
    if (parseInt(symbolsAmount) === writtenText.value.length) {
        validAmount();
    } else {
        invalidAmount();
    }
});