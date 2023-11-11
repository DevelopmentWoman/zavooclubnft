let loadNav = ()=>{

    html_head=`<nav class="navbar">
        <span class="logo"><img src="img/logo.png" alt=""></span>
        <div class="container-nav-l">
            <a class="navbar-opc" href="index.html">Home</a>
            <a class="navbar-opc" href="#">Quiénes somos</a>
            <a class="navbar-opc" href="#">NFTs</a>
            <a class="navbar-opc" href="#">White paper</a>
            <a class="navbar-opc" href="#">Blog</a>
            <a class="navbar-opc" href="#">Contacto</a>              
        </div>
        <div class="r-menu">
            <span class="img-m url-menu"></span>
        </div>
        </nav>`
        html_foot=`<div class="container-nav-foot">
                <a class="navbar-opc" href="index.html">Home</a>
                <a class="navbar-opc" href="#">Quiénes somos</a>
                <a class="navbar-opc" href="#">NFTs</a>
                <a class="navbar-opc" href="#">White paper</a>
                <a class="navbar-opc" href="#">Blog</a>
                <a class="navbar-opc" href="#">Contacto</a>
                <p>Zavoo NFT Club - Todos los derechos reservados</p>        
                </div>`
    document.querySelector("header").innerHTML=html_head
    document.querySelector("footer").innerHTML=html_foot
}
loadNav()
document.addEventListener("click", e=>{
    if (e.target == document.querySelector(".img-m")){
        document.querySelector(".elementor-section").style.WebkitAnimation  = "stop-start-img"
        e.target.classList.toggle("url-togg")
        document.querySelector("header").classList.toggle("head-togg")
        document.querySelector(".container-nav-l").classList.toggle("nav-l-togg")
        document.querySelector(".logo").classList.toggle("hidd-logo")
        document.querySelector("main").classList.toggle("disp-none")
        document.querySelector("footer").classList.toggle("disp-none")
    }
})