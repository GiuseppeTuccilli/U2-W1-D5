window.addEventListener("scroll", function () {
  const header = document.getElementsByTagName("header");
  const navbar = document.getElementsByTagName("nav");
  const button = this.document.getElementById("nav-btn");

  const headerHeight = header[0].offsetHeight;
  const scrollPosition = window.scrollY;

  if (scrollPosition > headerHeight) {
    navbar[0].classList.add("scrolled");
    button.classList.add("btn-scrolled");
  } else {
    navbar[0].classList.remove("scrolled");
    button.classList.remove("btn-scrolled");
  }
});
