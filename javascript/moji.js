document.addEventListener("DOMContentLoaded", () => {
  // Load projects from JSON with Axios
  axios.get("../data/moji-projects.json")
    .then(response => {
      const projects = response.data;
      const container = document.getElementById("projects-list");

      projects.forEach(p => {
        const div = document.createElement("div");
        div.classList.add("project-card");
        div.innerHTML = `
          <h3>${p.title}</h3>
          <p><strong>Client:</strong> ${p.customer}</p>
          <p>${p.description}</p>
        `;
        container.appendChild(div);
      });
    })
    .catch(err => console.error("Error loading projects:", err));
});

