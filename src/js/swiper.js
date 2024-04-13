import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
Swiper.use ([Navigation]);
const nextButton = document.querySelector(".button-next button")
const prevButton = document.querySelector(".button-prev button")


function updateButtons(swiper) {
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

    keyboard: {
      enabled: true,
    },
    // clickable: true,
    navigation: {
      nextEl: nextButton,
      prevEl: prevButton
    },

    // on: {
    //     init: function() {
    //         updateButtons(swiper);
    //     },
    // },

    
  });




// swiper.on('reachBeginning', updateButtons);
// swiper.on('reachEnd', updateButtons);

nextButton.addEventListener('click', () => {
    swiper.slideNext();
})
prevButton.addEventListener('click', () => {
    swiper.slidePrev();
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        swiper.slidePrev()
    } else if (e.key === 'ArrowRight') {
        swiper.slideNext();
    }

    
})