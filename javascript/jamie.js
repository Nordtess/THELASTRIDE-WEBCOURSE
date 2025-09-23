// Mouse-pointer animation.
const circleElement = document.querySelector(".circle");

const mouse = { x: 0, y: 0 },
    circle = { x: 0, y: 0 };

window.addEventListener("mousemove", e => {
    mouse.x = e.x;
    mouse.y = e.y;
});

const speed = 0.15;

const tick = () => {
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;

    circleElement.style.transform =
        `translate(${circle.x}px, ${circle.y}px)`;
    window.requestAnimationFrame(tick);
}

tick();

// Image click "enlarger"
const slideshowImage = document.getElementById("image");
const slideshowCaption = document.getElementById("caption");
const slideshowIntro = document.querySelector("#slideshow p:first-child");

if (slideshowImage && slideshowCaption && slideshowIntro) {
    slideshowImage.addEventListener("click", function () {
        this.classList.toggle("enlarged");
        slideshowCaption.classList.toggle("enlarged");
        slideshowIntro.classList.toggle("enlarged");
    });

    // Image click "shrinkisizer"
    document.addEventListener("click", function (e) {
        if (e.target !== slideshowImage && slideshowImage.classList.contains("enlarged")) {
            slideshowImage.classList.remove("enlarged");
            slideshowCaption.classList.remove("enlarged");
            slideshowIntro.classList.remove("enlarged");
        }
    });
}







// Slideshow.
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
    e.target.blur();
});

document.getElementById("previous").addEventListener("click", (e) => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    updateSlideshow();
    e.target.blur();
});