function addToCart(product, selectedSize, selectedOptions, qty) {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];

  const basePrice = Number(product.priceOptions[selectedSize]);
  const optionPrice = selectedOptions.reduce((sum, opt) => {
    const checkbox = document.querySelector(`input[value="${opt}"]`);
    return sum + (checkbox ? Number(checkbox.dataset.price) : 0);
  }, 0);

  cart.push({
    id: product.id,
    name: product.name,
    size: selectedSize,
    basePrice: basePrice,
    options: selectedOptions,
    optionPrice: optionPrice,
    qty: qty
  });

  localStorage.setItem("cart", JSON.stringify(cart));
  alert("已加入購物車");
}
