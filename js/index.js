/* js/index.js */
document.addEventListener("DOMContentLoaded", function() {
    const destacadosContainer = document.getElementById("destacados-container");
    const destacados = [
        { nombre: "Historia de la música", imagen: "images/img1.jpg", enlace: "pages/historia.html" },
        { nombre: "Géneros musicales", imagen: "images/img2.jpg", enlace: "pages/tipos.html" },
        { nombre: "Fabricantes de instrumentos", imagen: "images/img3.jpg", enlace: "pages/fabricantes.html" }
    ];
    
    destacados.forEach(dest => {
        const div = document.createElement("div");
        div.classList.add("destacado-item");
        div.innerHTML = `
            <a href="${dest.enlace}">
                <img src="${dest.imagen}" alt="${dest.nombre}">
                <p>${dest.nombre}</p>
            </a>
        `;
        destacadosContainer.appendChild(div);
    });

    // Frases inspiradoras sobre música
    const frases = [
        "La música puede cambiar el mundo porque puede cambiar a las personas. - Bono",
        "Donde las palabras fallan, la música habla. - Hans Christian Andersen",
        "La música es el arte más directo, entra por el oído y va al corazón. - Magdalena Martínez",
        "Sin música, la vida sería un error. - Friedrich Nietzsche"
    ];
    document.getElementById("frase").textContent = frases[Math.floor(Math.random() * frases.length)];

    // Recomendación musical aleatoria
    const recomendaciones = [
        "Escucha 'Bohemian Rhapsody' de Queen",
        "Prueba algo nuevo con 'Clair de Lune' de Debussy",
        "Sumérgete en el jazz con 'Take Five' de Dave Brubeck",
        "Déjate llevar por 'Shape of You' de Ed Sheeran"
    ];
    
    document.getElementById("generar-recomendacion").addEventListener("click", function() {
        document.getElementById("recomendacion").textContent = recomendaciones[Math.floor(Math.random() * recomendaciones.length)];
    });
});
