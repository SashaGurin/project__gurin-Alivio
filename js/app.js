// ======= mobile nav ====================================
const mobileNavButton = document.querySelector(".mobile-nav-button");
const mobileNavIcon = document.querySelector(".mobile-nav-button__icon");
const mobileNav = document.querySelector(".mobile__nav");

mobileNavButton.addEventListener("click", function () {
  mobileNavIcon.classList.toggle("active");
  mobileNav.classList.toggle("active");
  document.body.classList.toggle("no-scroll");
});

// ======= Video ========================================
const videoFile = document.querySelector("#story-video");
const videoBtn = document.querySelector("#story-video-btn");
const videoBtnicon = document.querySelector("#story-video-btn-icon");
const videoOverlay = document.querySelector("#story-video-overlay");

videoBtn.addEventListener("click", function () {
  function toggleOverlay(event) {
    if (event.type === "mouseleave") {
      videoOverlay.classList.add("hidden");
    } else {
      videoOverlay.classList.remove("hidden");
    }
  }

  if (videoFile.paused) {
    videoFile.play();
    videoBtnicon.src = "./img/pause_icon.svg";

    videoOverlay.onmouseleave = toggleOverlay;
    videoOverlay.onmouseenter = toggleOverlay;
  } else {
    videoFile.pause();
    videoBtnicon.src = "./img/play-white.svg";
    videoOverlay.onmouseleave = null;
    videoOverlay.onmouseenter = null;
  }
});
