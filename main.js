const LNK1 = "https://www.checkout-ds24.com/product/604071?aff=Jesselimalima";
const LNK2 = "https://www.checkout-ds24.com/product/583059?aff=Jesselimalima";
const LNK3 = "https://www.checkout-ds24.com/product/583058?aff=Jesselimalima";

document.addEventListener("DOMContentLoaded", function () {
  var acc = document.getElementsByClassName("accordion");
  for (let i = 0; i < acc.length; i++) {
    var panel = acc[i].nextElementSibling;
    acc[i].setAttribute("aria-expanded", "false");
    panel.setAttribute("aria-hidden", "true");
    acc[i].addEventListener("click", function () {
      var p = this.nextElementSibling;
      var open = this.classList.toggle("active");
      this.setAttribute("aria-expanded", open ? "true" : "false");
      p.style.maxHeight = open ? p.scrollHeight + "px" : null;
      p.setAttribute("aria-hidden", open ? "false" : "true");
    });
  }
  document.querySelectorAll("img").forEach(function (img) {
    if (!img.closest("a")) {
      img.addEventListener("click", function () {
        window.location.href = LNK2;
      });
    }
  });
  var btn = document.getElementById("mobile-menu-btn");
  var menu = document.getElementById("mobile-menu");
  if (btn && menu) {
    btn.setAttribute("aria-expanded", "false");
    btn.addEventListener("click", function () {
      var open = menu.classList.toggle("open");
      btn.setAttribute("aria-expanded", open ? "true" : "false");
    });
    document.addEventListener("click", function (e) {
      if (!menu.contains(e.target) && e.target !== btn) {
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 992) {
        menu.classList.remove("open");
        btn.setAttribute("aria-expanded", "false");
      }
    });
  }
});
