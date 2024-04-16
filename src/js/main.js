
import { getReviwes } from "./apisRequest.js"
import {renderReviews} from "./renderFunctions.js"
// import { updateButtons } from "./swiper.js";
import "./swiper.js";
import iziToast from 'izitoast';
import "izitoast/dist/css/iziToast.min.css";



//обробник події завантаження сторінки
async function loaderHandler (event) {
    try {
        //апі запит
        const response = await getReviwes ();
        let reviews = response.data
        ///рендеримо Ul для слайдера на основі респонса
        renderReviews(reviews)
        

      
        
    }
    catch (error) {
        document.querySelector(".swiper").classList.add("hide-element")
        document.querySelector(".not-found").classList.remove("hide-element")
        document.querySelector(".button-prev button").disabled = true
        document.querySelector(".button-next button").disabled = true

        iziToast.show({
            color: 'orange',
            message: `${error}`,
            position: 'topCenter',
            timeout: 3000,
          });

    }
}

// document.addEventListener('DOMContentLoaded', loaderHandler);

let observer = new IntersectionObserver ((entries, observer) => {
    entries.forEach (entry => {
        
        if(entry.isIntersecting) {
            loaderHandler();                       
            observer.unobserve(entry.target);
        }
    })
});

let section = document.querySelector(".reviews");

observer.observe(section);

import {
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
} from './header-modal';

import './covers.js';
import './faq-accordion.js';

import './modal.js';
import './footer-form.js';

// ---------------------------------------

import './about-me.js';