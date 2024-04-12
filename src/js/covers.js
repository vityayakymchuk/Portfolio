const coversPage = document.querySelector('.js_enable_animation');
function coverPage() {
    const result  = 
}

// Вибираємо елемент секції "Covers"
const coversSection = document.querySelector('#covers-section');

// Створюємо новий Intersection Observer
const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      // Код для запуску анімації коли секція "Covers" у зоні видимості
    } else {
      // Код для зупинки анімації коли секція "Covers" поза зоною видимості
    }
  });
});

// Починаємо спостереження за секцією "Covers"
observer.observe(coversSection);