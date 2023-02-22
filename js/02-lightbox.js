import { galleryItems } from './gallery-items.js';

// создадим галерею
    // Вариант 1
            //const divGallery = document.querySelector('.gallery');

            //const galleryImg = [];
            //for (let item of galleryItems) {
            //    let a = document.createElement('a');
            //    a.classList.add('gallery__item');
            //    a.href = item.original;
            //    a.innerHTML = `<img
            //                        class="gallery__image"
            //                        src=${item.preview}
            //                        alt=${item.description}
            //                    />`;
            //    galleryImg.push(a)
            //}
            //divGallery.append(...galleryImg);

    // Вариант 2
function patternHtml(item) {
    return `<a class="gallery__item" href=${item.original}>
                <img
                    class="gallery__image"
                    src=${item.preview}
                    alt=${item.description}
                />
            </a>`
}
const galleryImg = galleryItems.map(item => patternHtml(item)).join('');
document.querySelector('.gallery').innerHTML = galleryImg;

// модальное окно
const lightbox = new SimpleLightbox('.gallery a', { captionsData:'alt' });

console.log(galleryItems);
