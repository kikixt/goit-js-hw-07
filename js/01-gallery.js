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
              <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}" />
            </a>
          </li>
        `;
      })
      .join('');
  }

  // Додавання розмітки галереї до контейнера
  galleryContainer.innerHTML = createGalleryItems(galleryItems);

  // Додаємо обробник подій для відкриття модального вікна
  galleryContainer.addEventListener('click', event => {
    event.preventDefault(); // Заборона стандартної поведінки переходу за посиланням

    if (event.target.tagName === 'IMG') {
      const imageUrl = event.target.dataset.source;

      const lightbox = basicLightbox.create(`
        <img src="${imageUrl}" width="800" height="600">
      `);

      lightbox.show();
    }
  });
});
