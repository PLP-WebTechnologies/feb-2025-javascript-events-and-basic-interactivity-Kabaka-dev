const galleryImages = document.querySelectorAll('.gallery-img');
const mainImage = document.getElementById('main-image');

galleryImages.forEach(img => {
  img.addEventListener('click', () => {
    mainImage.src = img.src;
  });
});
