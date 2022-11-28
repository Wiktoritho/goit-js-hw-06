const ingredients = [
  'Potatoes',
  'Mushrooms',
  'Garlic',
  'Tomatos',
  'Herbs',
  'Condiments',
];
const list = document.querySelector("#ingredients");
for (let element of ingredients) {
  const item = document.createElement("li");
  item.textContent = element;
  item.classList.add("item");
  list.append(item);
};