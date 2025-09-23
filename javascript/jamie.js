const slides = [
    { img: "/images/jamie/jamie1.png", caption: "Jamie pumping iron on the gym, wishing he had the genes of Arnold." },
    { img: "/images/jamie/jamie2.png", caption: "Jamie also loves traveling, and do it as often as possible!" },
    { img: "/images/jamie/jamie3.png", caption: "He also loves playing video games which he has done since early childhood." }
];

let currentIndex = 0;
const imgEl = document.getElementById("image");
const captionEl = document.getElementById("caption");

function updateSlideshow() {
    imgEl.src = slides[currentIndex].img;
    captionEl.textContent = slides[currentIndex].caption;
}



updateSlideshow();


document.getElementById("next").addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlideshow();
});

document.getElementById("previous").addEventListener("click", () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlideshow();
});