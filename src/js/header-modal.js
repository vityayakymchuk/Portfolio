const btn = {
  mobileMenuWrapper: document.querySelector('.mobile-menu-wrapper'),
  burger: document.querySelector('.header-btn-burger'),
  btnInTabletsAndDesktops: document.querySelector('.burger-tablet-and-desktop'),
  menuInTabletsAndDesktops: document.querySelector('.click-slider-menu'),
  close: document.querySelector('.close-btn-backdrop'),
};

function modalOn() {
  btn.mobileMenuWrapper.classList.add('is-open');
}

function modalOff() {
  btn.mobileMenuWrapper.classList.remove('is-open');
}

function modalOnMenu() {
  btn.menuInTabletsAndDesktops.classList.add('is-menu');
}

const listenerOn = btn.burger.addEventListener('click', modalOn);
const listenerInTabletOrDesktopOn =
  btn.btnInTabletsAndDesktops.addEventListener('click', modalOnMenu);
const listenerOff = btn.close.addEventListener('click', modalOff);

export {
  btn,
  modalOn,
  modalOff,
  listenerOn,
  listenerInTabletOrDesktopOn,
  listenerOff,
};
