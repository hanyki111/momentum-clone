const images = ["0.jpg", "1.jpg", "2.jpg", "3.jpg"];

const randomImage = images[Math.floor(Math.random() * images.length)];

const bgimage = document.createElement("img");

// 강의 코드
// bgimage.src = `img/${randomImage}`;
// document.body.appendChild(bgimage);

document.body.style.backgroundImage =`url('img/${randomImage}')`;
