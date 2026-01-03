const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

// 用字串 id 找商品
const product = products.find(p => p.id === productId);

if (!product) {
  alert("找不到商品資料");
  throw new Error("Product not found");
}

// DOM
const nameEl = document.querySelector(".product-name");
const priceEl = document.querySelector(".product-price");
const descEl = document.querySelector(".product-desc");
const sizeEl = document.querySelector(".product-size");
const storageEl = document.querySelector(".product-storage");
const imgBox = document.querySelector(".product-detail-img");
const qtyEl = document.querySelector(".product-qty input");
const addBtn = document.getElementById("addToCartBtn");

// 填資料
nameEl.textContent = product.name;
priceEl.textContent = `NT$ ${product.price}`;
descEl.textContent = product.desc;
sizeEl.textContent = `尺寸：${product.size}`;
storageEl.textContent = `保存方式：${product.storage}`;
imgBox.innerHTML = `<img src="${product.image}" alt="${product.name}">`;

// 加入購物車
addBtn.addEventListener("click", () => {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  const qty = Number(qtyEl.value);

  const exist = cart.find(item => item.id === product.id);

  if (exist) {
    exist.qty += qty;
  } else {
    cart.push({
      id: product.id,
      name: product.name,
      price: product.price,
      qty: qty
    });
  }

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("已加入購物車");
});
