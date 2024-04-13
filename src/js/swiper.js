import Swiper from 'swiper';


const nextButton = document.querySelector(".button-next button")
const prevButton = document.querySelector(".button-prev button")

const swiper = new Swiper ('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,

    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 16
        },

        1440: {
            slidesPerView: 4,
            spaceBetween: 16
        }
    },

    // keyboard: {
    //   enabled: true,
    // },
    // clickable: true,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton
    },
  });


  function updateButtons() {
    // Перевіряємо, чи це початок або кінець Swiper-слайдера
    if (swiper.isBeginning) {
        prevButton.disabled = true;
    } else {
        prevButton.disabled = false;
    }

    if (swiper.isEnd) {
        nextButton.disabled = true;
    } else {
        nextButton.disabled = false;
    }
}

swiper.on('reachBeginning', updateButtons);
swiper.on('reachEnd', updateButtons);

nextButton.addEventListener('click', () => {
    swiper.slideNext();
})
prevButton.addEventListener('click', () => {
    swiper.slidePrev();
})