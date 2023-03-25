import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const gallery = document.querySelector('.gallery')

const listGallery = galleryItems.map(({ preview, original, description }) => {
    return `<li class="gallery__item"><a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}"></a> </li>`
}).join('');

gallery.insertAdjacentHTML('beforeend', listGallery)

gallery.addEventListener('click', onOpenGalleryList)


function onOpenGalleryList(event) {
    event.preventDefault();

    const target = event.target;

    if (target.nodeName !== 'IMG') {
        return
    }
}

const lightbox = new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});