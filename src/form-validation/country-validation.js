const countryInput = document.getElementById("country");
const countryError = document.querySelector("#country + span.error");
const form = document.getElementById("form");

function showCountryError() {
    if (countryInput.value === "-") {
        countryError.textContent = "Please select a country";
        countryError.className = "error active";
    }
}

export function attachCountryEventListener() {
    form.addEventListener("submit", (event) => {
        if (countryInput.value !== "-") {
            countryError.textContent = "";
            countryError.className = "error";
        } else {
            event.preventDefault();
            showCountryError();
        }
    });
}
