document.addEventListener("DOMContentLoaded", function () {
  const scrollTopBtn = document.getElementById("scroll-top");

  window.addEventListener("scroll", function () {
    if (window.scrollY > 200) {
      scrollTopBtn.classList.remove("hidden", "opacity-0", "translate-y-full");
      scrollTopBtn.classList.add("opacity-100", "translate-y-0");
    } else {
      scrollTopBtn.classList.add("hidden", "opacity-0", "translate-y-full");
      scrollTopBtn.classList.remove("opacity-100", "translate-y-0");
    }
  });

  scrollTopBtn.addEventListener("click", function () {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
});

// Wrap every letter in a span
var textWrapper = document.querySelector(".ml11 .letters");
textWrapper.innerHTML = textWrapper.textContent.replace(
  /([^\x00-\x80]|\w)/g,
  "<span class='letter'>$&</span>"
);

anime
  .timeline({ loop: false })
  .add({
    targets: ".ml11 .line",
    scaleY: [0, 1],
    opacity: [0.5, 1],
    easing: "easeOutExpo",
    duration: 500,
  })
  .add({
    targets: ".ml11 .line",
    translateX: [
      0,
      document.querySelector(".ml11 .letters").getBoundingClientRect().width +
        10,
    ],
    easing: "easeOutExpo",
    duration: 700,
    delay: 100,
  })
  .add({
    targets: ".ml11 .letter",
    opacity: [0, 1],
    easing: "easeOutExpo",
    duration: 600,
    offset: "-=775",
    delay: (el, i) => 34 * (i + 1),
  })
  .add({
    targets: ".ml11",
    duration: 100,
    easing: "easeOutExpo",
    delay: 1000,
  })
  .add({
    targets: ".line",
    scaleY: [0, 1],
    opacity: [0],
    easing: "easeOutExpo",
    duration: 1000,
  });

document.getElementById("burger-menu").addEventListener("click", function () {
  var navLinks = document.getElementById("nav-links");
  if (navLinks.classList.contains("hidden")) {
    navLinks.classList.remove("hidden");
    navLinks.classList.add("flex", "flex-col", "items-end", "space-y-4");
  } else {
    navLinks.classList.add("hidden");
    navLinks.classList.remove("flex", "flex-col", "items-end", "space-y-4");
  }
});
