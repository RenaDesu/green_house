!function(){var e={916:function(){function e(e){const t=e.currentTarget.parentElement,n=t.querySelector(".faq__answer");t.classList.toggle("faq__item--open"),t.classList.contains("faq__item--open")?n.style.maxHeight=n.scrollHeight+"px":n.style.maxHeight=null}document.querySelector(".faq__list").querySelectorAll(".faq__question").forEach((function(t){t.addEventListener("click",e)}))},163:function(){const e=document.querySelector(".main-nav");document.querySelector(".burger").addEventListener("click",(t=>{const n=t.currentTarget;e.classList.toggle("main-nav--open"),n.classList.toggle("burger--active"),e.classList.contains("main-nav--open")?document.body.setAttribute("style","overflow: hidden"):document.body.removeAttribute("style")}))},643:function(){const e=document.querySelector(".slider__modal-btn"),t=document.querySelector(".modal__close-btn"),n=document.querySelector(".modal"),r=n.querySelector(".modal__wrap"),s=()=>{r.classList.remove("modal__wrap-in"),r.removeEventListener("animationend",s)},i=()=>{r.classList.remove("modal__wrap-out"),n.classList.remove("modal--open"),r.removeEventListener("animationend",i)};e.addEventListener("click",(()=>{r.addEventListener("animationend",s),n.classList.add("modal--open"),r.classList.add("modal__wrap-in")})),t.addEventListener("click",(()=>{r.addEventListener("animationend",i),r.classList.add("modal__wrap-out")}))},820:function(){const e=document.querySelector(".slider"),t=e.querySelectorAll(".slider__item"),n=e.querySelector(".slider__btn--prev"),r=e.querySelector(".slider__btn--next");let s=0;const i=t.length-1;function o(e){0===e?n.setAttribute("disabled","disabled"):n.removeAttribute("disabled","disabled")}function c(e){e===i?r.setAttribute("disabled","disabled"):r.removeAttribute("disabled","disabled")}t[s].classList.add("slider__item--current"),r.addEventListener("click",(function(){t[s].classList.remove("slider__item--current"),t[s].setAttribute("style","transform: translate(0%)"),s++,c(s),o(s),t[s].classList.add("slider__item--current")})),n.addEventListener("click",(function(){t[s].classList.remove("slider__item--current"),s--,c(s),o(s),t[s].classList.add("slider__item--current"),t[s].removeAttribute("style")}))},66:function(){const e=document.querySelectorAll(".tabs__link"),t=document.querySelectorAll(".tab-content__item");function n(n){const r=n.currentTarget,s=r.dataset.work;t.forEach((function(e){e.classList.remove("tab-content__item--active")})),e.forEach((function(e){e.classList.remove("tabs__link--active")})),document.querySelector(`#${s}`).classList.add("tab-content__item--active"),r.classList.add("tabs__link--active")}e.forEach((function(e){e.addEventListener("click",n)}))},91:function(e){"use strict";e.exports=function(e,t){return t||(t={}),e?(e=String(e.__esModule?e.default:e),t.hash&&(e+=t.hash),t.maybeNeedQuotes&&/[\t\n\f\r "'=<>`]/.test(e)?'"'.concat(e,'"'):e):e}},846:function(e,t,n){"use strict";e.exports=n.p+"06032c494891858e32ce.js"},791:function(e,t,n){"use strict";e.exports=n.p+"images/header-slide-1.jpg"},51:function(e,t,n){"use strict";e.exports=n.p+"images/header-slide-2.jpg"},920:function(e,t,n){"use strict";e.exports=n.p+"images/header-slide-3.jpg"},215:function(e,t,n){"use strict";e.exports=n.p+"images/icon-cross.svg"},646:function(e,t,n){"use strict";e.exports=n.p+"images/logo.svg"},745:function(e,t,n){"use strict";e.exports=n.p+"images/tab-1.png"},501:function(e,t,n){"use strict";e.exports=n.p+"images/tab-2.png"},160:function(e,t,n){"use strict";e.exports=n.p+"images/tab-3.png"}},t={};function n(r){var s=t[r];if(void 0!==s)return s.exports;var i=t[r]={exports:{}};return e[r](i,i.exports,n),i.exports}n.m=e,n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,{a:t}),t},n.d=function(e,t){for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},function(){var e;n.g.importScripts&&(e=n.g.location+"");var t=n.g.document;if(!e&&t&&(t.currentScript&&(e=t.currentScript.src),!e)){var r=t.getElementsByTagName("script");if(r.length)for(var s=r.length-1;s>-1&&!e;)e=r[s--].src}if(!e)throw new Error("Automatic publicPath is not supported in this browser");e=e.replace(/#.*$/,"").replace(/\?.*$/,"").replace(/\/[^\/]+$/,"/"),n.p=e}(),n.b=document.baseURI||self.location.href,function(){"use strict";var e=n(91),t=n.n(e),r=new URL(n(646),n.b),s=new URL(n(791),n.b),i=new URL(n(51),n.b),o=new URL(n(920),n.b),c=new URL(n(745),n.b),a=new URL(n(501),n.b),l=new URL(n(160),n.b),u=new URL(n(215),n.b),d=new URL(n(846),n.b);t()(r),t()(s),t()(i),t()(o),t()(c),t()(a),t()(l),t()(u),t()(d),n(163),n(820),n(643),n(66),n(916)}()}();