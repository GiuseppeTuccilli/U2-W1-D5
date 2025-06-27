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

const mArray = document.querySelectorAll("svg g");
/*
const randomM = function () {
  for (i = 0; i < mArray.length; i++) {
    let r = Math.floor(Math.random() + 0.1);
    if (r === 1) {
      mArray[i].style.opacity = "1";
      console.log(r);
    } else {
      mArray[i].style.opacity = "0";
      console.log(r);
    }
  }
}; */

//randomM();

//setInterval(randomM, 500);

const ran = function () {
  let r = Math.random();
  if (r <= 0.85) {
    return true;
  } else {
    return false;
  }
};

const randomM = function () {
  for (i = 0; i < mArray.length; i++) {
    if (ran()) {
      mArray[i].style.opacity = "1";
    } else {
      mArray[i].style.opacity = "0";
    }
  }
};

setInterval(randomM, 500);
