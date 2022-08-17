import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryEl: document.querySelector(".gallery"),
};

function loadGallery() {
  let result = galleryItems
    .map((gItem) => {
      return `
    <div class="gallery__item">
    <a class="gallery__link" href="${gItem.original}">
    <img class="gallery__image" src="${gItem.preview}" alt="${gItem.description}" data-source="${gItem.original}" />
  </a>
</div>
`;
    })
    .join("");

  refs.galleryEl.insertAdjacentHTML("beforeend", result);
}

loadGallery();

refs.galleryEl.addEventListener("click", onPictureClick);

function onPictureClick(evt) {
  evt.preventDefault();
  if (evt.target.classList.contains("gallery")) {
    return;
  }

  const source = evt.target.dataset.source;

  const instance = basicLightbox.create(`
    <img src="${source}" width="800" height="600">
`);
  instance.show();
}
