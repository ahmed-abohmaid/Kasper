// skills-sprogress
let section = document.querySelector(".our-skills");
let progressSpans = document.querySelectorAll(".prog-holder .prog span");
// Up Bottun
let span = document.querySelector(".up");

window.onscroll = function () {
  if (window.scrollY >= section.offsetTop - 390) {
    progressSpans.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }
  // Up Bottun
  if (this.scrollY >= 1000) {
    span.classList.add("show");
  } else {
    span.classList.remove("show");
  }
};

// Up Bottun
span.onclick = function () {
  window.scrollTo({
    top: 0,
  });
};

/*
 *Start right and left buttons to change home background
 ** Get Elements
 */
const homeSection = document.getElementById("landing");

// Btns
const rightBtn = document.querySelector(".background-right");
const leftBtn = document.querySelector(".background-left");

//bollies
const myBolies = Array.from(document.querySelectorAll(".bolies li"));

// make current item to manage easy
let currentItem = 1;

// Toggle Checker fun.
Checker();

// For right btn
rightBtn.addEventListener("click", () => {
  if (rightBtn.classList.contains("block")) {
    return false;
  } else {
    currentItem++;
    Checker();
  }
});

// For left btn
leftBtn.addEventListener("click", () => {
  if (leftBtn.classList.contains("block")) {
    return false;
  } else {
    currentItem--;
    Checker();
  }
});

// Creat main function
function Checker() {
  // To remove active class from all first
  removeAllActive();

  // Change the background
  homeSection.style.backgroundImage = `url(images/home${currentItem}.jpg)`;

  // Change active class
  myBolies[currentItem - 1].classList = "active";

  // Check the first backgr.
  if (currentItem == 1) {
    leftBtn.classList.add("block");
  } else {
    leftBtn.classList.remove("block");
  }

  // Check the first backgr.
  if (currentItem == 3) {
    rightBtn.classList.add("block");
  } else {
    rightBtn.classList.remove("block");
  }
}

// Remove active class
function removeAllActive() {
  myBolies.forEach((bolly) => {
    bolly.classList.remove("active");
  });
}
