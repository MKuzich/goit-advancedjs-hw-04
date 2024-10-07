import{a as m,S as L,i as d}from"./assets/vendor-DjDxajEQ.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const c of s.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&o(c)}).observe(document,{childList:!0,subtree:!0});function a(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function o(e){if(e.ep)return;e.ep=!0;const s=a(e);fetch(e.href,s)}})();const v="27957885-8dff7fee3c243073fce7c6825";m.defaults.baseURL="https://pixabay.com/api/";const p=(t,r)=>m.get("",{params:{key:v,q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,per_page:15,page:r}}),f=document.querySelector(".gallery"),y=({webformatURL:t,largeImageURL:r,tags:a,likes:o,views:e,comments:s,downloads:c})=>`
<li>
  <a href="${r}">
    <div class="image-container">
      <img class="image-preview" src="${t}" alt="${a}" />
    </div>
    <div class="card-description">
      <span class="attribute"><span>Likes</span> ${o}</span>
      <span class="attribute"><span>Views</span> ${e}</span>
      <span class="attribute"><span>Comments</span> ${s}</span>
      <span class="attribute"><span>Downloads</span> ${c}</span>
    </div>
  </a>
</li>
  `,b=t=>{const r=t.map(y).join("");f.innerHTML=`<ul class="gallery-list">${r}</ul>`},q=t=>{const r=t.map(y).join("");document.querySelector(".gallery-list").insertAdjacentHTML("beforeend",r)},h=()=>{f.innerHTML=""},g=new L(".gallery a",{overlayOpacity:.8,captions:!0,captionDelay:250,captionPosition:"bottom",captionType:"attr",captionsData:"alt"});let i=1,l="";const w=document.querySelector(".search-form"),n=document.querySelector(".load-more"),u=document.querySelector(".loader"),S=async t=>{t.preventDefault();const r=t.target,a=r.elements.query.value.trim();if(a)l===a?page+=1:(l=a,i=1);else return;r.reset(),u.classList.remove("hide");try{const{data:o}=await p(l,i);if(o.total===0)throw new Error("Sorry, there are no images matching your search query. Please try again!");b(o.hits),o.totalHits<=15*i?(n.classList.add("hide"),d.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})):n.classList.remove("hide"),g.refresh()}catch(o){d.error({title:"Error",message:o.message}),h()}u.classList.add("hide")};w.addEventListener("submit",S);const E=async()=>{i+=1,n.classList.add("hide"),u.classList.remove("hide");try{const{data:t}=await p(l,i);q(t.hits),t.totalHits<=15*i?(n.classList.add("hide"),d.info({title:"Info",message:"We're sorry, but you've reached the end of search results."})):n.classList.remove("hide");const a=document.querySelector(".gallery-list a").getBoundingClientRect().height;window.scrollBy({top:a*2,left:0,behavior:"smooth"}),g.refresh()}catch(t){d.error({title:"Error",message:t.message}),h()}u.classList.add("hide")};n.addEventListener("click",E);
//# sourceMappingURL=index.js.map
