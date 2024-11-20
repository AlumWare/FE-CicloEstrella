document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.tab-button');
    const contents = document.querySelectorAll('.tab-content');

    buttons.forEach(button => {
        button.addEventListener('click', () => {
            const tabId = button.getAttribute('data-tab');

            // Quitar clases activas de botones y contenido
            buttons.forEach(btn => btn.classList.remove('active-tab-button'));
            contents.forEach(content => content.classList.remove('active-tab'));

            // Agregar clases activas al botón y contenido correspondiente
            button.classList.add('active-tab-button');
            document.getElementById(tabId).classList.add('active-tab');
        });
    });
});
