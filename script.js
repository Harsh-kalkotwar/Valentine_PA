const track = document.getElementById("track");

// Duplicate images for smooth looping
const images = [...track.children];

images.forEach(img => {
  const clone = img.cloneNode(true);
  track.appendChild(clone);
});
