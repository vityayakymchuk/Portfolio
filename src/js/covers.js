// export function isInViewport(element) {
//   const rect = element.getBoundingClientRect();
//   const windowHeight =
//     window.innerHeight || document.documentElement.clientHeight;
//   const windowWidth = window.innerWidth || document.documentElement.clientWidth;
//   return (
//     rect.top >= 0 &&
//     rect.left >= 0 &&
//     rect.bottom <= windowHeight &&
//     rect.right <= windowWidth
//   );
// }
// export function setAnimation() {
//   const coversSection = document.querySelector('.js_enable_animation');
//   coversSection.classList.toggle('marquee__line', isInViewport(coversSection));
// }
// setAnimation();
