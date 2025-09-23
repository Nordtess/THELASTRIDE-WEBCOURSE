const slides = [
    { img: "/images/jamie/jamie1.png", caption: "I am getting myself a sports car to drive around New York" },
    { img: "/images/jamie/jamie2.png", caption: "I will inspire millions of people, listening to every word of mine" },
    { img: "/images/jamie/jamie3.png", caption: "I will spend alot of time and money adventuring the world" }
];

let currentIndex = 0;
const imgEl = document.getElementById("image");
const captionEl = document.getElementById("caption");

function updateSlideshow() {
    imgEl.src = slides[currentIndex].img;
    captionEl.textContent = slides[currentIndex].caption;
}



updateSlideshow();


document.getElementById("next").addEventListener("click", (e) => {
    currentIndex = (currentIndex + 1) % slides.length;
    updateSlideshow();
    e.target.blur(); // Remove focus after click
});

document.getElementById("previous").addEventListener("click", (e) => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlideshow();
    e.target.blur(); // Remove focus after click
});