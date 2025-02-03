const form = document.getElementById("form");
const zipInput = document.getElementById("zip-code");
const zipError = document.querySelector("#zip-code + span.error");

function checkZipCode() {
    const constraints = {
        "United Kingdom": [
            /^(GIR\s?0AA|(?:(?:[A-PR-UWYZ][0-9]{1,2})|(?:[A-PR-UWYZ][A-HK-Y][0-9]{1,2})|(?:[A-PR-UWYZ][0-9][A-HJKPSTUW])|(?:[A-PR-UWYZ][A-HK-Y][0-9][ABEHMNPRVWXY]))\s?[0-9][ABD-HJLNP-UW-Z]{2})$/i,
            "Please enter valid UK Zip Code",
        ],
        Malaysia: [/^\d{5}$/, "Please enter valid Malaysian Zip Code"],
    };
    const country = document.getElementById("country").value;
    const constraint = new RegExp(constraints[country]?.[0], "");
    if (constraint.test(zipInput.value) || zipInput === "-") {
        zipError.textContent = "";
        zipError.className = "error";
    } else {
        const errorMessage = constraints[country][1];
        zipError.textContent = errorMessage;
        zipError.className = "error active";
    }
}

export function attachZipEventListeners() {
    form.addEventListener("submit", (event) => {
        checkZipCode();
        event.preventDefault();
    });
    zipInput.addEventListener("input", checkZipCode);
}
