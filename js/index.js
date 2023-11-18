let nIntervId
const $containerCards = document.querySelector(".Check-wallet-collect");

funcIntervPhoto= ()=>{        
    let items = document.querySelectorAll('.item')
    document.querySelector('.slide').appendChild(items[0])
}

document.addEventListener('DOMContentLoaded', e=>{
if (document.querySelector(".slide-container")!=undefined){
    photo=["1.jpg","2.jpg","3.jpg","4.jpg","5.jpg","6.jpg","7.jpg","8.jpg","9.jpg","10.jpg","11.jpg","12.jpg","13.jpg","14.jpg","15.jpg"]
    html = ''
    photo.forEach(element => {
        html += `<div class="item"  style="background-image: url(../img/slide/${element})"></div>`
    });

    html = `<div class="slide"> ${html} </div>
            <div class="button">
                <button class="btn prev"><svg class="svg-prev" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l192 192c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L77.3 256 246.6 86.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-192 192z"/></svg></button>
                <button class="btn next"><svg class="svg-next" xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 320 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><path d="M310.6 233.4c12.5 12.5 12.5 32.8 0 45.3l-192 192c-12.5 12.5-32.8 12.5-45.3 0s-12.5-32.8 0-45.3L242.7 256 73.4 86.6c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0l192 192z"/></svg></butt
            </div>`
    document.querySelector(".slide-container").innerHTML=html



    if (!nIntervId) {
        nIntervId = setInterval(funcIntervPhoto, 5000);
    }
  
}
})


document.addEventListener("click", e=>{
    let $next = document.querySelector('.svg-next')
    let $prev = document.querySelector('.svg-prev')
    

    if (e.target == document.querySelector(".img-m")){
        e.target.classList.toggle("url-togg")
        document.querySelector("header").classList.toggle("head-togg")
        document.querySelector(".container-nav-l").classList.toggle("nav-l-togg")
        document.querySelector("main").classList.toggle("disp-none")
        document.querySelector("footer").classList.toggle("disp-none")
        if (document.querySelector(".logo").matches(".hidd-logo")){
           setTimeout(()=>{
            document.querySelector(".logo").classList.remove("hidd-logo")
           },400) 
        }else{
            document.querySelector(".logo").classList.add("hidd-logo")
        }
        
    }
    
    if (e.target == $next){
        funcIntervPhoto()
    }
    if (e.target == $prev){
        
        let items = document.querySelectorAll('.item')
        document.querySelector('.slide').prepend(items[items.length - 1])
    }
})




const cb = entries =>{
    let cont=0
    if(entries[0].isIntersecting){
        document.querySelectorAll(".card-col").forEach(el => {
            el.style.transition = `opacity 1s`
            el.style.opacity = 1
            
        })
    }else{
        observer.unobserve(el,target)
    }
}

const observer = new IntersectionObserver(cb, {
    threshold: [.5]
})    

observer.observe($containerCards);
