import{a as g,S as l,N as f,A as w,M as L,K as k,i as S}from"./assets/vendor-bf41a455.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const o of n)if(o.type==="childList")for(const d of o.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function r(n){const o={};return n.integrity&&(o.integrity=n.integrity),n.referrerPolicy&&(o.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?o.credentials="include":n.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(n){if(n.ep)return;n.ep=!0;const o=r(n);fetch(n.href,o)}})();const E="https://portfolio-js.b.goit.study/api/reviews";async function q(){try{return await g.get(E)}catch(e){throw e}}const u=document.querySelector(".reviews-ul");function A(e){u&&e.forEach(({avatar_url:t,author:r,review:i})=>{u.insertAdjacentHTML("beforeend",`<li class="swiper-slide review-slide">
       <img class="review-img" src="${t}" alt="Avatar"  width="48px">
       <div class="support-text">
       <h3 class="review-author">${r}</h3>
       <p class="review-text">${i}</p>
       </div>
        </li>`)})}l.use([f]);const b=document.querySelector(".button-next button"),v=document.querySelector(".button-prev button"),P=document.querySelector(".next-btn-proj"),x=document.querySelector(".prev-btn-proj"),c=new l(".mySwiper",{slidesPerView:1,spaceBetween:16,loop:!1,slidesPerGroup:1,breakpoints:{320:{slidesPerView:1,spaceBetween:16,slidesPerGroup:1},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},keyboard:{enabled:!0},clickable:!0,navigation:{nextEl:b,prevEl:v}});b.addEventListener("click",e=>{c.slideNext(e)});v.addEventListener("click",e=>{c.slidePrev(e)});document.addEventListener("keydown",e=>{e.key==="ArrowLeft"?c.slidePrev():e.key==="ArrowRight"&&c.slideNext()});const m=new l(".projSwiper",{slidesPerView:1,spaceBetween:68,centeredSlidesBounds:!0,keyboard:{enabled:!0},clickable:!0,navigation:{nextEl:P,prevEl:x}});document.addEventListener("keydown",e=>{e.key==="ArrowLeft"?m.slidePrev():e.key==="ArrowRight"&&m.slideNext()});const s={mobileMenuWrapper:document.querySelector(".mobile-menu-wrapper"),burger:document.querySelector(".header-btn-burger"),btnInTabletsAndDesktops:document.querySelector(".burger-tablet-and-desktop"),menuInTabletsAndDesktops:document.querySelector(".click-slider-menu"),close:document.querySelector(".close-btn-backdrop"),modalBtnTravelForm:document.querySelector(".btn-order-the-project"),ulModalList:document.querySelector(".header-menu-wrapper")};function M(e){e.target!==e.currentTarget&&a()}function O(e){e.target!==e.currentTarget&&I()}function B(){s.mobileMenuWrapper.classList.add("is-open")}function a(){s.mobileMenuWrapper.classList.remove("is-open")}function y(){s.menuInTabletsAndDesktops.classList.toggle("is-menu"),s.menuInTabletsAndDesktops.style.display="flex"}function I(){s.menuInTabletsAndDesktops.classList.remove("is-menu")}s.burger.addEventListener("click",B);s.close.addEventListener("click",a);s.ulModalList.addEventListener("click",M);s.btnInTabletsAndDesktops.addEventListener("click",y);s.btnInTabletsAndDesktops.addEventListener("click",y);s.menuInTabletsAndDesktops.addEventListener("click",O);s.modalBtnTravelForm.addEventListener("click",a);function T(e){const t=e.getBoundingClientRect(),r=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth,n=t.top<=r&&t.top+t.height>=0,o=t.left<=i&&t.left+t.width>=0;return n&&o}function D(){const e=document.querySelector("#covers"),t=document.querySelectorAll(".marquee__line");window.addEventListener("scroll",function(){T(e)?t.forEach(function(r){r.classList.add("animate")}):t.forEach(function(r){r.classList.remove("animate")})})}document.addEventListener("DOMContentLoaded",D);new w(".faq-accordion-container");const V=document.querySelectorAll(".click"),j=document.querySelector(".backdrop");V.forEach(e=>{e.addEventListener("click",h)});document.addEventListener("keydown",N);function h(){j.classList.remove("is-open")}function N(e){e.code==="Escape"&&h()}const H=document.querySelector("#footer-form"),p=document.querySelector("#send-btn");document.querySelector("#user-email");H.addEventListener("submit",e=>{e.preventDefault(),p.setAttribute("disabled",!0),p.style.opacity="0.7",document.querySelector("#footer-form").reset(),document.querySelector("#modal-open").classList.add("is-open")});new w(".accordion-container",{duration:600,showMultiple:!1,openOnInit:[0]});let W={modules:[f,L,k],slidesPerView:2,lazy:!0,loop:!0,centeredSlides:!1,direction:"horizontal",mousewheel:!0,keyboard:!0,spaceBetween:0,initialSlide:1,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".about-me-swiper-btn-next"}};new l(".about-me-swiper-container",W);async function R(e){try{let r=(await q()).data;A(r)}catch(t){document.querySelector(".swiper").classList.add("hide-element"),document.querySelector(".not-found").classList.remove("hide-element"),document.querySelector(".button-prev button").disabled=!0,document.querySelector(".button-next button").disabled=!0,S.show({color:"orange",message:`${t}`,position:"topCenter",timeout:3e3})}}let C=new IntersectionObserver((e,t)=>{e.forEach(r=>{r.isIntersecting&&(R(),t.unobserve(r.target))})}),$=document.querySelector(".reviews");C.observe($);
//# sourceMappingURL=commonHelpers.js.map