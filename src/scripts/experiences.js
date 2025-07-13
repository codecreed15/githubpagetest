document.addEventListener("DOMContentLoaded", function () {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      crearExperiencias(data["Experiencias"]);
    });
});

const experiencesContainer = document.getElementById("contentExperiences");

function crearExperiencias(dataExperiencias) {
  const template = document.querySelector("#template3").content;
  const fragment = document.createDocumentFragment();

  dataExperiencias.forEach(exp => {
    const clone = template.cloneNode(true);

    clone.querySelector(".expPosition").textContent = exp.titulo;
    clone.querySelector(".expProject").textContent = exp.proyecto;
    clone.querySelector(".expClientName").textContent = exp.cliente;
    clone.querySelector(".expFecha").textContent = exp.fecha;
    clone.querySelector(".expLugar").textContent = exp.ubicacion;
    clone.querySelector(".expDescripcion").textContent = exp.descripcion;

    const ul = clone.querySelector(".expTecnologias");
    ul.innerHTML = ""; // Por si el template tiene elementos dummy

    exp.tecnologias.forEach(tecnologia => {
      const li = document.createElement("li");
      li.textContent = tecnologia;
      ul.appendChild(li);
    });

    fragment.appendChild(clone);
  });

  experiencesContainer.appendChild(fragment);
}