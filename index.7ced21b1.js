const e=document.querySelector(".cat-info"),s=document.querySelector(".breed-select"),t=document.querySelector(".loader"),i=document.querySelector(".error");i.classList.add("unvisible"),t.classList.remove("unvisible"),fetch("https://api.thecatapi.com/v1/breeds?live_yLDkUr3dbr9zSfZaJmQrZc8jkq2mgsHyEyNMPqfIALTiwT0FN4h0RODPgtWAcrzr").then((e=>{if(!e.ok)throw new Error(e.status);return e.json()})).then((e=>{console.log(e),function(e){const t=e.map((e=>`<option value="${e.reference_image_id}">${e.name}</option>`)).join("");s.innerHTML=t}(e),s.classList.remove("unvisible")})).catch((e=>{console.log(e),i.classList.remove("unvisible"),s.classList.add("unvisible")})).finally((()=>t.classList.add("unvisible"))),s.addEventListener("change",(()=>{const n=s.value;var c,r;console.log(n),r=n,t.classList.remove("unvisible"),(c=r,fetch(`https://api.thecatapi.com/v1/images/${c}?api_key=live_yLDkUr3dbr9zSfZaJmQrZc8jkq2mgsHyEyNMPqfIALTiwT0FN4h0RODPgtWAcrzr&breed_ids=${c}`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))).then((s=>{const t=s,i=t.breeds[0];console.log(t);const n=t.url;var c,r;c=n,r=i,e.innerHTML=`<img\n  src=${c}\n  alt="cat"\n  width="300"\n /><div class="text-content">\n   <h2 class="title-breed">${r.name}</h2>\n   <p class="breed-desc">${r.description}</p>\n </div>`})).catch((e=>{console.log(e),i.classList.remove("unvisible"),s.classList.add("unvisible")})).finally((()=>t.classList.add("unvisible")))}));
//# sourceMappingURL=index.7ced21b1.js.map