import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';


const header = document.querySelector('.ac-panel-items-descr');
const accordionBtns = document.querySelectorAll('.accordion-button-up-down');

accordionBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const accordionItem = btn.closest('.accordion-item');
    const accordionContent = accordionItem.querySelector('.is-hidden');

    if (accordionItem.classList.contains('is-active')) {
      accordionItem.classList.remove('is-active');
      accordionContent.style.maxHeight = 0;
      btn.querySelector('use').setAttribute('href', './img/sprite.svg#icon-accordian-down');
    } else {
      accordionItem.classList.add('is-active');
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      btn.querySelector('use').setAttribute('href', './img/sprite.svg#icon-accordion-up');
    }
  });
});




// const accordionBtns = document.querySelectorAll('.accordion-button-up-down');
// const accordionItems = document.querySelectorAll('.accordion-item');

// // Приховує всі елементи, окрім першого
// accordionItems.forEach((item, index) => {
//   if (index !== 0) { // перевіряємо, чи це не перший елемент
//     item.classList.remove('is-active');
//     item.querySelector('.hidden').style.maxHeight = 0;
//     item.querySelector('.accordion-button-up-down use').setAttribute('href', './img/sprite.svg#icon-accordian-down');
//   }
// });








// accordionBtns.forEach((btn) => {
//   btn.addEventListener('click', () => {
//     const accordionItem = btn.closest('.accordion-item');
//     const accordionContent = accordionItem.querySelector('.hidden');

//     if (accordionItem.classList.contains('is-active')) {
//       accordionItem.classList.remove('is-active');
//       accordionContent.style.maxHeight = 0;
//       btn.querySelector('use').setAttribute('href', './img/sprite.svg#icon-accordian-down');
//     } else {
//       // Закриває всі інші відкриті елементи, якщо вони не є поточним
//       accordionItems.forEach((item) => {
//         if (item !== accordionItem && item.classList.contains('is-active')) {
//           item.classList.remove('is-active');
//           item.querySelector('.hidden').style.maxHeight = 0;
//           item.querySelector('.accordion-button-up-down use').setAttribute('href', './img/sprite.svg#icon-accordian-down');
//         }
//       });

//       accordionItem.classList.add('is-active');
//       accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
//       btn.querySelector('use').setAttribute('href', './img/sprite.svg#icon-accordion-up');
//     }
//   });
// });