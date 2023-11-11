let loadNav = ()=>{

    // html_head=``
    // html_foot=``
    // document.querySelector("header").innerHTML=html_head
    // document.querySelector("footer").innerHTML=html_foot
}
loadNav()
document.addEventListener("click", e=>{
    if (e.target == document.querySelector(".img-m")){
        e.target.classList.toggle("url-togg")
        document.querySelector("header").classList.toggle("head-togg")
        document.querySelector(".container-nav-l").classList.toggle("nav-l-togg")
        document.querySelector(".logo").classList.toggle("hidd-logo")
        document.querySelector("main").classList.toggle("disp-none")
        document.querySelector("footer").classList.toggle("disp-none")
    }
})