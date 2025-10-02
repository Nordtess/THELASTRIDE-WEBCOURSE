// Testimonials Slider Functionality
document.addEventListener('DOMContentLoaded', function() {
    const slider = document.querySelector('.slider');
    const slides = document.querySelectorAll('.slide');
    const prevBtn = document.querySelector('.prev-btn');
    const nextBtn = document.querySelector('.next-btn');
    const dots = document.querySelectorAll('.dot');
    
    let currentSlide = 0;
    const totalSlides = slides.length;
    
    function updateSlider() {
        slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentSlide);
        });
    }
    
    nextBtn.addEventListener('click', function() {
        currentSlide = (currentSlide + 1) % totalSlides;
        updateSlider();
    });
    
    prevBtn.addEventListener('click', function() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        updateSlider();
    });
    
    dots.forEach(dot => {
        dot.addEventListener('click', function() {
            currentSlide = parseInt(this.getAttribute('data-slide'));
            updateSlider();
        });
    });
});

// Du behöver lägga till denna kod i abdimalik.js
axios.get('projects.json')
  .then(response => {
    const projects = response.data.projects;
    const container = document.getElementById('projects-container');
    
    projects.forEach(project => {
      const projectElement = document.createElement('div');
      projectElement.className = 'project-item';
      projectElement.innerHTML = `
        <h3>${project.title}</h3>
        <p><strong>Client:</strong> ${project.client}</p>
        <p>${project.description}</p>
      `;
      container.appendChild(projectElement);
    });
  })
  .catch(error => {
    console.error('Error loading projects:', error);
  });

// Ta bort den duplicerade testimonials-koden du hade!