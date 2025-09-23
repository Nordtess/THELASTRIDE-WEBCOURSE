document.addEventListener('DOMContentLoaded', () => {
  // Kör bara om galleriet finns
  const img = document.getElementById('gallery-image');
  const prev = document.getElementById('gal-prev');
  const next = document.getElementById('gal-next');
  if (!img || !prev || !next) return;

  // Byt filnamn när ni har riktiga bilder i /img
  const images = ['/img/gal1.jpg', '/img/gal2.jpg', '/img/gal3.jpg'];
  let i = 0;

  function show(n) {
    i = (n + images.length) % images.length;
    img.src = images[i];
  }

  prev.addEventListener('click', () => show(i - 1));
  next.addEventListener('click', () => show(i + 1));
});
