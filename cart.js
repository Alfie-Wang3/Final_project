const cartBody = document.getElementById("cartBody");
const totalPriceEl = document.getElementById("totalPrice");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

cartBody.innerHTML = "";
let total = 0;

if (cart.length === 0) {
  cartBody.innerHTML = `
    <tr>
      <td colspan="5">購物車是空的</td>
    </tr>
  `;
} else {
  cart.forEach((item, index) => {
    const subtotal = item.price * item.qty;
    total += subtotal;

    const optionText =
      item.options && item.options.length > 0
        ? item.options.join("、")
        : "無";

    const tr = document.createElement("tr");

    tr.innerHTML = `
      <td>
        <strong>${item.name}</strong><br>
        <small>尺寸：${item.size}</small><br>
        <small>加購：${optionText}</small>
      </td>
      <td>NT$ ${item.price}</td>
      <td>${item.qty}</td>
      <td>NT$ ${subtotal}</td>
      <td>
        <button onclick="removeItem(${index})">刪除</button>
      </td>
    `;

    cartBody.appendChild(tr);
  });
}

totalPriceEl.textContent = `NT$ ${total}`;

// ===== 刪除商品 =====
function removeItem(index) {
  cart.splice(index, 1);
  localStorage.setItem("cart", JSON.stringify(cart));
  location.reload();
}
