// 取得網址參數
const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// 抓 DOM
const nameEl = document.querySelector(".product-name");
const priceEl = document.querySelector(".product-price");
const descEl = document.querySelector(".product-desc");
const addBtn = document.getElementById("addToCartBtn");
const qtyEl = document.querySelector(".product-qty input");

// 如果沒有 id
if (!productId || !products[productId]) {
  nameEl.textContent = "找不到商品";
  addBtn.disabled = true;
} else {
  const product = products[productId];

  nameEl.textContent = product.name;
  priceEl.textContent = `$${product.price}`;
  descEl.textContent = product.desc;

  // 加入購物車
  addBtn.addEventListener("click", () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    const exist = cart.find(item => item.id === product.id);

    if (exist) {
      exist.qty += Number(qtyEl.value);
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        qty: Number(qtyEl.value)
      });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert("已加入購物車");
  });
}
