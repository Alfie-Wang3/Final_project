const grid = document.getElementById("productsGrid");

// 渲染商品卡片
products.forEach(item => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <img src="${item.image}" alt="${item.name}">
    <h3>${item.name}</h3>
    <p class="price">NT$ ${typeof item.price === "number" ? item.price : item.priceOptions.slice}</p>
  `;

  // 點擊跳轉到商品詳細頁
  card.addEventListener("click", () => {
    window.location.href = `product.html?id=${item.id}`;
  });

  grid.appendChild(card);
});
