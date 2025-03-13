function generateForms() {
    const numPersons = document.getElementById('numPersons').value;
    const formContainer = document.getElementById('formContainer');
    formContainer.innerHTML = '';
    
    if (numPersons < 1 || numPersons > 10) {
        alert("Por favor, ingrese un número entre 1 y 10.");
        return;
    }
    
    for (let i = 0; i < numPersons; i++) {
        const form = document.createElement('form');
        form.classList.add('person-form');
        form.innerHTML = `
            <h3>Persona ${i + 1}</h3>
            <input type="text" placeholder="Nombre" required>
            <input type="number" placeholder="Edad" required>
            <input type="text" placeholder="Tipo de música favorita" required>
        `;
        formContainer.appendChild(form);
    }
}