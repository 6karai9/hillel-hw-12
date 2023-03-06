const imagesArr = [
  "1.jpg",
  "2.jpg",
  "3.jpg",
  "4.jpg",
  "5.jpg",
  "6.jpg",
  "7.jpg",
  "8.jpg",
  "9.jpg",
];

const randomIndex = Math.floor(Math.random() * imagesArr.length);
const img = new Image();

img.src = `images/${imagesArr[randomIndex]}`;

document.body.appendChild(img);
