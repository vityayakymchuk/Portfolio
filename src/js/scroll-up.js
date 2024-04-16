// const scrollToTopButton = document.querySelector('.scroll-up');

// window.addEventListener('scroll', () => {
//   if (window.scrollY > 500) {
//     scrollToTopButton.style.display = 'block';
//   } else {
//     scrollToTopButton.style.display = 'none';
//   }
// });

// scrollToTopButton.addEventListener('click', () => {
//   window.scrollTo({
//     top: 0,
//     behavior: 'smooth'
//   });
// });

const scrollToTopBtn = document.querySelector('.scroll-up');

window.addEventListener('scroll', () => {
  if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
    scrollToTopBtn.style.display = 'flex';
  } else {
    scrollToTopBtn.style.display = 'none';
  }
});
function scrollToTop() {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
}

scrollToTopBtn.addEventListener('click', scrollToTop);