const form = document.getElementById("form");
const emailInput = document.getElementById("email");
const emailError = document.querySelector("#email + span.error");

function showEmailError() {
    if (!emailInput.validity.valid) {
        emailError.textContent = "Please enter a valid email";
        emailError.className = "error active";
    }
}

export function attachEmailEventListener() {
    form.addEventListener("submit", (event) => {
        showEmailError();
        event.preventDefault();
    });
    emailInput.addEventListener("input", () => {
        if (emailInput.validity.valid) {
            emailError.textContent = "";
            emailError.className = "error";
        } else showEmailError();
    });
}
