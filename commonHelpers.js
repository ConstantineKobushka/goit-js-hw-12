import{a as f,S as b,i as u}from"./assets/vendor-BId33ZDo.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const t of document.querySelectorAll('link[rel="modulepreload"]'))l(t);new MutationObserver(t=>{for(const a of t)if(a.type==="childList")for(const g of a.addedNodes)g.tagName==="LINK"&&g.rel==="modulepreload"&&l(g)}).observe(document,{childList:!0,subtree:!0});function o(t){const a={};return t.integrity&&(a.integrity=t.integrity),t.referrerPolicy&&(a.referrerPolicy=t.referrerPolicy),t.crossOrigin==="use-credentials"?a.credentials="include":t.crossOrigin==="anonymous"?a.credentials="omit":a.credentials="same-origin",a}function l(t){if(t.ep)return;t.ep=!0;const a=o(t);fetch(t.href,a)}})();f.defaults.baseURL="https://pixabay.com/api/";const h=(e,s)=>{const o={params:{q:e,orientation:"portrait",page:s,per_page:15,key:"39461522-3585b4ffe1c253549e3ec0e9b"}};return f.get("",o)},y=e=>`
  <li class="gallery-item">
    <a class="gallery-link" href="${e.largeImageURL}">
      <img class="gallery-img"
      src="${e.webformatURL}"
      alt="${e.tags}"
      loading="lazy" />
    </a>
    <ul class="gallery-info">
      <li class="gallery-info-item">
        <p class="gallery-info-title">Likes</p>
        <p class="gallery-info-text">${e.likes}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Views</p>
        <p class="gallery-info-text">${e.views}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Comments</p>
        <p class="gallery-info-text">${e.comments}</p>
      </li>
      <li class="gallery-info-item">
        <p class="gallery-info-title">Downloads</p>
        <p class="gallery-info-text">${e.downloads}</p>
      </li>
    </ul>
  </li>
  `,L="data:image/svg+xml,%3csvg%20xmlns='http://www.w3.org/2000/svg'%20width='24'%20height='24'%20fill='none'%3e%3cpath%20fill='%23FAFAFB'%20d='M6.81.219A.75.75%200%200%201%207.34%200h9.32a.75.75%200%200%201%20.53.219l6.591%206.591a.75.75%200%200%201%20.219.53v9.32a.75.75%200%200%201-.219.53l-6.591%206.591a.75.75%200%200%201-.53.219H7.34a.75.75%200%200%201-.53-.219L.219%2017.19A.75.75%200%200%201%200%2016.66V7.34a.75.75%200%200%201%20.219-.53L6.81.219ZM7.65%201.5%201.5%207.65v8.7l6.15%206.15h8.7l6.15-6.15v-8.7L16.35%201.5h-8.7Z'/%3e%3cpath%20fill='%23FAFAFB'%20d='M6.969%206.97a.75.75%200%200%201%201.062%200L12%2010.94l3.969-3.97a.75.75%200%201%201%201.062%201.061l-3.97%203.97%203.97%203.968a.753.753%200%200%201%200%201.062.749.749%200%200%201-1.062%200L12%2013.061l-3.969%203.97a.75.75%200%200%201-1.225-.243.751.751%200%200%201%20.163-.819L10.939%2012%206.97%208.031a.75.75%200%200%201%200-1.062Z'/%3e%3c/svg%3e",i=document.querySelector(".form"),c=document.querySelector(".gallery-list"),d=document.querySelector(".loader-btn"),r=document.querySelector(".loader-box");let n="",p=1,x=0,m=0;i.addEventListener("submit",w);d.addEventListener("click",S);const v=new b(".gallery-list a",{captionDelay:250,captionPosition:"bottom",captionsData:"alt",overlayOpacity:1});async function w(e){try{if(e.preventDefault(),p=1,n=i.elements.search.value.trim(),n.trim()==="")return;c.innerHTML="",r.classList.add("loader-box-active");const s=await h(n,p);if(s.data.hits.length===0){u.show({message:"Sorry, there are no images matching your search query. Please, try again!",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"24px",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",iconUrl:L,maxWidth:"385px",timeout:5e3}),i.reset(),i.elements.search.focus(),r.classList.remove("loader-box-active"),d.classList.remove("loader-box-active");return}const o=s.data.hits.map(l=>y(l)).join("");c.innerHTML=o,x=c.firstElementChild.getBoundingClientRect().height,v.refresh(),i.reset(),i.elements.search.focus(),r.classList.remove("loader-box-active"),d.classList.add("loader-box-active")}catch{console.log(err)}}async function S(){try{p++,r.classList.add("loader-box-active");const e=await h(n,p),s=e.data.hits.map(o=>y(o)).join("");c.insertAdjacentHTML("beforeend",s),v.refresh(),r.classList.remove("loader-box-active"),scrollBy({top:x*2,behavior:"smooth"}),m+=e.data.hits.length,m===e.data.totalHits&&(u.show({message:"We're sorry, but you've reached the end of search results.",position:"topRight",backgroundColor:"#ef4040",titleColor:"#fff",titleSize:"16px",titleLineHeight:"24px",messageColor:"#fff",messageSize:"16px",messageLineHeight:"24px",iconUrl:L,maxWidth:"385px",timeout:5e3}),r.classList.remove("loader-box-active"),d.classList.remove("loader-box-active"))}catch(e){console.log(e)}}
//# sourceMappingURL=commonHelpers.js.map
