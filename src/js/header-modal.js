const btn = {
  mobileMenuWrapper: document.querySelector('.mobile-menu-wrapper'),
  burger: document.querySelector('.header-btn-burger'),
  btnInTabletsAndDesktops: document.querySelector('.burger-tablet-and-desktop'),
  menuInTabletsAndDesktops: document.querySelector('.click-slider-menu'),
  close: document.querySelector('.close-btn-backdrop'),

  modalBtnTravelForm: document.querySelector('.btn-order-the-project'),

  ulModalList: document.querySelector('.header-menu-wrapper'),
};

function closeMobileMenu(event) {
  // event.preventDefault();
  if (event.target === event.currentTarget) return;
  modalOff();
}

function closeTablAndDeskMenu(event) {
  // event.preventDefault();

  if (event.target === event.currentTarget) return;

  // btn.menuInTabletsAndDesktops.style.display = 'none';

  modalOffMenu();
}

function modalOn() {
  btn.mobileMenuWrapper.classList.add('is-open');
}

function modalOff() {
  btn.mobileMenuWrapper.classList.remove('is-open');
}

function modalOnMenu() {
  btn.menuInTabletsAndDesktops.classList.toggle('is-menu');
  btn.menuInTabletsAndDesktops.style.display = 'flex';
}

function modalOffMenu() {
  btn.menuInTabletsAndDesktops.classList.remove('is-menu');
  // btn.menuInTabletsAndDesktops.style.display = 'none';
}

const listenerOn = btn.burger.addEventListener('click', modalOn);

const listenerOff = btn.close.addEventListener('click', modalOff);

const menuClosed = btn.ulModalList.addEventListener('click', closeMobileMenu);

// ddwwd

const listenerInTabletOrDesktopOn =
  btn.btnInTabletsAndDesktops.addEventListener('click', modalOnMenu);

const listenerInTabletOrDesktopOff =
  btn.btnInTabletsAndDesktops.addEventListener('click', modalOnMenu);

const menuClosedTablAndDeskt = btn.menuInTabletsAndDesktops.addEventListener(
  'click',
  closeTablAndDeskMenu
);

const listenerModalBtnTravelForm = btn.modalBtnTravelForm.addEventListener(
  'click',
  modalOff
);

export {
  btn,
  closeMobileMenu,
  closeTablAndDeskMenu,
  modalOn,
  modalOff,
  modalOnMenu,
  modalOffMenu,
  listenerOn,
  listenerOff,
  menuClosed,
  listenerInTabletOrDesktopOn,
  listenerInTabletOrDesktopOff,
  menuClosedTablAndDeskt,
  listenerModalBtnTravelForm,
};
