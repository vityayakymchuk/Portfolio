import Accordion from 'accordion-js';
import 'accordion-js/dist/accordion.min.css';

const accordionBtns = document.querySelectorAll('.accordion-button-up-down');
const firstAccordionItem = document.querySelector('.accordion-item');
const firstAccordionContent = firstAccordionItem.querySelector('.is-hidden');

firstAccordionItem.classList.add('is-active');
firstAccordionContent.style.maxHeight = firstAccordionContent.scrollHeight + 'px';
firstAccordionItem.querySelector('.accordion-button-up-down use').setAttribute('href', './img/sprite.svg#icon-accordion-up');

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

