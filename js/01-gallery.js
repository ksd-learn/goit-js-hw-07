import { galleryItems } from './gallery-items.js';

// создадим галерею
const divGallery = document.querySelector('.gallery');

const galleryImg = [];
for (let item of galleryItems) {
    let a = document.createElement('a');
    a.classList.add('gallery__link');
    a.href = item.original;
    a.innerHTML = `<img
                        class="gallery__image"
                        src=${item.preview}
                        data-source=${item.original}
                        alt=${item.description}
                    />`;
    galleryImg.push(a)
}
divGallery.append(...galleryImg);

// модальное окно
divGallery.addEventListener('click', event => {
    event.preventDefault();
    let targClick = event.target;
    
    const instance = basicLightbox.create(`
        <img class="gallery__image" src=${targClick.dataset.source} alt=${targClick.alt}>
    `);
    
    const closeKey = event => {
        console.log(event.key)
        if (event.key == 'Escape') {
            instance.close();
            divGallery.removeEventListener('keydown', closeKey)
        }
    };

    instance.show();
    divGallery.addEventListener('keydown', closeKey)
    
});

console.log(galleryItems);
