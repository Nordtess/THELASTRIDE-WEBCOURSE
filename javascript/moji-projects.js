document.addEventListener("DOMContentLoaded", () => {
  // Hämta projekten från JSON
  axios.get("../data/moji-projects.json")
    .then(response => {
      const projects = response.data;

      // Bilder kopplade till varje projekt
      const images = [
        "../images/faktura.png",    // kopplas till projects[0]
        "../images/Fisk.png",       // kopplas till projects[1]
        "../images/dashboard.png",  // kopplas till projects[2]
        "../images/Cookie.png",     // kopplas till projects[3]
        "../images/Train.png"       // kopplas till projects[4]
      ];

      let index = 0;

      // HTML-element
      const imgElement = document.getElementById("slideshow-image");
      const titleElement = document.getElementById("project-title");
      const clientElement = document.getElementById("project-client");
      const descElement = document.getElementById("project-description");

      // Uppdatera bild + projektinfo
      function updateSlide() {
        imgElement.src = images[index];
        imgElement.alt = projects[index].title; // alt-text från projektet
        titleElement.textContent = projects[index].title;
        clientElement.textContent = projects[index].customer;
        descElement.textContent = projects[index].description;
      }

      // Föregående knapp
      document.getElementById("prev-btn").addEventListener("click", () => {
        index = (index - 1 + projects.length) % projects.length;
        updateSlide();
      });

      // Nästa knapp
      document.getElementById("next-btn").addEventListener("click", () => {
        index = (index + 1) % projects.length;
        updateSlide();
      });

      // Starta med första projektet
      updateSlide();
    })
    .catch(err => {
      console.error("Error loading projects:", err);
      document.getElementById("project-title").textContent = "Could not load projects";
    });
});
