const loginPopup = document.getElementById("loginPopup");
const loginBtn = document.getElementById("loginBtn");
const closeLogin = document.getElementById("closeLogin");
const usernameInput = document.getElementById("usernameInput");
const memberLink = document.querySelector(".member");

// 顯示登入視窗
memberLink.addEventListener("click", (e) => {
  e.preventDefault();
  loginPopup.classList.remove("hidden");
});

// 關閉視窗
closeLogin.addEventListener("click", () => {
  loginPopup.classList.add("hidden");
});

// 登入
loginBtn.addEventListener("click", () => {
  const username = usernameInput.value.trim();

  if (!username) {
    alert("請輸入帳號");
    return;
  }

  const user = { username };
  localStorage.setItem("user", JSON.stringify(user));

  alert("登入成功！");
  loginPopup.classList.add("hidden");
  updateNavbar();
});

// 更新導覽列狀態
function updateNavbar() {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user) {
    memberLink.textContent = `Hi，${user.username}`;
    memberLink.onclick = logout;
  }
}

// 登出
function logout() {
  if (confirm("確定要登出嗎？")) {
    localStorage.removeItem("user");
    location.reload();
  }
}

// 頁面載入時檢查登入狀態
updateNavbar();
