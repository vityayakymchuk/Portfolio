// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// new Accordion('.faq-list-accordion-container', {
//   duration: 400,
//   showMultiple: true,
// });

// document.addEventListener('click', function (event) {
//   const clickedButton = event.target.closest('.faq-btn');

//   if (!clickedButton) return;

//   event.preventDefault();

//   const clickedLi = clickedButton.closest('.faq-list-item');
//   const svgUse = clickedButton.querySelector('use');

//   if (clickedLi.classList.contains('is-active')) {
//     svgUse.setAttribute('href', './img/sprite.svg#icon-accordion-up');
//   } else {
//     svgUse.setAttribute('href', './img/sprite.svg#icon-accordian-down');
//   }
// });

//--------------------------------------------------------------------------------------------------------------------//


const accordionBtns = document.querySelectorAll('.faq-btn');

accordionBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const accordionItem = btn.closest('.faq-list-item');
    const accordionContent = accordionItem.querySelector('.faq-accordion-text');

    if (accordionItem.classList.contains('is-active')) {
      accordionItem.classList.remove('is-active');
      accordionContent.style.maxHeight = null;
      btn.querySelector('use').setAttribute('href', './img/sprite.svg#icon-accordian-down');
    } else {
      accordionItem.classList.add('is-active');
      accordionContent.style.maxHeight = accordionContent.scrollHeight + 'px';
      btn.querySelector('use').setAttribute('href', './img/sprite.svg#icon-accordion-up');
    }
  });
});
``