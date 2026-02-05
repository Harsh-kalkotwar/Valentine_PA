const photos = document.querySelectorAll(".app-photo");
const lines = document.querySelectorAll(".app-line");

let current = 0;

function show(index) {
  photos.forEach(p => p.classList.remove("active"));
  lines.forEach(l => l.classList.remove("active"));

  photos[index].classList.add("active");
  lines[index].classList.add("active");
}

document.getElementById("next").addEventListener("click", () => {
  current = (current + 1) % photos.length;
  show(current);
});

document.getElementById("prev").addEventListener("click", () => {
  current = (current - 1 + photos.length) % photos.length;
  show(current);
});

show(current);
