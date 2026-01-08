document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popup');
  const closeBtn = popup.querySelector('.close-btn');
  const dontShowAgain = document.getElementById('dontShowAgain');

  // 如果使用者之前勾選過，就不顯示
  if (localStorage.getItem("hidePopup") === "true") return;

  // 延遲顯示
  setTimeout(() => {
    popup.classList.remove('hidden');
  }, 1000);

  // 關閉彈窗
  closeBtn.addEventListener('click', () => {
    popup.classList.add('hidden');
    if (dontShowAgain.checked) {
      localStorage.setItem("hidePopup", "true");
    }
  });

  dontShowAgain.addEventListener('change', () => {
    if (dontShowAgain.checked) {
      localStorage.setItem("hidePopup", "true");
    } else {
      localStorage.removeItem("hidePopup");
    }
  });
});
