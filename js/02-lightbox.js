import { galleryItems } from './gallery-items.js';

document.addEventListener('DOMContentLoaded', () => {
  const galleryContainer = document.querySelector('.gallery');

  // Функція для створення розмітки галереї
  function createGalleryItems(items) {
    return items
      .map(({ original, preview, description }) => {
        return `
          <li class="gallery__item">
            <a class="gallery__link" href="${original}">
              <img class="gallery__image" src="${preview}" alt="${description}" />
            </a>
          </li>
        `;
      })
      .join('');
  }

  // Додавання розмітки галереї до контейнера
  galleryContainer.innerHTML = createGalleryItems(galleryItems);

  // Підключення бібліотеки SimpleLightbox
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250
  });
});


console.log(galleryItems);
