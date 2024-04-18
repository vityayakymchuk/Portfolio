import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
Swiper.use ([Navigation]);
const nextButton = document.querySelector(".button-next button")
const prevButton = document.querySelector(".button-prev button")

const nextBtnProj = document.querySelector(".next-btn-proj")
const prevBtnProj = document.querySelector(".prev-btn-proj")


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



const mySwiper = new Swiper ('.mySwiper', {
    slidesPerView: 1,
    spaceBetween: 16,
    loop: false,
    initialSlide: 1,
    
    
    breakpoints: {
        768: {
            slidesPerView: 2,
            spaceBetween: 16,
        },

        1440: {
            slidesPerView: 4,
            spaceBetween: 16,
        },
    },

    keyboard: {
      enabled: true,
    },
    clickable: true,

    navigation: {
      nextEl: nextButton,
      prevEl: prevButton,
    },    
    
  });




// swiper.on('reachBeginning', updateButtons);
// swiper.on('reachEnd', updateButtons);

nextButton.addEventListener('click', (e) => {
    swiper.slideNext(e);
       
})
prevButton.addEventListener('click', (e) => {
    swiper.slidePrev(e);       
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        swiper.slidePrev()
    } else if (e.key === 'ArrowRight') {
        swiper.slideNext();
    }

    
})

// Projects

const swiperProj = new Swiper(".projSwiper", {
    slidesPerView: 1,
    spaceBetween: 68,
    centeredSlidesBounds: true,
    keyboard: {
        enabled: true,
      },
      clickable: true,
      navigation: {
        nextEl: nextBtnProj,
        prevEl: prevBtnProj,
      },
    
})

document.addEventListener('keydown', (e) => {
    if (e.key === 'ArrowLeft') {
        swiperProj.slidePrev()
    } else if (e.key === 'ArrowRight') {
        swiperProj.slideNext();
    }    
})