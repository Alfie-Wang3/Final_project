const loginForm = document.getElementById("loginForm");
const registerBtn = document.getElementById("registerBtn");
const userInfo = document.getElementById("userInfo");
const userNameEl = document.getElementById("userName");
const logoutBtn = document.getElementById("logoutBtn");

// 登入
loginForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("請輸入帳號與密碼");
    return;
  }

  const user = JSON.parse(localStorage.getItem("user"));
  if (user && user.username === username && user.password === password) {
    alert("登入成功！");
    showUserInfo(user);
  } else {
    alert("帳號或密碼錯誤，請重新輸入");
  }
});

// 註冊
registerBtn.addEventListener("click", () => {
  const username = document.getElementById("username").value.trim();
  const password = document.getElementById("password").value.trim();

  if (!username || !password) {
    alert("請輸入帳號與密碼");
    return;
  }

  const user = { username, password };
  localStorage.setItem("user", JSON.stringify(user));
  alert("註冊成功，請重新登入");
});

// 登出
logoutBtn.addEventListener("click", () => {
  if (confirm("確定要登出嗎？")) {
    localStorage.removeItem("user");
    location.reload();
  }
});

const editForm = document.getElementById("editForm");

// 更新會員資料
editForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("email").value.trim();
  const newPassword = document.getElementById("newPassword").value.trim();

  let user = JSON.parse(localStorage.getItem("user"));
  if (!user) {
    alert("請先登入");
    return;
  }

  if (email) user.email = email;
  if (newPassword) user.password = newPassword;

  localStorage.setItem("user", JSON.stringify(user));
  alert("會員資料已更新！");
  showUserInfo(user); // 重新顯示更新後的資訊
});

// 顯示會員資訊（更新後也會呼叫這裡）
function showUserInfo(user) {
  loginForm.classList.add("hidden");
  userInfo.classList.remove("hidden");
  userNameEl.textContent = user.username;

  // 顯示購買記錄（表格化）
  const historyBody = document.getElementById("purchaseHistory");
  historyBody.innerHTML = "";
  const history = JSON.parse(localStorage.getItem("purchaseHistory")) || [];

  if (history.length === 0) {
    historyBody.innerHTML = `<tr><td colspan="9" style="text-align:center;">目前沒有購買記錄</td></tr>`;
  } else {
    history.forEach((order, orderIndex) => {
      order.items.forEach(i => {
        const subtotal = (i.basePrice + (i.optionPrice || 0)) * i.qty;
        const tr = document.createElement("tr");
        tr.innerHTML = `
          <td>${order.date}</td>
          <td><img src="${i.image || 'assets/img/no-image.png'}" alt="${i.name}" style="width:60px;"> ${i.name} (${i.size})</td>
          <td>${i.options && i.options.length > 0 ? i.options.join("、") : "無"}</td>
          <td>${i.qty}</td>
          <td>NT$${subtotal}</td>
          <td>${order.customer?.name || "未填寫"}</td>
          <td>${order.customer?.phone || "未填寫"}</td>
          <td>${order.customer?.address || "未填寫"}</td>
          <td><button onclick="reorder(${orderIndex})">再買一次</button></td>
        `;
        historyBody.appendChild(tr);
      });
    });
  }

  // 顯示歷史評論
  const myReviewsList = document.getElementById("myReviews");
  myReviewsList.innerHTML = "";
  history.forEach(order => {
    order.items.forEach(i => {
      const reviews = JSON.parse(localStorage.getItem("reviews_" + i.id)) || [];
      reviews.forEach(r => {
        const li = document.createElement("li");
        li.innerHTML = `
          <strong>${i.name}</strong> - ${"★".repeat(r.rating)}${"☆".repeat(5-r.rating)}
          <br>${r.comment}
        `;
        myReviewsList.appendChild(li);
      });
    });
  });

  // 顯示信箱（如果有）
  if (user.email) {
    document.getElementById("email").value = user.email;
  }
}

// 再買一次功能：把該筆訂單的商品重新加入購物車
function reorder(orderIndex) {
  const history = JSON.parse(localStorage.getItem("purchaseHistory")) || [];
  const order = history[orderIndex];
  if (!order) return;

  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  order.items.forEach(item => {
    cart.push(item);
  });
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("已將此訂單商品重新加入購物車！");
  window.location.href = "cart.html";
}

// 頁面載入時檢查登入狀態
document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) showUserInfo(user);
});
