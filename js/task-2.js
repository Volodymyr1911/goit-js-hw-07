const images = [
  {
    url: "https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?dpr=2&h=750&w=1260",
    alt: "White and Black Long Fur Cat",
  },
  {
    url: "https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?dpr=2&h=750&w=1260",
    alt: "Orange and White Koi Fish Near Yellow Koi Fish",
  },
  {
    url: "https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?dpr=2&h=750&w=1260",
    alt: "Group of Horses Running",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/09/27/the-alps-4209272_1280.jpg",
    alt: "Alpine Spring Meadows",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/16/21/10/landscape-4208255_1280.jpg",
    alt: "Nature Landscape",
  },
  {
    url: "https://cdn.pixabay.com/photo/2019/05/17/04/35/lighthouse-4208843_1280.jpg",
    alt: "Lighthouse Coast Sea",
  },
];

const galleryList = document.querySelector(".gallery");
const fragment = document.createDocumentFragment();

images.forEach((image) => {
  const listItem = document.createElement("li");
  const imageElement = document.createElement("img");

  listItem.classList.add("gallery-item");

  imageElement.src = image.url;
  imageElement.alt = image.alt;
  imageElement.style.maxWidth = "360px";
  imageElement.style.height = "300px";

  listItem.appendChild(imageElement);
  fragment.appendChild(listItem);
});

galleryList.appendChild(fragment);

galleryList.style.display = "flex";
galleryList.style.flexDirection = "row";
galleryList.style.flexWrap = "wrap";
galleryList.style.gap = "48px 24px";
galleryList.style.listStyleType = "none";
galleryList.style.padding = "0";

const lastItem = galleryItems[galleryItems.length - 1];
lastItem.style.marginRight = "0";
