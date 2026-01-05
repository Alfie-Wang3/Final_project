const cartBody = document.getElementById("cartBody");
const totalPriceEl = document.getElementById("totalPrice");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function saveCart() {
  localStorage.setItem("cart", JSON.stringify(cart));
}

function renderCart() {
  cartBody.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    cartBody.innerHTML = `
      <tr>
        <td colspan="5" style="text-align:center;">購物車目前沒有商品</td>
      </tr>
    `;
    totalPriceEl.textContent = "NT$0";
    return;
  }

  cart.forEach((item, index) => {
    const optionText = item.options && item.options.length > 0 ? item.options.join("、") : "無";
    const subtotal = (item.basePrice + (item.optionPrice || 0)) * item.qty;
    total += subtotal;

    cartBody.innerHTML += `
      <tr>
        <td>
          <strong>${item.name}</strong><br>
          <small>尺寸：${item.size}</small><br>
          <small>加購：${optionText}</small>
        </td>
        <td>NT$${item.basePrice + (item.optionPrice || 0)}</td>
        <td>
          <button class="qty-btn" onclick="changeQty(${index}, -1)">−</button>
          ${item.qty}
          <button class="qty-btn" onclick="changeQty(${index}, 1)">＋</button>
        </td>
        <td>NT$${subtotal}</td>
        <td>
          <button class="delete-btn" onclick="removeItem(${index})">刪除</button>
        </td>
      </tr>
    `;
  });

  totalPriceEl.textContent = `NT$${total}`;
}

function changeQty(index, diff) {
  cart[index].qty += diff;
  if (cart[index].qty < 1) cart[index].qty = 1;
  saveCart();
  renderCart();
}

function removeItem(index) {
  if (confirm("確定要刪除這個商品嗎？")) {
    cart.splice(index, 1);
    saveCart();
    renderCart();
  }
}

renderCart();
