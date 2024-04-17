import{a as g,S as l,N as w,A as b,M as k,K as E,i as S}from"./assets/vendor-bf41a455.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const n of document.querySelectorAll('link[rel="modulepreload"]'))i(n);new MutationObserver(n=>{for(const r of n)if(r.type==="childList")for(const d of r.addedNodes)d.tagName==="LINK"&&d.rel==="modulepreload"&&i(d)}).observe(document,{childList:!0,subtree:!0});function o(n){const r={};return n.integrity&&(r.integrity=n.integrity),n.referrerPolicy&&(r.referrerPolicy=n.referrerPolicy),n.crossOrigin==="use-credentials"?r.credentials="include":n.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(n){if(n.ep)return;n.ep=!0;const r=o(n);fetch(n.href,r)}})();const q="https://portfolio-js.b.goit.study/api/reviews";async function A(){try{return await g.get(q)}catch(e){throw e}}const m=document.querySelector(".reviews-ul");function P(e){m&&e.forEach(({avatar_url:t,author:o,review:i})=>{m.insertAdjacentHTML("beforeend",`<li class="swiper-slide review-slide">
       <img class="review-img" src="${t}" alt="Avatar"  width="48px">
       <div class="support-text">
       <h3 class="review-author">${o}</h3>
       <p class="review-text">${i}</p>
       </div>
        </li>`)})}l.use([w]);const v=document.querySelector(".button-next button"),y=document.querySelector(".button-prev button"),x=document.querySelector(".next-btn-proj"),T=document.querySelector(".prev-btn-proj"),c=new l(".mySwiper",{slidesPerView:1,spaceBetween:16,loop:!1,slidesPerGroup:1,breakpoints:{320:{slidesPerView:1,spaceBetween:16,slidesPerGroup:1},768:{slidesPerView:2,spaceBetween:16},1440:{slidesPerView:4,spaceBetween:16}},keyboard:{enabled:!0},clickable:!0,navigation:{nextEl:v,prevEl:y}});v.addEventListener("click",e=>{c.slideNext(e)});y.addEventListener("click",e=>{c.slidePrev(e)});document.addEventListener("keydown",e=>{e.key==="ArrowLeft"?c.slidePrev():e.key==="ArrowRight"&&c.slideNext()});const p=new l(".projSwiper",{slidesPerView:1,spaceBetween:68,centeredSlidesBounds:!0,keyboard:{enabled:!0},clickable:!0,navigation:{nextEl:x,prevEl:T}});document.addEventListener("keydown",e=>{e.key==="ArrowLeft"?p.slidePrev():e.key==="ArrowRight"&&p.slideNext()});const s={mobileMenuWrapper:document.querySelector(".mobile-menu-wrapper"),burger:document.querySelector(".header-btn-burger"),btnInTabletsAndDesktops:document.querySelector(".burger-tablet-and-desktop"),menuInTabletsAndDesktops:document.querySelector(".click-slider-menu"),close:document.querySelector(".close-btn-backdrop"),modalBtnTravelForm:document.querySelector(".btn-order-the-project"),ulModalList:document.querySelector(".header-menu-wrapper")};function M(e){e.target!==e.currentTarget&&u()}function O(e){e.target!==e.currentTarget&&I()}function B(){s.mobileMenuWrapper.classList.add("is-open")}function u(){s.mobileMenuWrapper.classList.remove("is-open")}function h(){s.menuInTabletsAndDesktops.classList.toggle("is-menu"),s.menuInTabletsAndDesktops.style.display="flex"}function I(){s.menuInTabletsAndDesktops.classList.remove("is-menu")}s.burger.addEventListener("click",B);s.close.addEventListener("click",u);s.ulModalList.addEventListener("click",M);s.btnInTabletsAndDesktops.addEventListener("click",h);s.btnInTabletsAndDesktops.addEventListener("click",h);s.menuInTabletsAndDesktops.addEventListener("click",O);s.modalBtnTravelForm.addEventListener("click",u);function D(e){const t=e.getBoundingClientRect(),o=window.innerHeight||document.documentElement.clientHeight,i=window.innerWidth||document.documentElement.clientWidth,n=t.top<=o&&t.top+t.height>=0,r=t.left<=i&&t.left+t.width>=0;return n&&r}function V(){const e=document.querySelector("#covers"),t=document.querySelectorAll(".marquee__line");window.addEventListener("scroll",function(){D(e)?t.forEach(function(o){o.classList.add("animate")}):t.forEach(function(o){o.classList.remove("animate")})})}document.addEventListener("DOMContentLoaded",V);new b(".faq-accordion-container");const j=document.querySelectorAll(".click"),N=document.querySelector(".backdrop");j.forEach(e=>{e.addEventListener("click",L)});document.addEventListener("keydown",H);function L(){N.classList.remove("is-open")}function H(e){e.code==="Escape"&&L()}const W=document.querySelector("#footer-form"),f=document.querySelector("#send-btn");document.querySelector("#user-email");W.addEventListener("submit",e=>{e.preventDefault(),f.setAttribute("disabled",!0),f.style.opacity="0.7",document.querySelector("#footer-form").reset(),document.querySelector("#modal-open").classList.add("is-open")});new b(".accordion-container",{duration:600,showMultiple:!1,openOnInit:[0]});let R={modules:[w,k,E],slidesPerView:2,lazy:!0,loop:!0,centeredSlides:!1,direction:"horizontal",mousewheel:!0,keyboard:!0,spaceBetween:0,initialSlide:1,breakpoints:{768:{slidesPerView:3},1440:{slidesPerView:6}},navigation:{nextEl:".about-me-swiper-btn-next"}};new l(".about-me-swiper-container",R);const a=document.querySelector("#button-scr-back");window.addEventListener("scroll",function(){document.documentElement.scrollTop>300?a.classList.add("show"):a.classList.remove("show")});a.addEventListener("click",function(e){e.preventDefault(),document.documentElement.scrollTo({top:0,behavior:"smooth"})});async function $(e){try{let o=(await A()).data;P(o)}catch(t){document.querySelector(".swiper").classList.add("hide-element"),document.querySelector(".not-found").classList.remove("hide-element"),document.querySelector(".button-prev button").disabled=!0,document.querySelector(".button-next button").disabled=!0,S.show({color:"orange",message:`${t}`,position:"topCenter",timeout:3e3})}}let C=new IntersectionObserver((e,t)=>{e.forEach(o=>{o.isIntersecting&&($(),t.unobserve(o.target))})}),z=document.querySelector(".reviews");C.observe(z);
//# sourceMappingURL=commonHelpers.js.map
