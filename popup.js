document.addEventListener('DOMContentLoaded', () => {
    const popup = document.getElementById('popup');
    const closeBtn = document.querySelector('.close-btn');
  
    if (!popup || !closeBtn) return;
  
    // 每次載入都延遲顯示
    setTimeout(() => {
      popup.classList.remove('hidden');
    }, 1000);
  
    // 關閉彈窗
    closeBtn.addEventListener('click', () => {
      popup.classList.add('hidden');
    });
  });
  