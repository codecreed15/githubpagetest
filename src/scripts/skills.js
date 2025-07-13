const skillsContainer = document.getElementById("contentSkills");

document.addEventListener("DOMContentLoaded", function () {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      crearSkills(data["Skills"]); // 👈 nueva función
    });
});

function crearSkills(skillsData) {
  const template = document.querySelector("#template2").content;
  const fragment = document.createDocumentFragment();

  Object.entries(skillsData).forEach(([categoria, contenido]) => {
    const clone = template.cloneNode(true);

    // Establecer título (ej: Frontend, Backend...)
    clone.querySelector(".headingSkills").textContent = categoria;

    // Limpiar lista original del template (si tiene <li> de ejemplo)
    const ul = clone.querySelector(".iconSkills");
    ul.innerHTML = "";

    // Insertar íconos
    Object.entries(contenido.tecnologias).forEach(([nombre, rutaImg]) => {
      const li = document.createElement("li");
      li.classList.add("list-icon");

      const img = document.createElement("img");
      img.classList.add("iconImagen");
      img.src = `src/images/${rutaImg}`;
      img.alt = nombre;
      img.title = nombre;

      li.appendChild(img);
      ul.appendChild(li);
    });

    fragment.appendChild(clone);
  });

  skillsContainer.appendChild(fragment);
}