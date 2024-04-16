const accordionBtns = document.querySelectorAll('.faq-btn');

accordionBtns.forEach((btn) => {
  btn.addEventListener('click', () => {
    const accordionItem = btn.closest('.faq-list-item ');
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