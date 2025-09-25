document.addEventListener('DOMContentLoaded', function () {

  // Projects
  const projectList = document.getElementById('project-list');
  if (projectList) {
    axios.get('/data/projects-david.json').then(response => {
      const projects = response.data;
      let html = '';
      for (let project of projects) {
        html += `
          <article>
            <h3>${project.title}</h3>
            <p>${project.description}</p>
          </article>
        `;
      }
      projectList.innerHTML = html;
    });
  }

  // Gallery
const gallery = document.getElementById('gallery');
if (gallery) {
  const images = gallery.dataset.images.split(',');
  let index = 0;
  const slide = document.getElementById('slide');

  function showImage() {
    slide.src = images[index];
  }

  document.getElementById('prev').onclick = function () {
    index--;
    if (index < 0) index = images.length - 1;
    showImage();
  };

  document.getElementById('next').onclick = function () {
    index++;
    if (index >= images.length) index = 0;
    showImage();
  };

  showImage();
}


  // Skills
const skillBars = document.querySelectorAll('#skills .skill');
skillBars.forEach(skill => {
  const level = skill.dataset.level;
  skill.querySelector('.fill').style.width = level + '%';
});


});
