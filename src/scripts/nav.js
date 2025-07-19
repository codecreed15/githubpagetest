document.querySelector(".hamburger").addEventListener("click", function() {
    let anclas = document.querySelectorAll(".menu_swap"); // Selecciona todos los elementos con clase 'menu__item' dentro de '.navBar'
    //console.log(anclas.length)
    anclas.forEach(ancla => {
        ancla.classList.toggle("menu--hidden"); // Alterna la clase
    });
});