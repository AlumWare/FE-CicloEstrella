const filtroBoton = document.getElementById('filtroboton');
const filtroPanel = document.getElementById('filtro-panel');
const cerrarFiltro = document.getElementById('cerrar-filtro');
const carrerasPorFacultad = {
    "facultad1": ["Hotelería y Administración", "Turismo y Administración", "Gastronomía y Gestión Culinaria"],
    "facultad2": ["Arquitectura"],
    "facultad3": ["Música", "Artes escénicas"],
    "facultad4": ["Enfermería", "Farmacia y Bioquímica", "Biología", "Ciencias de la Actividad Física y el Deporte", "Medicina", "Medicina Veterinaria", "Nutrición y Dietética", "Odontología", "Terapia Física"],
    "facultad5": ["Traducción e Interpretación Profesional"],
    "facultad6": ["Comunicación Audiovisual y Medios Interactivos", "Comunicación e Imagen Empresarial", "Comunicación y Marketing", "Comunicación y Periodismo", "Comunicación y Publicidad", "Comunicación y Fotografía"],
    "facultad7": ["Derecho", "Relaciones Internacionales"],
    "facultad8": ["Diseño Industrial", "Diseño Profesional de Interiores", "Diseño Profesional Gráfico", "Diseño y Gestión en Moda"],
    "facultad9": ["Economía y Ciencia de Datos", "Economía y Finanzas", "Economía y Negocios Internacionales", "Economía Gerencial", "Ciencias Políticas"],
    "facultad10": ["Educación y Gestión del Aprendizaje"],
    "facultad11": ["Ingeniería de Ciberseguridad", "Ingeniería Biomédica", "Ciencias de la Computación", "Ingeniería Civil", "Ingeniería de Gestión Empresarial", "Ingeniería de Gestión Minera", "Ingeniería de Sistemas de Información", "Ingeniería de Software", "Ingeniería Electrónica", "Ingeniería Industrial", "Ingeniería Mecatrónica", "Ingeniería Ambiental"],
    "facultad12": ["Administración", "Administración y Agronegocios", "Administración y Ciencia de Datos para Negocios", "Administración y Finanzas", "Administración y Gerencia del Emprendimiento", "Administración y Marketing", "Administración y Negocios del Deporte", "Administración y Negocios Digitales", "Administración y Negocios Internacionales", "Administración y Recursos Humanos", "Contabilidad y Administración", "Contabilidad y Finanzas"],
    "facultad13": ["Psicología"]
};

filtroBoton.addEventListener('click', () => {
    filtroPanel.style.display = 'block';
});

cerrarFiltro.addEventListener('click', () => {
    filtroPanel.style.display = 'none';
});

window.addEventListener('click', (event) => {
    if (event.target === filtroPanel) {
        filtroPanel.style.display = 'none';
    }
});

document.getElementById('aplicar-filtros').addEventListener('click', () => {
    
    console.log("Filtros aplicados");
    filtroPanel.style.display = 'none';
});

document.getElementById('borrar-filtros').addEventListener('click', () => {
    
    document.getElementById('sede').value = "";
    document.getElementById('modalidad').value = "";
    document.getElementById('facultad').value = "";
    document.getElementById('carrera').value = "";
    console.log("Filtros borrados");
});

document.querySelectorAll('.sede-boton').forEach(boton => {
    boton.addEventListener('click', () => {
        document.querySelectorAll('.sede-boton').forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');
    });
});

document.querySelectorAll('.modalidad-boton').forEach(boton => {
    boton.addEventListener('click', () => {
        document.querySelectorAll('.modalidad-boton').forEach(b => b.classList.remove('activo'));
        boton.classList.add('activo');
    });
});

document.getElementById('facultad-select').addEventListener('change', function() {
    const facultadSeleccionada = this.value;
    const carreraSelect = document.getElementById('carrera-select');
    
    console.log("Facultad seleccionada:", facultadSeleccionada); 

    carreraSelect.innerHTML = '<option value="">Seleccionar Carrera</option>';

    if (facultadSeleccionada && carrerasPorFacultad[facultadSeleccionada]) {
        const carreras = carrerasPorFacultad[facultadSeleccionada];
        carreras.forEach(carrera => {
            const option = document.createElement('option');
            option.value = carrera;
            option.textContent = carrera;
            carreraSelect.appendChild(option);
        });
        console.log("Carreras agregadas:", carreras); 
    }
});

