const grid = document.getElementById("productsGrid");

products.forEach(item => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p class="price">NT$ ${item.price}</p>
  `;

 
  card.addEventListener("click", () => {
    window.location.href = `product.html?id=${item.id}`;
  });

  grid.appendChild(card);
});
