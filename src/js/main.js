import { getReviwes } from "./apisRequest.js"
import {renderReviews} from "./renderFunctions.js"
import "./swiper.js"




const nextButton = document.querySelector(".button-next");
const prevButton = document.querySelector(".button-prev");

let reviews;

async function loaderHandler (event) {
    try {
        const response = await getReviwes ();
        reviews = response.data
        
        renderReviews(reviews)
      
        
    }
    catch (error) {
        console.log (error)
    }
}

document.addEventListener('DOMContentLoaded', loaderHandler);

