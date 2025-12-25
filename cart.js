const addBtn = document.getElementById("addToCartBtn");

if (addBtn) {
  addBtn.addEventListener("click", () => {
    const nameEl = document.querySelector(".product-name");
    const priceEl = document.querySelector(".product-price");
    const qtyEl = document.querySelector(".product-qty input");

    const product = {
      id: nameEl.dataset.id,
      name: nameEl.textContent,
      price: Number(priceEl.dataset.price),
      qty: Number(qtyEl.value)
    };

    let cart = JSON.parse(localStorage.getItem("cart")) || [];

    // 判斷是否已存在商品
    const exist = cart.find(item => item.id === product.id);

    if (exist) {
      exist.qty += product.qty;
    } else {
      cart.push(product);
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("已加入購物車");
  });
}
