const categoriesElement = document.getElementById("categories");
const categoryItems = categoriesElement.children;
const itemsCount = categoryItems.length;

console.log(`Number of categories: ${itemsCount}`);

Array.from(categoryItems).forEach(category => {
  const categoryName = category.querySelector("h2").textContent;
  const categoryElements = category.children.length - 1; // Віднімаємо 1, оскільки потрібно виключити заголовок <h2>

  console.log(`Category: ${categoryName}`);
  console.log(`Elements: ${categoryElements}`);
});