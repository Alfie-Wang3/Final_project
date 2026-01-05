const params = new URLSearchParams(window.location.search);
const productId = params.get("id");
const product = products.find(p => p.id === productId);

if (!product) {
  alert("找不到商品資料");
  throw new Error("Product not found");
}

// DOM 元素
const nameEl = document.querySelector(".product-name");
const descEl = document.querySelector(".product-desc");
const sizeEl = document.querySelector(".product-size");
const storageEl = document.querySelector(".product-storage");
const imgBox = document.querySelector(".product-detail-img");
const qtyEl = document.querySelector(".product-qty input");
const addBtn = document.getElementById("addToCartBtn");
const totalPriceEl = document.getElementById("totalPrice");

// 填入商品基本資料
nameEl.textContent = product.name;
descEl.textContent = product.desc;
sizeEl.textContent = `尺寸：${product.size}`;
storageEl.textContent = `保存方式：${product.storage}`;
imgBox.innerHTML = `<img src="${product.image}" alt="${product.name}">`;

// 動態生成尺寸選項
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

// 計算價格
const sizeRadios = document.querySelectorAll('input[name="size"]');
const optionChecks = document.querySelectorAll('.product-options input[type="checkbox"]');

function calculatePrice() {
  let basePrice = 0;
  sizeRadios.forEach(r => { if (r.checked) basePrice = Number(r.dataset.price); });

  let optionPrice = 0;
  optionChecks.forEach(c => { if (c.checked) optionPrice += Number(c.dataset.price); });

  const total = (basePrice + optionPrice) * Number(qtyEl.value);
  totalPriceEl.textContent = `NT$${total}`;
}

sizeRadios.forEach(r => r.addEventListener("change", calculatePrice));
optionChecks.forEach(c => c.addEventListener("change", calculatePrice));
qtyEl.addEventListener("input", calculatePrice);
calculatePrice();

// 加入購物車
addBtn.addEventListener("click", () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  const selectedSize = document.querySelector('input[name="size"]:checked').value;
  const selectedOptions = Array.from(optionChecks).filter(c => c.checked).map(c => c.value);

  cart.push({
    id: product.id,
    name: product.name,
    size: selectedSize,
    basePrice: Number(document.querySelector('input[name="size"]:checked').dataset.price),
    options: selectedOptions,
    qty: Number(qtyEl.value)
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("已加入購物車");
});
