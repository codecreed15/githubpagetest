const serviciosContainer = document.getElementById("contentServicios");

document.addEventListener("DOMContentLoaded", function () {
  fetch("/data.json")
    .then((response) => response.json())
    .then((data) => {
      crearServicios(data["Servicios"]);
    });
});

function crearServicios(datos) {
  const template = document.querySelector("#template4").content;
  const contenedor = serviciosContainer;
  const fragment = document.createDocumentFragment();

  datos.forEach((servicio, index) => {
    const clone = template.cloneNode(true);

    clone.querySelector(".service").id = `servicio-${index}`;
    clone.querySelector(".serviceTitle").textContent = servicio.titulo;
    clone.querySelector(".estado").textContent = servicio.estado;
    clone.querySelector(".serviceDescription").textContent = servicio.descripcion;
    clone.querySelector(".precio").textContent = "$ "+servicio.precio+".00";

    const ul = clone.querySelector(".serviceTecnologies");
    ul.innerHTML = "";

    if (servicio.etiquetas && servicio.etiquetas.length) {
      servicio.etiquetas.forEach((etiqueta) => {
        const li = document.createElement("li");
        li.classList.add("tecnology");
        li.textContent = etiqueta;
        ul.appendChild(li);
      });
    }

    fragment.appendChild(clone);
  });

  contenedor.appendChild(fragment);
}