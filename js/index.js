$btnMenu= document.querySelector(".img-m")

$btnMenu.addEventListener("click", e=>{
    document.querySelector(".elementor-section").style.WebkitAnimation  = "stop-start-img"
    e.target.classList.toggle("url-togg")
    document.querySelector("header").classList.toggle("head-togg")
    document.querySelector(".container-nav-l").classList.toggle("nav-l-togg")
    document.querySelector(".logo").classList.toggle("hidd-logo")
    document.querySelector("main").classList.toggle("disp-none")
    if (e.target.classList.contains("url-togg")){
        // console.log(e.target.closest(".r-menu")); 

        // document.querySelector(".container-nav-l").style.transform=("translateX(-4rem)")

        
    }
})