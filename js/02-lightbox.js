import { galleryItems } from './gallery-items.js';
// Change code below this line


const galleryContainer = document.querySelector('.gallery');
const itemsMarkup = createGalleryItemsMarkup(galleryItems);
galleryContainer.insertAdjacentHTML('beforeend', itemsMarkup);


// rendered items
function createGalleryItemsMarkup(items) {
  return items
    .map(({ preview, original, description }) => {
      return `<li class="gallery__item">
   <a class="gallery__link" href="${original}">
      <img class="gallery__image" src="${preview}" alt="${description}" />
   </a>
</li>`;
    })
    .join('');
}

var lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt', captionPosition: 'bottom', captionDelay: 250
    });

// Var 2

// const galleryContainer = document.querySelector('.gallery');

// const markup = galleryItems.reduce(
//     (acc, { original, preview, description }) =>
//       (acc += `<li>
//     <a class="gallery__item" href="${original}">
//       <img
//         class="gallery__image"
//         src="${preview}"
//         alt="${description}"
//       />
//     </a>
//   </li>`),
//     ''
//   );
  
//   galleryContainer.insertAdjacentHTML('beforeend', markup);
  
//   const lightbox = new SimpleLightbox('.gallery a', {
//     captionsData: 'alt',
//     captionDelay: 250,
//   });