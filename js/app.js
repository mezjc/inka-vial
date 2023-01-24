
function animar (){
  document.getElementById("header").classList.toggle("roll",window.scrollY>0);
}
window.addEventListener("scroll",function() {
  animar();
})

// const nav = document.querySelector(".nav-main");

// window.addEventListener("scroll", function () {
//   nav.classList.toggle("roll", window.scrollY > 0);
// });
// ScrollReveal().reveal(".header", { delay: 500 });