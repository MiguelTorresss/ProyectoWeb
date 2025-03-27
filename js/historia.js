/* historia.js */
document.addEventListener("DOMContentLoaded", function() {
    const historyContent = document.getElementById("history-content");
    const periods = [
        {
            title: "Orígenes de la Música",
            content: "La música ha existido desde tiempos prehistóricos, con los primeros humanos utilizando instrumentos rudimentarios como flautas de hueso y tambores de piel para comunicarse y expresar emociones."
        },
        {
            title: "Edad Media y Renacimiento",
            content: "Durante la Edad Media, la música estaba ligada a la religión, con el canto gregoriano dominando la escena. En el Renacimiento, surgieron nuevas formas como la polifonía y se desarrollaron instrumentos como el clavecín."
        },
        {
            title: "Música Clásica y Romántica",
            content: "El Barroco trajo consigo compositores como Bach y Vivaldi. Luego, en la época Clásica, Mozart y Beethoven revolucionaron la música con sinfonías y conciertos inolvidables. En el período Romántico, la música se volvió más expresiva con artistas como Chopin y Wagner."
        },
        {
            title: "Música Moderna",
            content: "El siglo XX trajo una explosión de géneros musicales con la llegada del jazz, el rock, el pop y la música electrónica, cada uno con sus características distintivas y una fuerte influencia en la cultura global."
        }
    ];

    periods.forEach(period => {
        const section = document.createElement("section");
        section.innerHTML = `<h2>${period.title}</h2><p>${period.content}</p>`;
        historyContent.appendChild(section);
    });
});
