import{S as x,a as E,i as M}from"./assets/vendor-DlULlCeh.js";(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))c(t);new MutationObserver(t=>{for(const r of t)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&c(i)}).observe(document,{childList:!0,subtree:!0});function l(t){const r={};return t.integrity&&(r.integrity=t.integrity),t.referrerPolicy&&(r.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?r.credentials="include":t.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function c(t){if(t.ep)return;t.ep=!0;const r=l(t);fetch(t.href,r)}})();const B=new x(".gallery-list a",{captionsData:"alt",captionDelay:250,captionPosition:"bottom",overlayOpacity:1}),S=({webformatURL:e,largeImageURL:a,tags:l,likes:c,views:t,comments:r,downloads:i})=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${a}">
      <img class="gallery-img"
      src="${e}"
      alt="${l}"
      loading="lazy" />
    </a>
    <ul class="gallery-info">
      <li class="gallery-info-item">
        <p class="gallery-info-title">Likes</p>
        <p class="gallery-info-text">${c}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Views</p>
        <p class="gallery-info-text">${t}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Comments</p>
        <p class="gallery-info-text">${r}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Downloads</p>
        <p class="gallery-info-text">${i}</p>
      </li>
    </ul>
  </li>
  `,p=(e,a)=>{const l=e.map(S).join("");a.insertAdjacentHTML("beforeend",l),B.refresh()},C=e=>{e.innerHTML=""},h=e=>{e.classList.add("active")},L=e=>{e.classList.remove("active")},b=e=>{e.classList.add("active")},d=e=>{e.classList.remove("active")},O=E.create({baseURL:"https://pixabay.com/api",params:{key:"39461522-3585b4ffe1c253549e3ec0e9b",image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15}}),v=async(e,a)=>await O.get("/",{params:{q:e,page:a}}),P="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%20viewBox='0%200%2024%2024'%3e%3cpath%20fill='%23fafafb'%20d='M6.81.219A.75.75%200%200%201%207.34%200h9.32a.75.75%200%200%201%20.53.219l6.591%206.591a.75.75%200%200%201%20.219.53v9.32a.75.75%200%200%201-.219.53l-6.591%206.591a.75.75%200%200%201-.53.219H7.34a.75.75%200%200%201-.53-.219L.219%2017.19A.75.75%200%200%201%200%2016.66V7.34a.75.75%200%200%201%20.219-.53zM7.65%201.5%201.5%207.65v8.7l6.15%206.15h8.7l6.15-6.15v-8.7L16.35%201.5z'/%3e%3cpath%20fill='%23fafafb'%20d='M6.969%206.969a.75.75%200%200%201%201.062%200L12%2010.939l3.969-3.97a.75.75%200%201%201%201.062%201.062L13.061%2012l3.97%203.969a.752.752%200%200%201-1.062%201.062L12%2013.061l-3.969%203.97a.752.752%200%200%201-1.282-.531.75.75%200%200%201%20.22-.531L10.939%2012%206.97%208.031a.75.75%200%200%201%200-1.062'/%3e%3c/svg%3e",m=document.querySelector(".gallery-form"),f=document.querySelector(".gallery-list"),y=document.querySelector(".gallery-loader"),o=document.querySelector(".load-more-btn");let g="",u=1,s=0,w=0;m.addEventListener("submit",q);o.addEventListener("click",H);async function q(e){if(e.preventDefault(),u=1,s=0,g=e.target.elements.search.value.trim(),g===""){n("The input field cannot be empty. Please enter a search keyword.");return}C(f),d(o),h(y);try{const{data:a}=await v(g,u);if(a.hits.length===0){n("Sorry, there are no images matching your search query. Please, try again!");return}s+=a.hits.length,p(a.hits,f),w=f.firstElementChild.getBoundingClientRect().height,s<a.totalHits&&b(o)}catch(a){n(a.message)}finally{L(y),m.reset(),m.elements.search.focus()}}async function H(){try{d(o),h(y),u++;const{data:e}=await v(g,u);p(e.hits,f),scrollBy({top:w*2,behavior:"smooth"}),s+=e.hits.length,s<e.totalHits&&b(o),s===e.totalHits&&n("We're sorry, but you've reached the end of search results.")}catch(e){n(e.message),d(o)}finally{L(y)}}function n(e){M.error({title:"Error",titleColor:"#ffffff",message:e,messageColor:"#ffffff",maxWidth:"385px",iconUrl:P,position:"topRight",closeOnEscape:!0,backgroundColor:"#ef4040",progressBarColor:"#b51b1b",timeout:3e3})}
//# sourceMappingURL=index.js.map
