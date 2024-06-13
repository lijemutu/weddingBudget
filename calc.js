// Get elements
const budgetInput = document.getElementById('budget');
const guestsInput = document.getElementById('guests');
const weddingCostOutput = document.getElementById('wedding');
const ulElement = document.getElementById('weddingUl');

// Function to calculate and update the cost per guest
function updateCostPerGuest() {
    const budget = parseFloat(budgetInput.value);
    const guests = parseInt(guestsInput.value);
    weddingCostOutput.textContent = '';
    ulElement.innerHTML = ''
        if(guests > 0) {
        const costPerGuest = budget / guests;

        if (costPerGuest >= 850 && costPerGuest < 1300) {
            weddingCostOutput.textContent = 'Incluye:';
            ulElement.innerHTML = '';
            // Array of items to insert into the list
            const items = ['Salón (Gama media)', 'Servicio (meseros y limpieza)', 'Banquete (3 tiempos)', 'Centros de mesa Decoración en acceso', 'Dj', 'Decoración mesa principal'];

            // Get the reference to the ul element

            // Loop through the array and create an li element for each item
            items.forEach(item => {
                // Create a new li element
                const liElement = document.createElement('li');

                // Set the text content of the li element
                liElement.textContent = item;

                // Append the li element to the ul element
                ulElement.appendChild(liElement);
            });
        }
        if (costPerGuest >= 1301 && costPerGuest < 1500) {
            weddingCostOutput.textContent = 'Incluye:';
            ulElement.innerHTML = '';
            // Array of items to insert into the list
            const items = ['Salón (Gama alta)', 'Banquete (4 tiempos)', 'Servicio (meseros y limpieza)', 'Dj (Gama alta)', 'Saxofonista', 'Centros de mesa', 'Decoración en acceso', 'Decoración mesa principal' ,'Cabina de fotos' ,'Barra de snacks'];

            // Get the reference to the ul element

            // Loop through the array and create an li element for each item
            items.forEach(item => {
                // Create a new li element
                const liElement = document.createElement('li');

                // Set the text content of the li element
                liElement.textContent = item;

                // Append the li element to the ul element
                ulElement.appendChild(liElement);
            });

        }

        if (costPerGuest > 1501) {
            weddingCostOutput.textContent = 'Incluye:';
            ulElement.innerHTML = '';
            // Array of items to insert into the list
            const items = ['Salón, Hacienda, jardín (Deluxe)', 'Banquete (4 tiempos)', 'Servicio (meseros y limpieza)', 'Dj (Gama alta)', 'Saxofonista Banda o mariachi', 'Centros de mesa', 'Decoración en acceso', 'Decoración mesa principal' ,'Cabina de fotos' ,'Barra de snacks', 'Tornafiesta'];

            // Get the reference to the ul element

            // Loop through the array and create an li element for each item
            items.forEach(item => {
                // Create a new li element
                const liElement = document.createElement('li');

                // Set the text content of the li element
                liElement.textContent = item;

                // Append the li element to the ul element
                ulElement.appendChild(liElement);
            });
        }
    }
}

    // Add event listeners to inputs
    budgetInput.addEventListener('input', updateCostPerGuest);
    guestsInput.addEventListener('input', updateCostPerGuest);

    // Initial calculation
    updateCostPerGuest();