const orderList = document.getElementById("orderList");
const checkoutTotalEl = document.getElementById("checkoutTotal");
const submitBtn = document.getElementById("submitOrderBtn");

let cart = JSON.parse(localStorage.getItem("cart")) || [];

function renderOrder() {
  orderList.innerHTML = "";
  let total = 0;

  if (cart.length === 0) {
    orderList.innerHTML = "<li>目前沒有商品</li>";
    checkoutTotalEl.textContent = "NT$0";
    submitBtn.disabled = true;
    return;
  }

  cart.forEach(item => {
    const optionText = item.options && item.options.length > 0 ? item.options.join("、") : "無";
    const subtotal = (item.basePrice + (item.optionPrice || 0)) * item.qty;
    total += subtotal;

    orderList.innerHTML += `
      <li>
        ${item.name}（${item.size}） × ${item.qty}
        <br><small>加購：${optionText}</small>
        <span>NT$${subtotal}</span>
      </li>
    `;
  });

  checkoutTotalEl.textContent = `NT$${total}`;
}

submitBtn.addEventListener("click", () => {
  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();

  if (!name || !phone || !address) {
    alert("請完整填寫訂購人資料");
    return;
  }

  alert("訂單已完成，感謝您的購買！");
  localStorage.removeItem("cart");
  window.location.href = "index.html";
});

renderOrder();
