/* tipos.js */
document.addEventListener("DOMContentLoaded", function() {
    const genresContent = document.getElementById("music-genres");
    const genres = [
        {
            name: "Rock",
            description: "Género caracterizado por el uso de guitarras eléctricas y una estructura rítmica marcada. Ejemplos: The Beatles, Queen, Nirvana."
        },
        {
            name: "Jazz",
            description: "Género musical nacido en Nueva Orleans, basado en la improvisación y ritmos sincopados. Ejemplos: Louis Armstrong, Miles Davis."
        },
        {
            name: "Clásica",
            description: "Música académica que abarca desde el Barroco hasta la actualidad. Ejemplos: Mozart, Beethoven, Bach."
        },
        {
            name: "Pop",
            description: "Música popular con melodías pegajosas y producción comercial. Ejemplos: Michael Jackson, Madonna, Taylor Swift."
        },
        {
            name: "Reggaetón",
            description: "Género con influencias del reggae y hip-hop, originado en Puerto Rico. Ejemplos: Daddy Yankee, Bad Bunny."
        }
    ];

    genres.forEach(genre => {
        const section = document.createElement("section");
        section.innerHTML = `<h2>${genre.name}</h2><p>${genre.description}</p>`;
        genresContent.appendChild(section);
    });
});
