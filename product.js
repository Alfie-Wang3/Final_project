const params = new URLSearchParams(window.location.search);
const productId = params.get("id");

const product = products.find(p => p.id === productId);
if (!product) {
  alert("找不到商品資料");
  throw new Error("Product not found");
}

// DOM
const nameEl = document.querySelector(".product-name");
const descEl = document.querySelector(".product-desc");
const storageEl = document.querySelector(".product-storage");
const imgBox = document.querySelector(".product-detail-img");
const qtyEl = document.querySelector(".product-qty input");
const addBtn = document.getElementById("addToCartBtn");

// 基本資料
nameEl.textContent = product.name;
descEl.textContent = product.desc;
storageEl.textContent = `保存方式：${product.storage}`;
imgBox.innerHTML = `<img src="${product.image}" alt="${product.name}">`;

// ===== 尺寸選項 =====
const optionBox = document.querySelector(".product-options");
const sizeTitle = optionBox.querySelector("h3");

const sizeOptionsHTML = Object.entries(product.priceOptions)
  .map(([key, price], index) => `
    <label>
      <input type="radio" name="size" value="${key}" data-price="${price}" ${index === 0 ? "checked" : ""}>
      ${key === "slice" ? "單片" : "整塊"} NT$${price}
    </label>
  `).join("");

sizeTitle.insertAdjacentHTML("afterend", sizeOptionsHTML);

// ===== 價格計算 =====
const sizeRadios = document.querySelectorAll('input[name="size"]');
const optionChecks = document.querySelectorAll('.product-options input[type="checkbox"]');
const totalPriceEl = document.getElementById("totalPrice");

function calculatePrice() {
  let total = 0;

  sizeRadios.forEach(r => {
    if (r.checked) total += Number(r.dataset.price);
  });

  optionChecks.forEach(c => {
    if (c.checked) total += Number(c.dataset.price);
  });

  totalPriceEl.textContent = `NT$ ${total}`;
}

sizeRadios.forEach(r => r.addEventListener("change", calculatePrice));
optionChecks.forEach(c => c.addEventListener("change", calculatePrice));

calculatePrice();

// ===== 加入購物車 =====
addBtn.addEventListener("click", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const selectedSize = document.querySelector('input[name="size"]:checked').value;

  cart.push({
    id: product.id,
    name: product.name,
    size: selectedSize,
    price: Number(totalPriceEl.textContent.replace(/[^\d]/g, "")),
    qty: Number(qtyEl.value)
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("已加入購物車");
});
