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
