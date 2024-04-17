import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

document.addEventListener("DOMContentLoaded", function () {
  const firstAccordionItem = document.querySelector('.accordion-item');
  const firstAccordionContent = firstAccordionItem.querySelector('.is-hidden');

  firstAccordionItem.classList.add('is-active');
  firstAccordionContent.style.maxHeight = firstAccordionContent.scrollHeight + 'px';
});

const accordionBtns = document.querySelectorAll('.accordion-button-up-down');

accordionBtns.forEach((btn, index) => {
  btn.addEventListener('click', () => {
    const accordionItem = btn.closest('.accordion-item');
    const accordionContent = accordionItem.querySelector('.is-hidden');

    const activeAccordionItem = document.querySelector('.accordion-item.is-active');
    if (activeAccordionItem && activeAccordionItem !== accordionItem) {
      const activeAccordionContent = activeAccordionItem.querySelector('.is-hidden');
      activeAccordionItem.classList.remove('is-active');
      activeAccordionContent.style.maxHeight = 0;
      activeAccordionItem.querySelector('.accordion-button-up-down use').setAttribute('href', './img/sprite.svg#icon-accordian-down');
    }

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