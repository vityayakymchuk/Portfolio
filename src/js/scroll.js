const btn = document.querySelector('#button-scr-back');

window.addEventListener('scroll', function() {
  if (document.documentElement.scrollTop > 300) {
    btn.classList.add('show');
  } else {
    btn.classList.remove('show');
  }
});

btn.addEventListener('click', function(e) {
  e.preventDefault();
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' });
});