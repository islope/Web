addEventListener('DOMContentLoaded', () => {
    const btn_menu = document.querySelector('.btn_menu')
    const menu_items = document.querySelector('.menu_items')
    if (btn_menu) {
        btn_menu.addEventListener('click', () => {
            menu_items.classList.toggle('show')
        })
    }else{

    }
})
function reveal() {
  var reveals = document.querySelectorAll(".reveal");

  for (var i = 0; i < reveals.length; i++) {
    var windowHeight = window.innerHeight;
    var elementTop = reveals[i].getBoundingClientRect().top;
    var elementVisible = 150;

    if (elementTop < windowHeight - elementVisible) {
      reveals[i].classList.add("active");
    } else {
      reveals[i].classList.remove("active");
    }
  }
}

window.addEventListener("scroll", reveal);
