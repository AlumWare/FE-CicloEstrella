const filtroBotones = document.querySelectorAll('.filtroBotones button');
const preguntas = document.querySelectorAll('.preguntaRespuesta');

filtroBotones.forEach((boton) => {
    boton.addEventListener('click', () => {
        const categoria = boton.textContent.toLowerCase(); 

        preguntas.forEach((pregunta) => {
            if (categoria === 'general' || pregunta.dataset.category === categoria) {
                pregunta.style.display = 'block'; 
            } else {
                pregunta.style.display = 'none'; 
            }
        });
    });
});

filtroBotones.forEach((boton) => {
    boton.addEventListener('click', () => {
       
        filtroBotones.forEach((b) => b.classList.remove('activo'));
      
        boton.classList.add('activo');

        const categoria = boton.textContent.toLowerCase();

        preguntas.forEach((pregunta) => {
            if (categoria === 'general' || pregunta.dataset.category === categoria) {
                pregunta.style.display = 'block';
            } else {
                pregunta.style.display = 'none';
            }
        });
    });
});