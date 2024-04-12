const btn = {
  mobileMenuWrapper: document.querySelector('.mobile-menu-wrapper'),
  burger: document.querySelector('.header-btn-burger'),
  menuInTabletsAndDesktops: document.querySelector(
    '.burger-tablet-and-desktop'
  ),

  close: document.querySelector('.close-btn-backdrop'),
};

// const listener = btn.burger.addEventListener('click', modalOn);

function modalOn() {
  btn.mobileMenuWrapper.classList.add('is-open');
}

function modalOff() {
  btn.mobileMenuWrapper.classList.remove('is-open');
}

const listenerOn = btn.burger.addEventListener('click', modalOn);
const listenerInTabletOrDesktopOn =
  btn.menuInTabletsAndDesktops.addEventListener('click', modalOn);
const listenerOff = btn.close.addEventListener('click', modalOff);

export {
  btn,
  modalOn,
  modalOff,
  listenerOn,
  listenerInTabletOrDesktopOn,
  listenerOff,
};
