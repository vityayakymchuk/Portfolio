import accordion from "accordion-js"

const accordionBtn = document.getElementsByClassName('containerbtn');
let i = 0;

for (i = 0; i < accordionBtn.length; i++) {
  accordionBtn[i].addEventListener('click', function () {
    this.classList.toggle('active');
  });
}