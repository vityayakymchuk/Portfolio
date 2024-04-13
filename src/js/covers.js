//Функція, що перевіряє, чи є елемент в області видимості
// function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <=
//       (window.innerHeight || document.documentElement.clientHeight) &&
//     rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//   );
// }

// // Функція, що встановлює анімацію для секції "Covers"
// function setAnimation() {
//   const coversSection = document.querySelector('.js_enable_animation');
//   if (isInViewport(coversSection)) {
//     // Включення анімації
//     coversSection.classList.add('cover');
//   } else {
//     // Вимкнення анімації
//     coversSection.classList.remove('cover');
//   }
// }

// // Виклик функції при завантаженні сторінки та при прокрутці
// const page = document.addEventListener('DOMContentLoaded', setAnimation);
// const pageDocument = window.addEventListener('scroll', setAnimation);
// export { isInViewport, setAnimation, page, pageDocument };
