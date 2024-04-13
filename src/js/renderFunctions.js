const reviewsUL = document.querySelector(".swiper-wrapper");



export function renderReviews(reviews) {
    if (!reviewsUL) return;
    reviews.forEach(({avatar_url, author, review})=> {
       reviewsUL.insertAdjacentHTML("beforeend", `<li class="swiper-slide">
       <img class="review-img" src="${avatar_url}" alt="Avatar"  width="48">
       <div class="support-text">
       <h3 class="review-author">${author}</h3>
       <p class="review-text">${review}</p>
       </div>
        </li>`) 
    
        
    }); 

    
} 



