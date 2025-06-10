const estrellas = document.querySelectorAll(".estrella");
const resultado = document.getElementById("resultadoEvaluacion");

// Cargar la evaluación al abrir
window.onload = () => {
  const evaluacion = localStorage.getItem("evaluacionJuego");
  if (evaluacion) {
    marcarEstrellas(parseInt(evaluacion));
    resultado.textContent = `Gracias por tu calificación: ${evaluacion} estrella(s)`;
  }
};

// Manejar clics en estrellas
estrellas.forEach((estrella) => {
  estrella.addEventListener("click", () => {
    const valor = parseInt(estrella.getAttribute("data-valor"));
    localStorage.setItem("evaluacionJuego", valor);
    marcarEstrellas(valor);
    resultado.textContent = `Gracias por tu calificación: ${valor} estrella(s)`;
  });
});

function marcarEstrellas(valor) {
  estrellas.forEach((estrella, index) => {
    if (index < valor) {
      estrella.classList.add("activa");
    } else {
      estrella.classList.remove("activa");
    }
  });
}

localStorage.getItem("evaluacionJuego");
