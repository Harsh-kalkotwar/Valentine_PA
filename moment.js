const videos = document.querySelectorAll(".moment-video");
const nextBtn = document.querySelector(".side-btn.next");
const prevBtn = document.querySelector(".side-btn.prev");

let current = 0;

function showVideo(index) {
  videos.forEach((video) => {
    video.pause();
    video.currentTime = 0;
    video.classList.remove("active");
  });

  videos[index].classList.add("active");
  videos[index].play();
}

// Next video
nextBtn.addEventListener("click", () => {
  current = (current + 1) % videos.length;
  showVideo(current);
});

// Previous video
prevBtn.addEventListener("click", () => {
  current = (current - 1 + videos.length) % videos.length;
  showVideo(current);
});

// Auto-play first video
showVideo(current);
