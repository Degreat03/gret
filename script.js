const toTop = document.querySelector(".to-top")

window.addEventListener("scroll", function(){
    if (this.window.pageYOffset > 100) {
        toTop.classList.add("active");
    } else{
        toTop.classList.remove("active");
    }
})

const navToggle = document.querySelector(".nav-toggle");
const navBars = document.getElementById("nav-bars");

navToggle.addEventListener("click", function(){
    navToggle.classList.toggle("active");
    navBars.classList.toggle("active");
})