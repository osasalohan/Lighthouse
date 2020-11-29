function toggleClass() {
  const navbarItems = document.querySelectorAll(".navbar-responsive");
  navbarItems.forEach((item) => item.classList.toggle("navbar-toggle-show"));
}

function hideIcon() {
  document.querySelector(".nav-input-wrapper i").style.display = "none";
}

function showIcon() {
  if (document.querySelector(".nav-input").value === "") {
    document.querySelector(".nav-input-wrapper i").style.display = "block";
  }
}

document.querySelector(".navbar-toggle").addEventListener("click", toggleClass);

document.querySelector(".nav-input").addEventListener("focusin", hideIcon);

document.querySelector(".nav-input").addEventListener("focusout", showIcon);

$(document).ready(function () {
  $(".carousel-1").owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 1,
    nav: false,
    loop: true,
    smartSpeed: 900,
    dots: true,
    dotsData: true,
  });
  $(".carousel-2").owlCarousel({
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    items: 2,
    nav: true,
    navContainer: ".custom-nav",
    loop: true,
    smartSpeed: 900,
    navText: [
      "<i class='fas fa-long-arrow-alt-left'></i>",
      "<i class='fas fa-long-arrow-alt-right'></i>",
    ],
    dots: false,
    margin: 30,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
      },
      769: {
        items: 2,
      },
    },
  });
});
