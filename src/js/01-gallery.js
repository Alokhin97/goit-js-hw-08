import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";
// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
console.log(galleryItems);
const galleryList = document.querySelector("div.gallery");
const createImage = (item, parent) => {
  const { preview, original, description } = item;
  const img = document.createElement("img");

  img.classList.add("gallery__image");
  img.src = preview;
  img.alt = description;

  parent.appendChild(img);
};

const createItem = (item) => {
  const { original } = item;
  const a = document.createElement("a");
  a.classList.add("gallery__item");
  a.href = original;
  createImage(item, a);

  return a;
};

const renderListItems = (arr) => {
  const items = arr.map((item) => createItem(item));

  galleryList.append(...items);
};

renderListItems(galleryItems);
const lightbox = new SimpleLightbox(".gallery a", {
    captionsData: "alt",
    captionDelay: 250,
    scrollZoom: false,
  });
