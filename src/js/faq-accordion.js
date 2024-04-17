
/--------------------------------------------------------------------/
// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// new Accordion('.faq-list-accordion-container', {
//   duration: 600,
//   showMultiple: true,
// });

// document.addEventListener('click', function (event) {
//   const clickedButton = event.target.closest('.ac-trigger');

//   if (!clickedButton) return;

//   event.preventDefault();

//   const clickedLi = clickedButton.closest('.ac');
//   const svgUse = clickedButton.querySelector('use');

//   if (clickedLi.classList.contains('is-active')) {
//     svgUse.setAttribute('href', './img/sprite.svg#icon-accordion-up');
//   } else {
//     svgUse.setAttribute('href', './img/sprite.svg#icon-accordion-down');
//   }
// });






// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// new Accordion('.faq-list-accordion-container', {
//   duration: 600,
//   showMultiple: true,
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const svgUses = document.querySelectorAll('.faq-content-div-svg use');

//   svgUses.forEach(svgUse => {
//     svgUse.setAttribute('href', './img/sprite.svg#icon-accordion-down');
//   });
// });

// document.addEventListener('click', function (event) {
//   const clickedButton = event.target.closest('.ac-trigger');

//   if (!clickedButton) return;

//   event.preventDefault();

//   const clickedLi = clickedButton.closest('.ac');
//   const svgUse = clickedButton.querySelector('use');

//   if (clickedLi.classList.contains('is-active')) {
//     svgUse.setAttribute('href', './img/sprite.svg#icon-accordion-up');
//   } else {
//     svgUse.setAttribute('href', './img/sprite.svg#icon-accordion-down');
//   }
// });


// import Accordion from 'accordion-js';
// import 'accordion-js/dist/accordion.min.css';

// new Accordion('.faq-list-accordion-container', {
//   duration: 600,
//   showMultiple: true,
// });

// document.addEventListener('DOMContentLoaded', function () {
//   const svgUses = document.querySelectorAll('.faq-content-div-svg use');
//   const acElements = document.querySelectorAll('.ac');

//   svgUses.forEach(svgUse => {
//     svgUse.setAttribute('href', './img/sprite.svg#icon-accordion-down');
//   });

//   acElements.forEach(acElement => {
//     acElement.style.border = 'none';
//   });
// });

// document.addEventListener('click', function (event) {
//   const clickedButton = event.target.closest('.ac-trigger');

//   if (!clickedButton) return;

//   event.preventDefault();

//   const clickedLi = clickedButton.closest('.ac');
//   const svgUse = clickedButton.querySelector('use');

//   if (clickedLi.classList.contains('is-active')) {
//     svgUse.setAttribute('href', './img/sprite.svg#icon-accordion-up');
//   } else {
//     svgUse.setAttribute('href', './img/sprite.svg#icon-accordion-down');
//   }

//   acElements.forEach(acElement => {
//     acElement.style.border = 'none';
//   });

//   clickedLi.style.border = '1px solid rgba(250, 250, 250, 0.2)';
// });


import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

new Accordion('.faq-list-accordion-container', {
  duration: 600,
  showMultiple: true,
});

document.addEventListener('DOMContentLoaded', function () {
  const svgUses = document.querySelectorAll('.faq-content-div-svg use');
  const acElements = document.querySelectorAll('.ac');

  svgUses.forEach(svgUse => {
    svgUse.setAttribute('href', './img/sprite.svg#icon-accordion-down');
  });

  acElements.forEach(acElement => {
    acElement.style.borderTop = '1px solid rgba(250, 250, 250, 0.2)';
  });

  // Reset the border set by the Accordion.js library
  const acItems = document.querySelectorAll('.ac.ac-item');
  acItems.forEach(acItem => {
    acItem.style.borderTop = 'none';
  });

  // Add a click event listener to each ac-trigger button
  const acTriggers = document.querySelectorAll('.ac-trigger');
  acTriggers.forEach(acTrigger => {
    acTrigger.addEventListener('click', function (event) {
      event.preventDefault();

      const clickedLi = acTrigger.closest('.ac');
      const svgUse = acTrigger.querySelector('use');

      if (clickedLi.classList.contains('is-active')) {
        svgUse.setAttribute('href', './img/sprite.svg#icon-accordion-up');
      } else {
        svgUse.setAttribute('href', './img/sprite.svg#icon-accordion-down');
      }

      // Reset the border set by the Accordion.js library
      const acItems = document.querySelectorAll('.ac.ac-item');
      acItems.forEach(acItem => {
        acItem.style.borderTop = 'none';
      });

      clickedLi.style.borderTop = '1px solid rgba(250, 250, 250, 0.2)';
    });

    // Make the SVG icon visible by default
    const svgUse = acTrigger.querySelector('use');
    svgUse.setAttribute('href', './img/sprite.svg#icon-accordion-down');
  });
});