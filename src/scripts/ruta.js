document.addEventListener("DOMContentLoaded", () => {
  fetch("../src/data/data.json")
    .then((response) => response.json())
    .then((data) => {
      const proyectos = data["Proyectos"];
      const contenedores = document.querySelectorAll(".project");

      contenedores.forEach((element) => {
        element.addEventListener("click", () => {
          const id = element.id;

          if (proyectos.hasOwnProperty(id)) {
            const url = proyectos[id].url;
            if (url) {
              window.open(url, "_blank");
            }
          }
        });
      });
    })
    .catch((error) => console.error("Error al cargar el JSON:", error));
});