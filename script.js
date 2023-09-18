// Define the API endpoint for exchange rates
const apiUrl = "https://api.exchangerate-api.com/v4/latest/INR"; // You can change "USD" to your base currency

// Function to fetch and display exchange rates
async function fetchExchangeRates() {
    try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
            throw new Error("Failed to fetch exchange rates.");
        }
        const data = await response.json();

        // Get reference to the exchangeRates div
        const exchangeRatesDiv = document.getElementById("exchangeRates");

        // Create a table to display exchange rates
        const table = document.createElement("table");

        // Loop through the exchange rates and add rows with class attribute to the table
        for (const currency in data.rates) {
            const row = document.createElement("tr");
            row.classList.add("exchange-rate-row"); // Add a class to each row
            row.innerHTML = `
                <td>${currency}</td>
                <td>${data.rates[currency]}</td>
            `;
            table.appendChild(row);
        }

        // Append the table to the exchangeRates div
        exchangeRatesDiv.appendChild(table);
    } catch (error) {
        console.error("Error fetching exchange rates:", error);
    }
}

// Attach the fetchExchangeRates function to the button click event
const fetchButton = document.getElementById("fetchButton");
fetchButton.addEventListener("click", fetchExchangeRates);
