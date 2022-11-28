const numberOfCategories = document.querySelectorAll("#categories > .item");
console.log(`Number of categories: ${numberOfCategories.length}`);
for (let element of numberOfCategories) {
    console.log("Category: " + element.querySelector("h2").innerText);
    console.log("Elements: " + element.querySelectorAll("li").length);
};
