const projects = document.getElementById("contentProjects");
+document.addEventListener("DOMContentLoaded", function () {
  fetch("../src/data/data.json")
    .then((response) => response.json())
    .then((data) => {
      crearCards(data["Proyectos"]);
    });
});

function crearCards(datos) {
  let template;
  let contenedor;

  template = document.querySelector("#template").content;
  contenedor = projects;

  const fragment = document.createDocumentFragment();
  Object.entries(datos).forEach(([id, proyecto]) => {
    const clone = template.cloneNode(true);
    clone.querySelector(".project").id = id;
    clone.querySelector(".imagenProject").src = `/src/images/${proyecto.imagen}`;
    clone.querySelector(".projectTitle").textContent = proyecto.title;
    clone.querySelector(".projectDescription").textContent =
      proyecto.descripcion1;

    proyecto.tecnologias.forEach((element) => {
      const li = document.createElement("li");
      li.classList.add("tecnology");
      li.textContent = element;

      // Insertarlo en el clone
      clone.querySelector(".projectTecnologies").appendChild(li);
    });

    fragment.appendChild(clone);
  });

  contenedor.appendChild(fragment);
}
