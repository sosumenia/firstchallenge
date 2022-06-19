const imgs = [
    "1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg"
];
const img = document.querySelector("img");
const chosenImg = imgs[Math.floor(Math.random() * imgs.length)];
img.src = `img/${chosenImg}`;