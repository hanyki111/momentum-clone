const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

bgimage.src = `img/${randomImage}`;
document.body.appendChild(bgimage);
