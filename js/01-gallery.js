import { galleryItems } from "./gallery-items.js";
// Change code below this line

console.log(galleryItems);

const refs = {
  galleryEl: document.querySelector(".gallery"),
  galleryList: document.createElement("ul"),
};

refs.galleryEl.append(refs.galleryList);

loadGallery();

function loadGallery() {
  let result = galleryItems
    .map((gItem) => {
      return `
      <li class="gallery__item">
      <img src="${gItem.preview}" alt="${gItem.description}">
    </li>`;
    })
    .join("");

  refs.galleryList.innerHTML = result;
}
