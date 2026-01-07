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
  const grid = document.getElementById("productsGrid");
  const searchInput = document.getElementById("searchInput");
  const sortSelect = document.getElementById("sortSelect");
  
  // 渲染商品卡片
  function renderProducts(list) {
    grid.innerHTML = "";
    list.forEach(item => {
      const card = document.createElement("div");
      card.className = "product-card";
      card.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <h3>${item.name}</h3>
        <p class="price">NT$ ${typeof item.price === "number" ? item.price : item.priceOptions.slice}</p>
      `;
      card.addEventListener("click", () => {
        window.location.href = `product.html?id=${item.id}`;
      });
      grid.appendChild(card);
    });
  }
  
  // 過濾 + 排序
  function updateProducts() {
    let filtered = products.filter(p =>
      p.name.toLowerCase().includes(searchInput.value.toLowerCase())
    );
  
    if (sortSelect.value === "price") {
      filtered.sort((a, b) => {
        const priceA = typeof a.price === "number" ? a.price : a.priceOptions.slice;
        const priceB = typeof b.price === "number" ? b.price : b.priceOptions.slice;
        return priceA - priceB;
      });
    }
  
    renderProducts(filtered);
  }
  
  // 事件監聽
  searchInput.addEventListener("input", updateProducts);
  sortSelect.addEventListener("change", updateProducts);
  
  // 初始渲染
  updateProducts();
  
  grid.appendChild(card);
});
