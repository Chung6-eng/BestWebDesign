document.addEventListener('DOMContentLoaded', function() {
  const container = document.querySelector('.tank-animation-container');
  const text = document.querySelector('.tank-animation-text');
  const tank = document.querySelector('.tank-animation-tank');
  
  if (!container || !text || !tank) return;

  const textWidth = text.offsetWidth;
  const containerWidth = container.offsetWidth;
  const tankWidth = tank.offsetWidth;
  
  // Tính toán thời gian animation dựa trên độ dài của text
  const duration = (textWidth / containerWidth) * 5; // 5s là thời gian cơ bản
  tank.style.animationDuration = `${duration}s`;
  text.style.transition = `-webkit-mask-position ${duration}s linear, mask-position ${duration}s linear`;

  // Hiển thị text khi xe tăng đi qua
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        text.classList.add('visible');
        text.classList.add('reveal');
      }
    });
  }, {
    threshold: 0.5
  });

  observer.observe(tank);

  // Reset animation khi kết thúc
  tank.addEventListener('animationend', () => {
    tank.style.display = 'none';
  });
}); 