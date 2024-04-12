const coversPage = document.querySelector('.js_enable_animation');
function coverPage() {
    const result  = 
}


const coversSection = document.querySelector('#covers-section');


const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      
    } else {
     
    }
  });
});

// Починаємо спостереження за секцією "Covers"
observer.observe(coversSection);