// Script para abrir e fechar o lightbox
const galleryLinks = document.querySelectorAll('[data-lightbox="gallery"]');
const lightbox = document.getElementById('lightbox');

galleryLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const imageSrc = link.getAttribute('href');
    const imageAlt = link.querySelector('img').getAttribute('alt');

    const lightboxImage = lightbox.querySelector('img');
    lightboxImage.setAttribute('src', imageSrc);
    lightboxImage.setAttribute('alt', imageAlt);

    lightbox.style.display = 'flex';
  });
});

lightbox.addEventListener('click', () => {
  lightbox.style.display = 'none';
});
