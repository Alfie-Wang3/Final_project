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

  // 顯示購買記錄
  const historyList = document.getElementById("purchaseHistory");
  historyList.innerHTML = "";
  const history = JSON.parse(localStorage.getItem("purchaseHistory")) || [];

  if (history.length === 0) {
    historyList.innerHTML = "<li>目前沒有購買記錄</li>";
  } else {
    history.forEach(order => {
      const li = document.createElement("li");
      const itemsText = order.items.map(i => `${i.name} × ${i.qty}`).join("、");
      li.textContent = `${order.date}：${itemsText}`;
      historyList.appendChild(li);
    });
  }

  // 顯示信箱（如果有）
  if (user.email) {
    document.getElementById("email").value = user.email;
  }
}



// 頁面載入時檢查登入狀態
document.addEventListener("DOMContentLoaded", () => {
  const user = JSON.parse(localStorage.getItem("user"));
  if (user) showUserInfo(user);
});
